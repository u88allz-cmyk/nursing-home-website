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
        // 경기 양주시 평화로 1426의 정확한 좌표
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
      } catch (error) {
        console.error('카카오 지도 초기화 오류:', error);
      }
    };

    if (window.kakao?.maps) {
      window.kakao.maps.load(loadKakaoMap);
    } else {
      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
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