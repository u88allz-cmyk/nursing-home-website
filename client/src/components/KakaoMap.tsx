import { useEffect, useRef } from 'react';

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

  useEffect(() => {
    const apiKey = import.meta.env.VITE_KAKAO_MAP_API_KEY;
    
    console.log('카카오 지도 초기화 시작');
    console.log('API 키 존재 여부:', !!apiKey);
    
    if (!apiKey) {
      console.error('카카오 지도 API 키가 없습니다. 환경 변수를 확인하세요.');
      return;
    }

    const loadKakaoMap = () => {
      if (!mapContainer.current) return;

      try {
        const ps = new window.kakao.maps.services.Places();

        ps.keywordSearch('바른나무요양원 포천', function(data: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            const place = data[0];
            const coords = new window.kakao.maps.LatLng(place.y, place.x);

            const options = {
              center: coords,
              level: 3
            };

            const map = new window.kakao.maps.Map(mapContainer.current, options);

            const marker = new window.kakao.maps.Marker({
              position: coords
            });

            marker.setMap(map);

            const content = `
              <div style="
                background: white;
                border: 2px solid #DC3545;
                border-radius: 8px;
                padding: 8px 12px;
                font-size: 15px;
                font-weight: bold;
                color: #DC3545;
                box-shadow: 0 3px 8px rgba(0,0,0,0.15);
                position: relative;
                text-align: center;
                white-space: nowrap;
                width: fit-content;
                display: inline-block;
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
                  border-top: 12px solid #DC3545;
                "></div>
              </div>
            `;

            const customOverlay = new window.kakao.maps.CustomOverlay({
              map: map,
              position: coords,
              content: content,
              yAnchor: 1.3
            });
            
          } else {
            const coords = new window.kakao.maps.LatLng(37.8302, 127.1411);

            const options = {
              center: coords,
              level: 3
            };

            const map = new window.kakao.maps.Map(mapContainer.current, options);

            const marker = new window.kakao.maps.Marker({
              position: coords
            });

            marker.setMap(map);

            const content = `
              <div style="
                background: white;
                border: 2px solid #DC3545;
                border-radius: 8px;
                padding: 8px 12px;
                font-size: 15px;
                font-weight: bold;
                color: #DC3545;
                box-shadow: 0 3px 8px rgba(0,0,0,0.15);
                position: relative;
                text-align: center;
                white-space: nowrap;
                width: fit-content;
                display: inline-block;
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
                  border-top: 12px solid #DC3545;
                "></div>
              </div>
            `;

            const customOverlay = new window.kakao.maps.CustomOverlay({
              map: map,
              position: coords,
              content: content,
              yAnchor: 1.3
            });
          }
        });
      } catch (error) {
        console.error('카카오 지도 초기화 오류:', error);
      }
    };

    if (window.kakao?.maps) {
      console.log('카카오 지도 SDK 로드 완료, 지도 초기화 시작');
      loadKakaoMap();
    } else {
      console.log('카카오 지도 SDK 로딩 대기 중...');
      const checkKakao = setInterval(() => {
        if (window.kakao?.maps) {
          console.log('카카오 지도 SDK 로드 완료');
          clearInterval(checkKakao);
          loadKakaoMap();
        }
      }, 100);
      
      setTimeout(() => {
        clearInterval(checkKakao);
        if (!window.kakao?.maps) {
          console.error('카카오 지도 SDK 로드 타임아웃');
        }
      }, 10000);
    }
  }, []);

  return (
    <div 
      ref={mapContainer} 
      className={`w-full h-full min-h-[350px] rounded-2xl bg-gray-100 ${className}`}
    />
  );
};

export default KakaoMap;
