import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Phone, Calendar, Mail, Ambulance, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      phone: "",
      category: "",
      message: "",
      agreed: 0,
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest('POST', '/api/contacts', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "상담 신청 완료",
        description: "상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "상담 신청 실패",
        description: error.message || "상담 신청 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "대표전화",
      content: "02-0000-0000",
      subtitle: "평일 08:00-18:00 / 토요일 08:00-13:00",
      color: "primary"
    },
    {
      icon: Ambulance,
      title: "응급실",
      content: "02-0000-1119",
      subtitle: "24시간 운영",
      color: "destructive"
    },
    {
      icon: Calendar,
      title: "예약센터",
      content: "1588-0000",
      subtitle: "평일 08:00-17:00",
      color: "accent"
    },
    {
      icon: Mail,
      title: "이메일",
      content: "info@ourhospital.co.kr",
      subtitle: "",
      color: "primary"
    }
  ];

  return (
    <div className="animate-fade-in">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">상담 문의</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              입소 상담이나 궁금한 사항이 있으시면 언제든지 연락해 주세요.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* 연락처 정보 */}
            <div>
              <h2 className="text-3xl font-semibold mb-8 text-gray-900">요양원 상담문의</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-sm">
                    <CardContent className="flex items-start p-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 ${
                        info.color === 'primary' ? 'bg-primary/10' :
                        info.color === 'destructive' ? 'bg-destructive/10' :
                        info.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
                      }`}>
                        <info.icon className={`h-5 w-5 ${
                          info.color === 'primary' ? 'text-primary' :
                          info.color === 'destructive' ? 'text-destructive' :
                          info.color === 'accent' ? 'text-accent' : 'text-primary'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-gray-900">{info.title}</h3>
                        <p className="text-gray-600 mb-1 font-medium">{info.content}</p>
                        {info.subtitle && (
                          <p className="text-sm text-gray-500">{info.subtitle}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 상담 문의 폼 */}
            <Card className="shadow-sm">
              <CardContent className="p-8 lg:p-12">
                <h2 className="text-3xl font-semibold mb-8 text-gray-900">온라인 상담</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>이름 *</FormLabel>
                          <FormControl>
                            <Input placeholder="이름을 입력해주세요" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>연락처 *</FormLabel>
                          <FormControl>
                            <Input placeholder="010-0000-0000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>상담 분야</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="상담 분야를 선택해주세요" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">일반 진료</SelectItem>
                              <SelectItem value="checkup">건강검진</SelectItem>
                              <SelectItem value="admission">입원 문의</SelectItem>
                              <SelectItem value="emergency">응급 문의</SelectItem>
                              <SelectItem value="other">기타</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>문의 내용 *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="문의하실 내용을 자세히 입력해주세요"
                              className="resize-none"
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="agreed"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value === 1}
                              onCheckedChange={(checked) => field.onChange(checked ? 1 : 0)}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm text-gray-600">
                              개인정보 수집 및 이용에 동의합니다. <span className="text-primary hover:underline cursor-pointer">자세히 보기</span>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full py-4 px-6 rounded-xl shadow-lg hover:shadow-xl"
                      disabled={contactMutation.isPending}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {contactMutation.isPending ? "전송 중..." : "상담 신청하기"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
