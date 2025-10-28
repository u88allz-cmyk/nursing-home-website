import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Shield, HeartHandshake, Phone, Building2, Award } from "lucide-react";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import consultationBg from "@assets/제목을-입력해주세요_-001_1761645793819.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: hero1,
      title: "청결하고 깔끔한 최신 시설",
      subtitle: "프리미엄 요양 서비스의 새로운 기준"
    },
    {
      image: hero2,
      title: "바른 마음, 바른 태도, 바른 정성",
      subtitle: "우리 부모님을 건강하고 편안하게 모십니다"
    },
    {
      image: hero3,
      title: "친절한 상담과 세심한 케어",
      subtitle: "장기요양등급부터 입소까지 자세히 안내해드립니다"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Slider Section */}
      <div className="relative w-full h-96 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/15" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/15" />
            
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center px-4 max-w-4xl mx-auto">
                <h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-xl" 
                  style={{ color: '#67BA6D', textShadow: '2px 2px 4px rgba(255,255,255,0.8)' }}
                >
                  {slide.title}
                </h2>
                <p 
                  className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-semibold" 
                  style={{ color: '#2d2d2d', textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}
                >
                  {slide.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:0507-1381-0016">
                    <Button 
                      size="lg" 
                      className="text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-bold"
                      style={{ backgroundColor: '#67BA6D' }}
                      data-testid="button-call-hero"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      전화 상담
                    </Button>
                  </a>
                  <Link href="/gallery">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="px-8 py-4 rounded-xl border-2 transition-all duration-300 text-lg font-bold bg-white/90"
                      style={{ borderColor: '#67BA6D', color: '#67BA6D' }}
                      data-testid="button-gallery-hero"
                    >
                      <Building2 className="mr-2 h-5 w-5" />
                      시설 둘러보기
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              data-testid={`slider-indicator-${index}`}
            />
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="bg-white py-6"></div>

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
