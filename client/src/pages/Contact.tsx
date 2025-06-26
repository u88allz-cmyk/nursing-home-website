import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Mail, Ambulance, Send } from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // 폼 데이터를 직접 제출 (Netlify가 처리)
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Netlify Forms는 자동으로 폼을 처리하므로 추가 작업 불필요
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
    .then(() => {
      // 성공 메시지 표시
      setIsSubmitted(true);
      form.reset();
    })
    .catch((error) => {
      console.error("Form submission error:", error);
      setIsSubmitted(false);
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "전화 상담",
      content: "0507-1381-0016",
      subtitle: "평일 09:00 - 18:00",
      href: "tel:0507-1381-0016"
    },
    {
      icon: Mail,
      title: "이메일 문의",
      content: "haewadal@care.com",
      subtitle: "24시간 접수 가능",
      href: "mailto:haewadal@care.com"
    },
    {
      icon: Calendar,
      title: "방문 상담",
      content: "사전 예약 필수",
      subtitle: "평일 10:00 - 17:00",
      href: "tel:0507-1381-0016"
    },
    {
      icon: Ambulance,
      title: "응급 상황",
      content: "119 또는 응급실",
      subtitle: "생명이 위급한 경우",
      href: "tel:119"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/90 to-secondary bg-clip-text text-transparent">
              상담 문의
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              해와달 요양원에서 어르신들을 위한 최상의 케어 서비스를 제공합니다.<br />
              언제든지 편하게 문의해 주세요.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
            <div>
              <h2 className="text-3xl font-semibold mb-8 text-gray-900">요양원 상담문의</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.href}
                    className="block"
                  >
                    <Card className="shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary cursor-pointer">
                      <CardContent className="p-4 sm:p-8">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                            <info.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">{info.title}</h3>
                            <p className="text-sm sm:text-base text-gray-600 mb-2">클릭하시면 바로 연결됩니다</p>
                            <p className="text-xl sm:text-3xl font-bold text-primary mb-2 break-all">{info.content}</p>
                            {info.subtitle && (
                              <p className="text-xs sm:text-sm text-gray-500">{info.subtitle}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>

            {/* 상담 문의 폼 */}
            <Card className="shadow-sm">
              <CardContent className="p-8 lg:p-12">
                <h2 className="text-3xl font-semibold mb-8 text-gray-900">온라인 상담</h2>
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.</p>
                  </div>
                )}

                <form 
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Netlify Forms용 숨김 필드 */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div style={{ display: 'none' }}>
                    <input name="bot-field" />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="이름을 입력해주세요"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="010-0000-0000"
                      pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      문의 유형
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">문의 유형을 선택해주세요</option>
                      <option value="입소상담">입소 상담</option>
                      <option value="방문상담">방문 상담</option>
                      <option value="요양등급">요양등급 관련</option>
                      <option value="비용문의">비용 문의</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      문의 내용 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="문의하실 내용을 자세히 입력해주세요"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreed"
                      name="agreed"
                      required
                      className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="agreed" className="text-sm text-gray-600">
                      개인정보 수집 및 이용에 동의합니다. <span className="text-primary hover:underline cursor-pointer">자세히 보기</span>
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full py-4 px-6 rounded-xl shadow-lg hover:shadow-xl"
                    disabled={isSubmitted}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitted ? "전송 완료" : "상담 신청하기"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;