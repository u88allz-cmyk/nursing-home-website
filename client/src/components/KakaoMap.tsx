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
  const [kakaoLoaded, setKakaoLoaded] = useState(false);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_KAKAO_MAP_KEY || '0ba071235043213ebc010a63a639e252';
    
    if (!apiKey) {
      setError('지도 API 키가 설정되지 않았습니다.');
      setIsLoading(false);
      return;
    }

    const loadKakaoScript = () => {
      const existingScript = document.querySelector('script[src*="dapi.kakao.com"]');
      
      if (existingScript) {
        if (window.kakao && window.kakao.maps) {
          window.kakao.maps.load(() => {
            setKakaoLoaded(true);
          });
        } else {
          const checkKakao = setInterval(() => {
            if (window.kakao && window.kakao.maps) {
              clearInterval(checkKakao);
              window.kakao.maps.load(() => {
                setKakaoLoaded(true);
              });
            }
          }, 100);
          
          setTimeout(() => {
            clearInterval(checkKakao);
            if (!window.kakao || !window.kakao.maps) {
              setError('지도 라이브러리 로딩 시간 초과');
              setIsLoading(false);
            }
          }, 10000);
        }
        return;
      }

      const scriptElement = document.createElement('script');
      scriptElement.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
      
      console.log('카카오 스크립트 URL:', scriptElement.src);
      
      scriptElement.onload = () => {
        console.log('스크립트 onload 실행됨');
        console.log('window.kakao:', window.kakao);
        if (window.kakao && window.kakao.maps) {
          console.log('kakao.maps.load 호출');
          window.kakao.maps.load(() => {
            console.log('지도 라이브러리 로드 완료');
            setKakaoLoaded(true);
          });
        } else {
          console.error('kakao 또는 kakao.maps가 없음');
          setError('지도 라이브러리를 불러올 수 없습니다.');
          setIsLoading(false);
        }
      };

      scriptElement.onerror = (e) => {
        console.error('스크립트 로드 실패:', e);
        console.error('URL:', scriptElement.src);
        setError('지도 스크립트를 불러올 수 없습니다. 도메인 등록을 확인해주세요.');
        setIsLoading(false);
      };

      document.head.appendChild(scriptElement);
      console.log('스크립트 요소가 head에 추가됨');
    };

    loadKakaoScript();
  }, []);

  useEffect(() => {
    if (!kakaoLoaded || !mapContainer.current) {
      return;
    }

    try {
      const coords = new window.kakao.maps.LatLng(37.8945, 127.2001);

      const options = {
        center: coords,
        level: 3
      };

      const map = new window.kakao.maps.Map(mapContainer.current, options);

      const markerPosition = coords;
      const marker = new window.kakao.maps.Marker({
        position: markerPosition
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
  }, [kakaoLoaded]);

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
