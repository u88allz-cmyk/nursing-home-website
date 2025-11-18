import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  className?: string;
}

const KakaoMap = ({ className = "" }: KakaoMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (mapInstance.current) {
      return;
    }

    const initializeMap = () => {
      if (!mapContainer.current) {
        setTimeout(initializeMap, 100);
        return;
      }

      if (!window.kakao || !window.kakao.maps || !window.kakao.maps.services) {
        setTimeout(initializeMap, 100);
        return;
      }

      const geocoder = new window.kakao.maps.services.Geocoder();
      
      // 주소로 좌표 검색
      geocoder.addressSearch('경기 포천시 소흘읍 송우로 76', function(result: any, status: any) {
        if (status === window.kakao.maps.services.Status.OK && result && result.length > 0) {
          try {
            const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

            const options = {
              center: coords,
              level: 3
            };

            const map = new window.kakao.maps.Map(mapContainer.current, options);
            mapInstance.current = map;

            const marker = new window.kakao.maps.Marker({
              position: coords
            });
            marker.setMap(map);

            const content = `
              <div style="
                background: white;
                border: 2px solid #000000;
                border-radius: 8px;
                padding: 8px 12px;
                font-size: 15px;
                font-weight: bold;
                color: #000000;
                box-shadow: 0 3px 8px rgba(0,0,0,0.15);
                position: relative;
                text-align: center;
                white-space: nowrap;
                font-family: 'LotteMartHappy', 'Noto Sans KR', sans-serif;
              ">
                바른나무요양원
                <div style="
                  position: absolute;
                  bottom: -12px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 0;
                  height: 0;
                  border-left: 12px solid transparent;
                  border-right: 12px solid transparent;
                  border-top: 12px solid #000000;
                "></div>
              </div>
            `;

            new window.kakao.maps.CustomOverlay({
              map: map,
              position: coords,
              content: content,
              yAnchor: 1.3
            });

            console.log('지도 초기화 완료 - 좌표:', result[0].y, result[0].x);
            setIsLoading(false);
            setError('');
          } catch (err) {
            console.error('지도 렌더링 오류:', err);
            setError('지도를 표시할 수 없습니다.');
            setIsLoading(false);
          }
        } else {
          console.error('주소 검색 실패:', status);
          setError('주소를 찾을 수 없습니다.');
          setIsLoading(false);
        }
      });
    };

    setTimeout(initializeMap, 500);

    return () => {
      mapInstance.current = null;
    };
  }, []);

  return (
    <div className={`relative w-full h-full min-h-[350px] ${className}`}>
      <div 
        ref={mapContainer} 
        className="w-full h-full min-h-[350px] rounded-2xl bg-gray-100"
      />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
          <p className="text-gray-500">지도를 불러오는 중...</p>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
          <p className="text-gray-500">{error}</p>
        </div>
      )}
    </div>
  );
};

export default KakaoMap;
