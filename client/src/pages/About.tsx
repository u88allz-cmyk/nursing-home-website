import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "38", unit: "년", label: "운영 경력" },
    { number: "45", unit: "명", label: "전문 의료진" },
    { number: "120", unit: "병상", label: "입원 시설" },
    { number: "15", unit: "개", label: "진료 과목" },
  ];

  return (
    <div className="animate-fade-in">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">병원 소개</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              1985년 개원 이래 지역 사회의 건강을 책임져온 우리 병원은 환자 중심의 의료 서비스를 제공합니다.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">우리의 역사</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>38년의 역사를 자랑하는 우리 병원은 지역 최고의 의료진과 최첨단 장비를 보유하고 있습니다.</p>
                <p>환자분들의 건강한 삶을 위해 끊임없이 연구하고 발전하며, 맞춤형 치료를 통해 최선의 결과를 제공합니다.</p>
                <p>앞으로도 지역 사회의 건강 파트너로서 더 나은 의료 서비스를 제공하기 위해 노력하겠습니다.</p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Healthcare professionals team" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <Card className="shadow-sm">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-3xl font-semibold mb-12 text-center text-gray-900">병원 현황</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="p-6">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {stat.number}<span className="text-2xl">{stat.unit}</span>
                    </div>
                    <p className="text-gray-600">{stat.label}</p>
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

export default About;
