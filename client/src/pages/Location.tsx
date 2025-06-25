import { Card, CardContent } from "@/components/ui/card";
import { MapPin, TrainFront, Bus, Car } from "lucide-react";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    naver: any;
  }
}

const Location = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 네이버 지도 스크립트 로드
    const script = document.createElement('script');
    script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID';
    script.async = true;
    
    script.onload = () => {
      if (mapRef.current && window.naver) {
        const location = new window.naver.maps.LatLng(37.7749, 127.0589); // 양주시 평화로 1426 좌표
        
        const map = new window.naver.maps.Map(mapRef.current, {
          center: location,
          zoom: 17,
          mapTypeControl: true
        });

        // 마커 추가
        new window.naver.maps.Marker({
          position: location,
          map: map,
          title: '해와달 요양원'
        });

        // 정보창 추가
        const infoWindow = new window.naver.maps.InfoWindow({
          content: [
            '<div style="padding:10px;min-width:200px;line-height:150%;">',
            '   <h4 style="margin-top:5px;">해와달 요양원</h4>',
            '   <p>경기 양주시 평화로 1426<br />',
            '   건물 6,7층</p>',
            '</div>'
          ].join('')
        });

        window.naver.maps.Event.addListener(map, 'click', () => {
          infoWindow.open(map, location);
        });
      }
    };

    // 네이버 지도 API가 이미 로드되어 있지 않은 경우에만 스크립트 추가
    if (!document.querySelector('script[src*="openapi.map.naver.com"]')) {
      document.head.appendChild(script);
    } else if (window.naver && mapRef.current) {
      // 이미 로드된 경우 바로 지도 생성
      script.onload();
    }

    return () => {
      // 컴포넌트 언마운트 시 정리
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

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
                  <div 
                    ref={mapRef} 
                    className="w-full h-full rounded-2xl"
                    style={{ minHeight: '350px' }}
                  >
                    {/* 네이버 지도가 여기에 로드됩니다 */}
                    <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin className="h-16 w-16 mx-auto mb-4" />
                        <p className="text-lg font-medium">지도 로딩 중...</p>
                        <p className="text-sm mt-2">네이버 지도 API를 불러오고 있습니다</p>
                      </div>
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
