import logoImg from '@assets/바른나무요양원 로고-Photoroom_1761117376641.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <img 
              src={logoImg} 
              alt="바른나무요양원 로고" 
              className="h-24 w-auto"
              style={{ filter: 'brightness(1.1)' }}
            />
          </div>
          
          <div className="space-y-3 text-base">
            <p className="text-gray-300">
              <span className="font-semibold text-white">주소:</span> 경기도 포천시
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-white">전화:</span> 
              <a href="tel:0507-1381-0016" className="ml-2 hover:text-green-400 transition-colors">
                0507-1381-0016
              </a>
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-white">운영시간:</span> 24시간 (연중무휴)
            </p>
          </div>
          
          <div className="pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              바른 마음, 바른 태도, 바른 정성으로 우리 부모님을 모십니다
            </p>
            <p className="text-xs text-gray-500 mt-4">
              COPYRIGHT © 2024 바른나무요양원. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
