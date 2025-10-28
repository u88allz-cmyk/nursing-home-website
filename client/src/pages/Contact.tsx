import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ 
                color: '#67BA6D',
                fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif'
              }}
            >
              상담안내
            </h1>
            <p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif' }}
            >
              바른나무요양원에서 어르신들을 위한 최상의 케어 서비스를 제공합니다.<br />
              언제든지 편하게 문의해 주세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 전화 연결 */}
            <Card className="border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div 
                  className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#67BA6D20' }}
                >
                  <Phone className="h-12 w-12" style={{ color: '#67BA6D' }} />
                </div>
                <h2 
                  className="text-2xl font-bold mb-4"
                  style={{ 
                    color: '#67BA6D',
                    fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif'
                  }}
                >
                  전화 상담
                </h2>
                <p 
                  className="text-gray-600 mb-6 text-lg leading-relaxed"
                  style={{ fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif' }}
                >
                  바로 전화 연결하여<br />
                  친절한 상담을 받으실 수 있습니다
                </p>
                <a href="tel:0507-1381-0016">
                  <Button 
                    size="lg" 
                    className="w-full text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-bold hover:scale-105"
                    style={{ 
                      backgroundColor: '#67BA6D',
                      fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif'
                    }}
                    data-testid="button-call-contact"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    0507-1381-0016
                  </Button>
                </a>
                <p 
                  className="text-sm text-gray-500 mt-4"
                  style={{ fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif' }}
                >
                  연중무휴 24시간
                </p>
              </CardContent>
            </Card>

            {/* 네이버 플레이스 예약 */}
            <Card className="border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div 
                  className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#67BA6D20' }}
                >
                  <Calendar className="h-12 w-12" style={{ color: '#67BA6D' }} />
                </div>
                <h2 
                  className="text-2xl font-bold mb-4"
                  style={{ 
                    color: '#67BA6D',
                    fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif'
                  }}
                >
                  네이버 예약
                </h2>
                <p 
                  className="text-gray-600 mb-6 text-lg leading-relaxed"
                  style={{ fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif' }}
                >
                  네이버 플레이스를 통해<br />
                  방문 상담을 예약하실 수 있습니다
                </p>
                <a 
                  href="https://booking.naver.com/booking/13/bizes/1068039" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full px-8 py-6 rounded-xl border-2 transition-all duration-300 text-lg font-bold hover:scale-105 hover:bg-green-50"
                    style={{ 
                      borderColor: '#67BA6D',
                      color: '#67BA6D',
                      fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif'
                    }}
                    data-testid="button-naver-booking"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    네이버 예약하기
                  </Button>
                </a>
                <p 
                  className="text-sm text-gray-500 mt-4"
                  style={{ fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif' }}
                >
                  방문 상담 예약
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 안내 사항 */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-green-50/50 border-0">
              <CardContent className="p-8">
                <h3 
                  className="text-xl font-bold mb-4 text-center"
                  style={{ 
                    color: '#67BA6D',
                    fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif'
                  }}
                >
                  상담 안내
                </h3>
                <ul 
                  className="space-y-3 text-gray-700"
                  style={{ fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif' }}
                >
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>장기요양등급 신청부터 입소까지 전 과정을 친절하게 안내해드립니다</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>방문 상담을 원하시는 경우 네이버 예약을 통해 미리 예약해주세요</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>전화 상담은 연중무휴 24시간 가능합니다</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
