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
    console.log('API 키 길이:', apiKey ? apiKey.length : 0);
    console.log('현재 도메인:', window.location.hostname);
    console.log('환경변수 전체:', import.meta.env);
    
    if (!apiKey) {
      console.error('카카오 지도 API 키가 없습니다. 환경 변수를 확인하세요.');
      return;
    }

    const loadKakaoMap = () => {
      if (!mapContainer.current) return;

      try {
        // 키워드 검색을 통해 해와달 요양원의 정확한 위치 찾기
        const ps = new window.kakao.maps.services.Places();

        ps.keywordSearch('해와달 요양원 양주', function(data: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            // 검색 결과가 있으면 첫 번째 결과 사용
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

            // CustomOverlay를 사용하여 완전한 스타일 제어
            const content = `
              <div style="
                background: white;
                border: 1px solid #007BFF;
                border-radius: 6px;
                padding: 5px 8px;
                font-size: 14px;
                font-weight: bold;
                color: #000;
                box-shadow: 0 2px 6px rgba(0,0,0,0.1);
                position: relative;
                text-align: center;
                white-space: nowrap;
                width: fit-content;
                display: inline-block;
              ">
                해와달요양원
                <div style="
                  position: absolute;
                  bottom: -10px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 0;
                  height: 0;
                  border-left: 10px solid transparent;
                  border-right: 10px solid transparent;
                  border-top: 10px solid #007BFF;
                "></div>
              </div>
            `;

            const customOverlay = new window.kakao.maps.CustomOverlay({
              map: map,
              position: coords,
              content: content,
              yAnchor: 1.2
            });
            
          } else {
            // 검색 실패시 기본 위치 사용
            const coords = new window.kakao.maps.LatLng(37.7847, 127.0436);

            const options = {
              center: coords,
              level: 3
            };

            const map = new window.kakao.maps.Map(mapContainer.current, options);

            const marker = new window.kakao.maps.Marker({
              position: coords
            });

            marker.setMap(map);

            // CustomOverlay를 사용하여 완전한 스타일 제어
            const content = `
              <div style="
                background: white;
                border: 1px solid #007BFF;
                border-radius: 6px;
                padding: 5px 8px;
                font-size: 14px;
                font-weight: bold;
                color: #000;
                box-shadow: 0 2px 6px rgba(0,0,0,0.1);
                position: relative;
                text-align: center;
                white-space: nowrap;
                width: fit-content;
                display: inline-block;
              ">
                해와달요양원
                <div style="
                  position: absolute;
                  bottom: -10px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 0;
                  height: 0;
                  border-left: 10px solid transparent;
                  border-right: 10px solid transparent;
                  border-top: 10px solid #007BFF;
                "></div>
              </div>
            `;

            const customOverlay = new window.kakao.maps.CustomOverlay({
              map: map,
              position: coords,
              content: content,
              yAnchor: 1.2
            });
          }
        });
      } catch (error) {
        console.error('카카오 지도 초기화 오류:', error);
      }
    };

    // index.html에서 카카오 지도 스크립트가 로드되므로 바로 초기화
    if (window.kakao?.maps) {
      console.log('카카오 지도 SDK 로드 완료, 지도 초기화 시작');
      loadKakaoMap();
    } else {
      console.log('카카오 지도 SDK 로딩 대기 중...');
      // 스크립트 로딩 완료까지 잠시 대기
      const checkKakao = setInterval(() => {
        if (window.kakao?.maps) {
          console.log('카카오 지도 SDK 로드 완료');
          clearInterval(checkKakao);
          loadKakaoMap();
        }
      }, 100);
      
      // 10초 후에도 로드되지 않으면 타임아웃
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