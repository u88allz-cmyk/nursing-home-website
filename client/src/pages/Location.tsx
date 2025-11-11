import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Bus, Car } from "lucide-react";
import KakaoMap from "@/components/KakaoMap";

const Location = () => {

  const transportInfo = [
    {
      icon: MapPin,
      title: "요양원 주소",
      content: "경기 포천시 소흘읍 송우리 726-78",
      color: "primary"
    },
    {
      icon: Bus,
      title: "버스",
      content: "솔모루공원 방면 포천세무서 정류장 하차\n(도보 1분 이내)",
      color: "secondary"
    },
    {
      icon: Car,
      title: "주차 안내",
      content: "송우로 제1공영주차장 이용\n주소: 경기 포천시 소흘읍 송우리 726-81\n(1시간 무료)",
      color: "accent"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ 
                color: '#67BA6D',
                fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif'
              }}
            >
              오시는길
            </h1>
            <p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              style={{ 
                fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif',
                wordBreak: 'keep-all'
              }}
            >
              바른나무요양원을 찾아오시는 모든 분들을 위한 상세한 위치 안내입니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 지도 */}
            <div className="lg:col-span-2">
              <Card className="border-2 shadow-lg h-96 lg:h-full min-h-[400px]">
                <CardContent className="p-4 h-full">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <KakaoMap className="w-full h-full" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 교통 정보 */}
            <div className="space-y-6">
              {transportInfo.map((info, index) => (
                <Card key={index} className="border-2 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                        style={{ backgroundColor: '#67BA6D20' }}
                      >
                        <info.icon className="h-6 w-6" style={{ color: '#67BA6D' }} />
                      </div>
                      <h3 
                        className="text-xl font-bold"
                        style={{ 
                          color: '#67BA6D',
                          fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif'
                        }}
                      >
                        {info.title}
                      </h3>
                    </div>
                    <div 
                      className="text-gray-700 leading-relaxed whitespace-pre-line text-base"
                      style={{ 
                        fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif',
                        wordBreak: 'keep-all'
                      }}
                    >
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
