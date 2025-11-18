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
    const apiKey = import.meta.env.VITE_KAKAO_MAP_KEY || '0ba071235043213ebc010a63a639e252';
    
    if (!apiKey) {
      setError('지도 API 키가 설정되지 않았습니다.');
      setIsLoading(false);
      return;
    }

    const initializeMap = () => {
      console.log('initializeMap 호출됨');
      
      if (!window.kakao || !window.kakao.maps) {
        console.log('kakao 객체 없음');
        return;
      }
      
      if (!mapContainer.current) {
        console.log('컨테이너 없음, 재시도 예약');
        // DOM이 준비될 때까지 잠시 대기
        setTimeout(() => initializeMap(), 100);
        return;
      }

      try {
        console.log('지도 초기화 시작');
        // 바른나무요양원 좌표 (경기도 포천시 소흘읍 송우로 76)
        const coords = new window.kakao.maps.LatLng(37.8945, 127.2001);

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

        console.log('지도 초기화 완료');
        setIsLoading(false);
        setError('');
      } catch (err) {
        console.error('지도 초기화 오류:', err);
        setError('지도를 표시할 수 없습니다.');
        setIsLoading(false);
      }
    };

    const loadKakaoScript = () => {
      console.log('loadKakaoScript 시작');
      
      // 스크립트가 이미 로드되어 있는지 확인
      const existingScript = document.querySelector('script[src*="dapi.kakao.com"]');
      
      if (existingScript) {
        console.log('기존 스크립트 발견');
        // 스크립트는 있지만 window.kakao가 아직 로드되지 않았을 수 있음
        if (window.kakao && window.kakao.maps) {
          console.log('kakao 객체 사용 가능, maps.load 호출');
          window.kakao.maps.load(() => {
            console.log('kakao.maps.load 콜백 실행');
            initializeMap();
          });
        } else {
          console.log('kakao 객체 대기 중...');
          // 스크립트가 로드될 때까지 대기
          const checkKakao = setInterval(() => {
            if (window.kakao && window.kakao.maps) {
              console.log('kakao 객체 사용 가능해짐');
              clearInterval(checkKakao);
              window.kakao.maps.load(() => {
                console.log('kakao.maps.load 콜백 실행');
                initializeMap();
              });
            }
          }, 100);
          
          // 10초 후 타임아웃
          setTimeout(() => {
            clearInterval(checkKakao);
            if (!window.kakao || !window.kakao.maps) {
              console.log('kakao 로딩 타임아웃');
              setError('지도 라이브러리 로딩 시간 초과');
              setIsLoading(false);
            }
          }, 10000);
        }
        return;
      }

      // 새 스크립트 추가
      console.log('새 스크립트 추가');
      const scriptElement = document.createElement('script');
      scriptElement.type = 'text/javascript';
      scriptElement.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
      
      scriptElement.onload = () => {
        console.log('kakao 스크립트 로드 완료');
        if (window.kakao && window.kakao.maps) {
          console.log('kakao.maps.load 호출');
          window.kakao.maps.load(() => {
            console.log('kakao.maps.load 콜백 실행');
            initializeMap();
          });
        } else {
          console.log('kakao 또는 kakao.maps가 없음');
          setError('지도 라이브러리를 불러올 수 없습니다.');
          setIsLoading(false);
        }
      };

      scriptElement.onerror = () => {
        console.log('kakao 스크립트 로드 실패');
        setError('지도 스크립트를 불러올 수 없습니다.');
        setIsLoading(false);
      };

      document.head.appendChild(scriptElement);
    };

    loadKakaoScript();
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
