import { Link } from "wouter";
import { Hospital, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Hospital className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">우리 병원</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              38년 전통의 지역 대표 병원으로 환자 중심의 맞춤형 의료 서비스를 제공합니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">진료과 안내</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/programs"><span className="hover:text-white transition-colors duration-200">내과</span></Link></li>
              <li><Link href="/programs"><span className="hover:text-white transition-colors duration-200">정형외과</span></Link></li>
              <li><Link href="/programs"><span className="hover:text-white transition-colors duration-200">소아청소년과</span></Link></li>
              <li><Link href="/programs"><span className="hover:text-white transition-colors duration-200">안과</span></Link></li>
              <li><Link href="/programs"><span className="hover:text-white transition-colors duration-200">신경과</span></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">빠른 링크</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about"><span className="hover:text-white transition-colors duration-200">병원 소개</span></Link></li>
              <li><Link href="/guide"><span className="hover:text-white transition-colors duration-200">입퇴원 안내</span></Link></li>
              <li><Link href="/location"><span className="hover:text-white transition-colors duration-200">오시는 길</span></Link></li>
              <li><Link href="/faq"><span className="hover:text-white transition-colors duration-200">자주 묻는 질문</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-white transition-colors duration-200">상담 문의</span></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">연락처</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">서울특별시 강남구 테헤란로 123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">02-0000-0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">02-0000-1119 (응급실)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">info@ourhospital.co.kr</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 우리 병원. All rights reserved. | 개인정보처리방침 | 이용약관</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
