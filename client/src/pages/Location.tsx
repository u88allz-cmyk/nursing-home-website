import { Card, CardContent } from "@/components/ui/card";
import { MapPin, TrainFront, Bus, Car, ExternalLink } from "lucide-react";

const Location = () => {

  const transportInfo = [
    {
      icon: MapPin,
      title: "요양원 주소",
      content: "경기 양주시 평화로 1426 건물 6,7층",
      color: "primary"
    },
    {
      icon: TrainFront,
      title: "지하철",
      content: "지하철 1호선 덕계역 2번출구\n버스정류장 73-1번 리치마트 정류장 하차",
      color: "secondary"
    },
    {
      icon: Bus,
      title: "버스",
      content: "덕계 리치마트 방면 정류장 하차\n(도보 3분이내)",
      color: "accent"
    },
    {
      icon: Car,
      title: "주차 안내",
      content: "1층 지상 주차장 이용 (무료)",
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
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">오시는길</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              저희 요양원을 찾아오시는 모든 분들을 위한 상세한 위치 안내입니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 지도 */}
            <div className="lg:col-span-2">
              <Card className="shadow-sm h-96 lg:h-full min-h-[400px]">
                <CardContent className="p-4 h-full">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <iframe
                      src="https://map.naver.com/p/entry/place/35235382?c=15.00,0,0,0,dh"
                      className="w-full h-full border-0 rounded-2xl"
                      style={{ minHeight: '350px' }}
                      title="해와달 요양원 네이버 지도"
                      loading="lazy"
                    />
                    <a
                      href="https://map.naver.com/p/entry/place/35235382"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-lg shadow-md transition-all duration-200 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4" />
                      크게 보기
                    </a>
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
