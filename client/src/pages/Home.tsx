import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Shield, HeartHandshake, Phone, Building2, Award } from "lucide-react";
import hero1 from "@/assets/hero1.jpg";
import consultationBg from "@assets/제목을-입력해주세요_-001_1761645793819.png";

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden">
        <img 
          src={hero1} 
          alt="포천 프리미엄 요양시설"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white" 
              style={{ 
                fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif',
                fontWeight: 700,
                textShadow: '3px 3px 6px rgba(0,0,0,0.5), 2px 2px 4px rgba(0,0,0,0.3)',
                WebkitTextStroke: '0.5px rgba(0,0,0,0.2)'
              }}
            >
              포천 프리미엄 요양시설
            </h2>
            
            <Link href="/about">
              <Button 
                size="lg" 
                className="bg-white px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 text-xl"
                style={{ 
                  color: '#4A9B5C',
                  borderColor: 'rgba(255,255,255,0.5)',
                  fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif',
                  fontWeight: 700
                }}
                data-testid="button-view-facility"
              >
                시설 보러가기
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Long-term Care Grade Application Section */}
      <section 
        className="py-12 relative bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${consultationBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <Award className="h-14 w-14 mx-auto mb-4 text-white" style={{
              filter: 'drop-shadow(3px 3px 6px rgba(0,0,0,0.4))'
            }} />
            <h2 
              className="text-3xl lg:text-4xl mb-6 text-white"
              style={{ 
                fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.5px',
                textShadow: `
                  4px 4px 0 rgba(0,0,0,0.3),
                  -2px -2px 0 rgba(0,0,0,0.2),
                  2px -2px 0 rgba(0,0,0,0.2),
                  -2px 2px 0 rgba(0,0,0,0.2),
                  2px 2px 0 rgba(0,0,0,0.2),
                  3px 3px 12px rgba(0,0,0,0.5)
                `,
                WebkitTextStroke: '1.5px rgba(0,0,0,0.15)'
              }}
            >
              장기요양등급,<br />
              어떻게 신청하나요?
            </h2>
            <p 
              className="text-lg lg:text-xl text-white leading-relaxed max-w-2xl mx-auto mb-8"
              style={{ 
                fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif',
                fontWeight: 500,
                letterSpacing: '-0.3px',
                textShadow: `
                  3px 3px 0 rgba(0,0,0,0.3),
                  -1px -1px 0 rgba(0,0,0,0.2),
                  1px -1px 0 rgba(0,0,0,0.2),
                  -1px 1px 0 rgba(0,0,0,0.2),
                  1px 1px 0 rgba(0,0,0,0.2),
                  2px 2px 8px rgba(0,0,0,0.4)
                `,
                WebkitTextStroke: '0.8px rgba(0,0,0,0.1)',
                lineHeight: '1.8'
              }}
            >
              처음이라 어렵고 막막하신가요?<br />
              바른나무요양원이 처음부터 끝까지 친절하게 안내해드립니다
            </p>
            <div className="flex justify-center">
              <a href="tel:0507-1381-0016">
                <Button 
                  size="lg" 
                  className="bg-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2"
                  style={{ 
                    color: '#4A9B5C',
                    borderColor: 'rgba(255,255,255,0.5)',
                    fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    fontSize: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingLeft: '4rem',
                    paddingRight: '4rem',
                    paddingTop: '1rem',
                    paddingBottom: '1rem'
                  }}
                  data-testid="button-call-care-grade"
                >
                  상담 연결
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#67BA6D' }}>
              바른나무요양원이 특별한 이유
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              포천에 위치한 프리미엄 요양 시설로 최고의 환경과 서비스를 제공합니다
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-green-50/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#67BA6D20' }}>
                  <Sparkles className="h-10 w-10" style={{ color: '#67BA6D' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#67BA6D' }}>
                  청결한 최신 시설
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  깔끔하고 현대적인 인테리어로 어르신들이 쾌적하고 편안한 환경에서 지내실 수 있습니다
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-green-50/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#67BA6D20' }}>
                  <HeartHandshake className="h-10 w-10" style={{ color: '#67BA6D' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#67BA6D' }}>
                  친절한 원장님
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  장기요양등급 절차와 서류 준비까지 보호자님께 자세하고 친절하게 안내해드립니다
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-green-50/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#67BA6D20' }}>
                  <Shield className="h-10 w-10" style={{ color: '#67BA6D' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#67BA6D' }}>
                  안전한 돌봄
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  우리 부모님처럼 바른 마음과 바른 정성으로 안전하고 건강하게 모십니다
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
