import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "진료 예약은 어떻게 하나요?",
      answer: `진료 예약은 다음과 같은 방법으로 가능합니다:

1. 전화 예약: 1588-0000 (평일 08:00-17:00)
2. 온라인 예약: 병원 홈페이지 또는 모바일 앱
3. 방문 예약: 1층 원무과에서 직접 접수

초진의 경우 신분증을 지참해 주시고, 재진의 경우 진료카드를 준비해 주세요.`
    },
    {
      question: "응급실 이용 시 주의사항이 있나요?",
      answer: `응급실은 24시간 운영되며, 다음 사항을 유의해 주세요:

• 응급 정도에 따른 우선순위로 진료합니다
• 신분증, 건강보험증을 지참해 주세요
• 복용 중인 약물 정보를 준비해 주세요
• 보호자 동반을 권장합니다

응급실 직통번호: 02-0000-1119`
    },
    {
      question: "건강검진은 어떤 종류가 있나요?",
      answer: `다양한 건강검진 프로그램을 운영하고 있습니다:

1. 국가건강검진 (일반건강검진, 암검진)
2. 종합건강검진 (기본, 프리미엄, VIP 코스)
3. 특화검진 (심장, 뇌, 폐, 위장 등)
4. 기업체 단체검진

검진 전 주의사항과 예약은 건강검진센터(1588-0000)로 문의해 주세요.`
    },
    {
      question: "입원 시 준비해야 할 것들은 무엇인가요?",
      answer: `입원 시 다음 물품들을 준비해 주세요:

필수 서류: 건강보험증, 신분증, 입원 동의서
개인 위생용품: 칫솔, 치약, 수건, 비누, 샴푸
의류: 환의(병원 제공), 속옷, 양말, 슬리퍼
기타: 복용 중인 약물, 안경, 충전기

자세한 입원 안내는 '입퇴원 안내' 페이지를 참고해 주세요.`
    },
    {
      question: "주차료는 어떻게 되나요?",
      answer: `병원 지하 1-3층에 300대 규모의 주차장을 운영합니다:

평일: 30분 무료, 이후 시간당 2,000원
주말/공휴일: 1시간 무료, 이후 시간당 1,000원
입원환자: 1일 5,000원 정액제
건강검진: 검진 당일 무료

주차 할인을 받으시려면 원무과에서 주차권을 꼭 확인받으세요.`
    },
    {
      question: "면회 시간과 규정이 어떻게 되나요?",
      answer: `면회 시간과 규정은 다음과 같습니다:

일반병실:
• 평일: 10:00-20:00 (3명 이내)
• 주말: 10:00-18:00 (3명 이내)

중환자실:
• 14:00-15:00, 18:00-19:00 (1명)

준수사항: 손 소독, 마스크 착용 필수
감염병 의심 시 면회가 제한될 수 있습니다.`
    }
  ];

  return (
    <div className="animate-fade-in">
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">자주 묻는 질문</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              환자분들이 자주 문의하시는 내용들을 정리했습니다.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-sm overflow-hidden">
                <Collapsible 
                  open={openItems.includes(index)}
                  onOpenChange={() => toggleItem(index)}
                >
                  <CollapsibleTrigger className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200">
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`} 
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
