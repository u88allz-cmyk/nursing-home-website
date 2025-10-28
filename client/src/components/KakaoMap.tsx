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
    const apiKey = import.meta.env.VITE_KAKAO_MAP_API_KEY;
    
    if (!apiKey) {
      setError('지도 API 키가 설정되지 않았습니다.');
      setIsLoading(false);
      return;
    }

    let scriptElement: HTMLScriptElement | null = null;

    const initializeMap = () => {
      if (!mapContainer.current || !window.kakao || !window.kakao.maps) {
        return;
      }

      try {
        // 바른나무요양원 좌표 (경기 포천시 소흘읍 송우리 726-78)
        const coords = new window.kakao.maps.LatLng(37.8302, 127.1411);

        const options = {
          center: coords,
          level: 3
        };

        const map = new window.kakao.maps.Map(mapContainer.current, options);

        // 마커 생성
        const markerPosition = coords;
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(map);

        // 커스텀 오버레이 (빨간색 라벨)
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

        const overlay = new window.kakao.maps.CustomOverlay({
          map: map,
          position: markerPosition,
          content: content,
          yAnchor: 1.3
        });

        setIsLoading(false);
        setError('');
      } catch (err) {
        console.error('지도 초기화 오류:', err);
        setError('지도를 표시할 수 없습니다.');
        setIsLoading(false);
      }
    };

    const loadKakaoScript = () => {
      // 이미 로드된 경우
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          initializeMap();
        });
        return;
      }

      // 기존 스크립트 제거
      const existingScript = document.querySelector('script[src*="dapi.kakao.com"]');
      if (existingScript) {
        existingScript.remove();
      }

      // 새 스크립트 추가
      scriptElement = document.createElement('script');
      scriptElement.type = 'text/javascript';
      scriptElement.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
      
      scriptElement.onload = () => {
        if (window.kakao && window.kakao.maps) {
          window.kakao.maps.load(() => {
            initializeMap();
          });
        } else {
          setError('지도 라이브러리를 불러올 수 없습니다.');
          setIsLoading(false);
        }
      };

      scriptElement.onerror = () => {
        setError('지도 스크립트를 불러올 수 없습니다.');
        setIsLoading(false);
      };

      document.head.appendChild(scriptElement);
    };

    loadKakaoScript();

    // Cleanup
    return () => {
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
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
