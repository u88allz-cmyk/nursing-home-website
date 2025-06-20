import { Card, CardContent } from "@/components/ui/card";
import { MapPin, TrainFront, Bus, Car } from "lucide-react";

const Location = () => {
  const transportInfo = [
    {
      icon: MapPin,
      title: "병원 주소",
      content: "서울특별시 강남구 테헤란로 123\n우리 병원 빌딩 (우: 06234)",
      color: "primary"
    },
    {
      icon: TrainFront,
      title: "지하철",
      content: "2호선 강남역 3번 출구 (도보 5분)\n분당선 선릉역 1번 출구 (도보 8분)",
      color: "secondary"
    },
    {
      icon: Bus,
      title: "버스",
      content: "간선: 146, 301, 472\n지선: 3422, 3423, 4419\n강남역 정류장 하차",
      color: "accent"
    },
    {
      icon: Car,
      title: "주차 안내",
      content: "병원 지하 1-3층 (300대 수용)\n평일: 30분 무료, 이후 시간당 2,000원\n주말: 1시간 무료, 이후 시간당 1,000원",
      color: "primary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-primary/10 text-primary';
      case 'secondary': return 'bg-secondary/10 text-secondary';
      case 'accent': return 'bg-accent/10 text-accent';
      default: return 'bg-primary/10 text-primary';
    }
  };

  return (
    <div className="animate-fade-in">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">오시는 길</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              다양한 교통수단을 이용하여 편리하게 방문하실 수 있습니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 지도 */}
            <div className="lg:col-span-2">
              <Card className="shadow-sm h-96 lg:h-full min-h-[400px]">
                <CardContent className="p-8 h-full">
                  <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">지도 영역</p>
                      <p className="text-sm mt-2">실제 구현 시 지도 API가 표시됩니다</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 교통 정보 */}
            <div className="space-y-6">
              {transportInfo.map((info, index) => (
                <Card key={index} className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 ${getColorClasses(info.color)}`}>
                        <info.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                    </div>
                    <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {info.content}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
