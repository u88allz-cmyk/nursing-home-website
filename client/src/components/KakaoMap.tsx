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
    
    if (!apiKey) {
      console.error('카카오 지도 API 키가 없습니다.');
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

            const infowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="padding:10px;font-size:14px;color:#000;font-weight:bold;">${place.place_name}<br/>${place.address_name}</div>`
            });

            infowindow.open(map, marker);
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

            const infowindow = new window.kakao.maps.InfoWindow({
              content: '<div style="padding:10px;font-size:14px;color:#000;font-weight:bold;">해와달요양원<br/>경기 양주시 평화로 1426</div>'
            });

            infowindow.open(map, marker);
          }
        });
      } catch (error) {
        console.error('카카오 지도 초기화 오류:', error);
      }
    };

    if (window.kakao?.maps) {
      window.kakao.maps.load(loadKakaoMap);
    } else {
      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services&autoload=false`;
      script.onload = () => {
        if (window.kakao?.maps) {
          window.kakao.maps.load(loadKakaoMap);
        }
      };
      document.head.appendChild(script);
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