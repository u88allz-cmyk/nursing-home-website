import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Calendar, FileText, Download } from "lucide-react";
import { getQueryFn } from "@/lib/queryClient";

interface Contact {
  id: number;
  name: string;
  phone: string;
  message: string;
  createdAt: string;
}

const Admin = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "관리자 페이지 - 해와달 요양원 | 상담 신청 관리";
  }, []);

  const { data: contacts, isLoading, error } = useQuery({
    queryKey: ['/api/contacts'],
    queryFn: getQueryFn<Contact[]>({ on401: "returnNull" }),
    enabled: isAuthorized,
  });

  const handleLogin = () => {
    // 간단한 패스워드 인증 (실제 환경에서는 보안 강화 필요)
    if (password === "haewadal2025") {
      setIsAuthorized(true);
    } else {
      alert("비밀번호가 올바르지 않습니다.");
    }
  };

  const exportToCSV = () => {
    if (!contacts) return;

    const headers = ['번호', '이름', '연락처', '문의내용', '신청일시'];
    const csvContent = [
      headers.join(','),
      ...contacts.map(contact => [
        contact.id,
        contact.name,
        contact.phone,
        `"${contact.message.replace(/"/g, '""')}"`,
        new Date(contact.createdAt).toLocaleString('ko-KR')
      ].join(','))
    ].join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `상담신청목록_${new Date().toLocaleDateString('ko-KR').replace(/\./g, '')}.csv`;
    link.click();
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">관리자 로그인</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                관리자 비밀번호
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              로그인
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>상담 신청 목록을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="text-center py-8">
            <p className="text-red-600 mb-4">데이터를 불러오는 중 오류가 발생했습니다.</p>
            <Button onClick={() => window.location.reload()}>
              다시 시도
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">상담 신청 관리</h1>
            <div className="flex gap-4">
              <Button 
                onClick={exportToCSV}
                variant="outline"
                className="flex items-center gap-2"
                disabled={!contacts || contacts.length === 0}
              >
                <Download className="w-4 h-4" />
                CSV 다운로드
              </Button>
              <Button 
                onClick={() => {
                  setIsAuthorized(false);
                  setPassword("");
                }}
                variant="outline"
              >
                로그아웃
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">총 상담 신청</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  {contacts?.length || 0}건
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">오늘 신청</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {contacts?.filter(c => 
                    new Date(c.createdAt).toDateString() === new Date().toDateString()
                  ).length || 0}건
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">이번 주 신청</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {contacts?.filter(c => {
                    const contactDate = new Date(c.createdAt);
                    const weekAgo = new Date();
                    weekAgo.setDate(weekAgo.getDate() - 7);
                    return contactDate >= weekAgo;
                  }).length || 0}건
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          {contacts && contacts.length > 0 ? (
            contacts.map((contact) => (
              <Card key={contact.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="font-mono">
                        #{contact.id.toString().padStart(4, '0')}
                      </Badge>
                      <h3 className="text-lg font-semibold">{contact.name}</h3>
                      <Badge variant="secondary">
                        {new Date(contact.createdAt).toLocaleDateString('ko-KR')}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(contact.createdAt).toLocaleString('ko-KR')}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="font-medium">연락처:</span>
                        <a 
                          href={`tel:${contact.phone}`}
                          className="text-primary hover:underline"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-primary mt-1" />
                        <div>
                          <span className="font-medium">문의 내용:</span>
                          <p className="mt-1 text-gray-700 bg-gray-50 p-3 rounded-md">
                            {contact.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  상담 신청이 없습니다
                </h3>
                <p className="text-gray-500">
                  아직 접수된 상담 신청이 없습니다.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;