interface KakaoMapProps {
  className?: string;
}

const KakaoMap = ({ className = "" }: KakaoMapProps) => {
  // 바른나무요양원 주소: 경기 포천시 소흘읍 송우리 726-78
  // 네이버 지도 iframe 사용 (더 안정적)
  
  return (
    <div className={`w-full h-full min-h-[350px] rounded-2xl overflow-hidden ${className}`}>
      <iframe
        src="https://map.naver.com/p/entry/place/1081117021?c=15.00,0,0,0,dh"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '350px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="바른나무요양원 위치"
      />
    </div>
  );
};

export default KakaoMap;
