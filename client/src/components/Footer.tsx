import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center space-y-10">
          <div>
            <h3 className="text-3xl lg:text-4xl font-black mb-4" style={{ color: '#67BA6D' }}>
              바른나무요양원
            </h3>
            <p className="text-lg text-gray-400 font-light">
              바른 마음, 바른 태도, 바른 정성으로 우리 부모님을 모십니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#67BA6D20' }}>
                <MapPin className="h-7 w-7" style={{ color: '#67BA6D' }} />
              </div>
              <p className="text-sm text-gray-400 font-semibold">주소</p>
              <p className="text-white font-medium">경기도 포천시</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#67BA6D20' }}>
                <Phone className="h-7 w-7" style={{ color: '#67BA6D' }} />
              </div>
              <p className="text-sm text-gray-400 font-semibold">전화</p>
              <a href="tel:0507-1381-0016" className="text-white font-medium hover:text-green-400 transition-colors text-lg">
                0507-1381-0016
              </a>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#67BA6D20' }}>
                <Clock className="h-7 w-7" style={{ color: '#67BA6D' }} />
              </div>
              <p className="text-sm text-gray-400 font-semibold">운영시간</p>
              <p className="text-white font-medium">24시간 연중무휴</p>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/10">
            <p className="text-sm text-gray-500">
              COPYRIGHT © 2024 바른나무요양원. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
