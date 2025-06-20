import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, CheckCircle, Users, Hospital } from "lucide-react";

const Guide = () => {
  const admissionItems = [
    "건강보험증, 신분증",
    "개인 위생용품 (칫솔, 치약, 수건 등)",
    "편안한 옷가지 및 속옷",
    "복용 중인 약물 및 처방전"
  ];

  const admissionSteps = [
    "1층 원무과에서 입원 수속",
    "병실 배정 및 안내",
    "담당 간호사 면담",
    "입원 생활 안내 설명"
  ];

  const dischargeSteps = [
    "담당의의 퇴원 허가",
    "퇴원 후 주의사항 교육",
    "처방전 및 의료진단서 수령",
    "원무과에서 퇴원 수속 완료"
  ];

  const dischargeCare = [
    "처방받은 약물 복용법 준수",
    "정기적인 외래 진료 예약",
    "응급상황 시 연락처 숙지",
    "생활습관 개선 지침 실천"
  ];

  const visitingInfo = [
    {
      title: "면회 시간",
      content: ["평일: 10:00 - 20:00", "주말: 10:00 - 18:00", "*중환자실: 14:00-15:00, 18:00-19:00"]
    },
    {
      title: "면회 인원",
      content: ["일반병실: 3명 이내", "중환자실: 1명", "*소음 및 장시간 면회 자제"]
    },
    {
      title: "면회 준수사항",
      content: ["손 소독 필수", "마스크 착용", "*감염병 의심 시 면회 제한"]
    }
  ];

  return (
    <div className="animate-fade-in">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">입퇴원 안내</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              입원과 퇴원 절차에 대한 자세한 안내를 확인하세요.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* 입원 안내 */}
            <Card className="shadow-sm">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-semibold text-gray-900">입원 안내</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">입원 준비물</h3>
                    <ul className="space-y-2">
                      {admissionItems.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">입원 절차</h3>
                    <ol className="space-y-2">
                      {admissionSteps.map((step, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 퇴원 안내 */}
            <Card className="shadow-sm">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mr-4">
                    <Hospital className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-semibold text-gray-900">퇴원 안내</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">퇴원 절차</h3>
                    <ol className="space-y-2">
                      {dischargeSteps.map((step, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">퇴원 후 주의사항</h3>
                    <ul className="space-y-2">
                      {dischargeCare.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 면회 안내 */}
          <Card className="shadow-sm">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-semibold text-gray-900">면회 안내</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {visitingInfo.map((info, index) => (
                  <div key={index} className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">{info.title}</h3>
                    <div className="space-y-2 text-gray-600">
                      {info.content.map((item, idx) => (
                        <p key={idx} className={item.startsWith('*') ? 'text-sm text-red-500' : ''}>
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Guide;
