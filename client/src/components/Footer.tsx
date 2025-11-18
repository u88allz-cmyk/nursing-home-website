import logoImg from '@assets/바른나무요양원 로고-Photoroom_1761117376641.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <img 
              src={logoImg} 
              alt="바른나무요양원 로고" 
              className="h-24 w-auto"
            />
          </div>
          
          <p 
            className="text-black text-lg"
            style={{
              fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif',
              fontWeight: 500
            }}
          >
            바른 마음, 바른 태도, 바른 정성
          </p>
          
          <div className="text-sm text-black pt-4 space-y-1">
            <p>대표: 이진규</p>
            <p>사업자번호: 354-80-03338</p>
            <p>주소: 경기도 포천시 소흘읍 송우로 76, 7층 (랜드프라자)</p>
            <p>전화번호: 031-8089-8000</p>
          </div>
          
          <p className="text-xs text-gray-600 pt-4">
            COPYRIGHT © 2024 바른나무요양원. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
