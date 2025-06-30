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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_KAKAO_MAP_API_KEY;
    
    if (!apiKey) {
      setError('카카오 지도 API 키가 설정되지 않았습니다.');
      setIsLoading(false);
      return;
    }

    // 10초 후 타임아웃
    const timeout = setTimeout(() => {
      if (isLoading) {
        setError('지도 로딩 시간이 초과되었습니다.');
        setIsLoading(false);
      }
    }, 10000);

    const initializeMap = () => {
      try {
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
          content: '<div style="padding:8px;font-size:14px;color:#000;font-weight:bold;">해와달요양원</div>'
        });

        // 마커에 인포윈도우 표시
        infowindow.open(map, marker);
        
        clearTimeout(timeout);
        setIsLoading(false);
        setError(null);
      } catch (err) {
        console.error('지도 초기화 오류:', err);
        clearTimeout(timeout);
        setError('지도를 불러오는 중 오류가 발생했습니다.');
        setIsLoading(false);
      }
    };

    // 이미 로드된 경우 바로 지도 생성
    if (window.kakao?.maps) {
      setTimeout(() => {
        window.kakao.maps.load(initializeMap);
      }, 100);
      return () => clearTimeout(timeout);
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    
    script.onload = () => {
      setTimeout(() => {
        if (window.kakao?.maps) {
          window.kakao.maps.load(initializeMap);
        } else {
          clearTimeout(timeout);
          setError('카카오 지도 API 로드에 실패했습니다.');
          setIsLoading(false);
        }
      }, 100);
    };

    script.onerror = () => {
      clearTimeout(timeout);
      setError('카카오 지도 스크립트 로드에 실패했습니다.');
      setIsLoading(false);
    };

    document.head.appendChild(script);

    return () => {
      clearTimeout(timeout);
    };
  }, [isLoading]);

  if (error) {
    return (
      <div className={`w-full h-full min-h-[350px] rounded-2xl bg-gray-100 flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <p className="text-red-500 mb-2">지도 로드 오류</p>
          <p className="text-gray-600 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={`w-full h-full min-h-[350px] rounded-2xl bg-gray-100 flex items-center justify-center ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
          <p className="text-gray-600">지도를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={mapContainer} 
      className={`w-full h-full min-h-[350px] rounded-2xl ${className}`}
    />
  );
};

export default KakaoMap;