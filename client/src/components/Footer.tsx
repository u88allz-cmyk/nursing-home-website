import logoImg from '@assets/바른나무요양원 로고-Photoroom_1761117376641.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <img 
              src={logoImg} 
              alt="바른나무요양원 로고" 
              className="h-24 w-auto"
              style={{ filter: 'brightness(1.1)' }}
            />
          </div>
          
          <p 
            className="text-white text-lg"
            style={{
              fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif',
              fontWeight: 500,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5), 1px 1px 2px rgba(0,0,0,0.3)',
              WebkitTextStroke: '0.5px rgba(0,0,0,0.2)'
            }}
          >
            바른 마음, 바른 태도, 바른 정성
          </p>
          
          <div className="text-sm text-gray-400 pt-4 space-y-1">
            <p>대표: 이진규</p>
            <p>사업자번호: 354-80-03338</p>
            <p>주소: 경기도 포천시 소흘읍 송우로 76, 7층 (랜드프라자)</p>
            <p>전화번호: 031-8089-8000</p>
          </div>
          
          <p className="text-xs text-gray-500 pt-4">
            COPYRIGHT © 2024 바른나무요양원. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
