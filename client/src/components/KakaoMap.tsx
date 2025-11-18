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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const initializeMap = () => {
      if (!mapContainer.current) {
        console.log('DOM 준비 대기 중...');
        setTimeout(initializeMap, 100);
        return;
      }

      if (!window.kakao || !window.kakao.maps) {
        console.log('카카오 API 로딩 대기 중...');
        setTimeout(initializeMap, 100);
        return;
      }

      try {
        console.log('지도 초기화 시작');
        const coords = new window.kakao.maps.LatLng(37.8945, 127.2001);

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

        new window.kakao.maps.CustomOverlay({
          map: map,
          position: coords,
          content: content,
          yAnchor: 1.3
        });

        console.log('지도 초기화 완료!');
        setIsLoading(false);
        setError('');
      } catch (err) {
        console.error('지도 초기화 오류:', err);
        setError('지도를 표시할 수 없습니다.');
        setIsLoading(false);
      }
    };

    setTimeout(initializeMap, 500);
  }, []);

  if (error) {
    return (
      <div 
        className={`w-full h-full min-h-[350px] rounded-2xl bg-gray-100 flex items-center justify-center ${className}`}
      >
        <p className="text-gray-500">{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div 
        className={`w-full h-full min-h-[350px] rounded-2xl bg-gray-100 flex items-center justify-center ${className}`}
      >
        <p className="text-gray-500">지도를 불러오는 중...</p>
      </div>
    );
  }

  return (
    <div 
      ref={mapContainer} 
      className={`w-full h-full min-h-[350px] rounded-2xl bg-gray-100 ${className}`}
    />
  );
};

export default KakaoMap;
