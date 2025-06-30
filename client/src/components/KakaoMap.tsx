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
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (!mapContainer.current) return;

        const options = {
          center: new window.kakao.maps.LatLng(37.7847, 127.0442), // 경기 양주시 평화로 1426 좌표
          level: 3
        };

        const map = new window.kakao.maps.Map(mapContainer.current, options);

        // 마커 생성
        const markerPosition = new window.kakao.maps.LatLng(37.7847, 127.0442);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });

        marker.setMap(map);

        // 인포윈도우 생성
        const infowindow = new window.kakao.maps.InfoWindow({
          content: '<div style="padding:5px;font-size:12px;color:#000;">해와달요양원</div>'
        });

        // 마커에 인포윈도우 표시
        infowindow.open(map, marker);
      });
    };

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      ref={mapContainer} 
      className={`w-full h-full min-h-[350px] rounded-2xl ${className}`}
    />
  );
};

export default KakaoMap;