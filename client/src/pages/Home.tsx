import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Building2, Sparkles, HeartHandshake, Shield, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";

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
      {/* Premium Hero Slider */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
            
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center px-6 max-w-5xl mx-auto">
                <h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 4px 20px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2)'
                  }}
                >
                  {slide.title}
                </h1>
                <p 
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-10 font-light leading-relaxed"
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 2px 12px rgba(0,0,0,0.3)'
                  }}
                >
                  {slide.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                  <a href="tel:0507-1381-0016">
                    <Button 
                      size="lg" 
                      className="text-white px-10 py-7 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#67BA6D' }}
                      data-testid="button-call-hero"
                    >
                      <Phone className="mr-3 h-6 w-6" />
                      전화 상담
                    </Button>
                  </a>
                  <Link href="/gallery">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="px-10 py-7 rounded-2xl border-3 text-xl font-bold bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-105 shadow-xl"
                      style={{ borderColor: '#67BA6D', color: '#67BA6D', borderWidth: '2px' }}
                      data-testid="button-gallery-hero"
                    >
                      <Building2 className="mr-3 h-6 w-6" />
                      시설 둘러보기
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'bg-white w-12' : 'bg-white/50 w-6'
              }`}
              data-testid={`slider-indicator-${index}`}
            />
          ))}
        </div>
      </div>

      {/* Philosophy Section - Premium Design */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-green-50/50 via-white to-green-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(103,186,109,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(103,186,109,0.06),transparent_50%)]"></div>
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-full" style={{ backgroundColor: '#67BA6D20', color: '#67BA6D' }}>
                Our Philosophy
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight" style={{ color: '#67BA6D' }}>
              바른나무요양원의<br />운영철학
            </h2>
            <div className="w-24 h-1.5 mx-auto mb-12 rounded-full" style={{ backgroundColor: '#67BA6D' }}></div>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-bold leading-relaxed max-w-4xl mx-auto">
              바른 마음, 바른 태도, 바른 정성으로<br className="hidden sm:block" />
              <span style={{ color: '#67BA6D' }}>우리 부모님</span>을 건강하고 편안하게<br className="hidden sm:block" />
              안전하고 행복하게 모십니다
            </p>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-full" style={{ backgroundColor: '#67BA6D20', color: '#67BA6D' }}>
                Premium Care
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6" style={{ color: '#67BA6D' }}>
              바른나무요양원이<br className="sm:hidden" /> 특별한 이유
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              포천에 위치한 프리미엄 요양 시설로<br className="hidden sm:block" />
              최고의 환경과 서비스를 제공합니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-green-50/30 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-soft hover:shadow-premium transition-all duration-500 border border-green-100/50">
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500" style={{ backgroundColor: '#67BA6D' }}>
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4 text-center" style={{ color: '#67BA6D' }}>
                  청결한 최신 시설
                </h3>
                <p className="text-gray-700 leading-relaxed text-center text-lg">
                  깔끔하고 현대적인 인테리어로<br />
                  어르신들이 쾌적하고 편안한<br />
                  환경에서 지내실 수 있습니다
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-green-50/30 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-soft hover:shadow-premium transition-all duration-500 border border-green-100/50">
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500" style={{ backgroundColor: '#67BA6D' }}>
                  <HeartHandshake className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4 text-center" style={{ color: '#67BA6D' }}>
                  친절한 원장님
                </h3>
                <p className="text-gray-700 leading-relaxed text-center text-lg">
                  장기요양등급 절차와<br />
                  서류 준비까지 보호자님께<br />
                  자세하고 친절하게 안내해드립니다
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-green-50/30 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-soft hover:shadow-premium transition-all duration-500 border border-green-100/50">
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500" style={{ backgroundColor: '#67BA6D' }}>
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4 text-center" style={{ color: '#67BA6D' }}>
                  안전한 돌봄
                </h3>
                <p className="text-gray-700 leading-relaxed text-center text-lg">
                  우리 부모님처럼<br />
                  바른 마음과 바른 정성으로<br />
                  안전하고 건강하게 모십니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-500 to-emerald-500"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center shadow-2xl">
            <Phone className="h-12 w-12 text-white" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
            장기요양등급,<br className="sm:hidden" /> 어떻게 신청하나요?
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-white/95 font-light leading-relaxed max-w-3xl mx-auto">
            처음이라 어렵고 막막하신가요?<br />
            바른나무요양원이 처음부터 끝까지<br className="hidden sm:block" />
            친절하게 안내해드립니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:0507-1381-0016">
              <Button 
                size="lg" 
                className="bg-white px-12 py-8 rounded-2xl text-2xl font-black shadow-2xl hover:shadow-glow hover:scale-105 transition-all duration-300"
                style={{ color: '#67BA6D' }}
                data-testid="button-call-cta"
              >
                <Phone className="mr-3 h-7 w-7" />
                0507-1381-0016
              </Button>
            </a>
            <Link href="/gallery">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white/50 text-white px-12 py-8 rounded-2xl text-2xl font-black hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-xl"
                style={{ borderWidth: '2px' }}
                data-testid="button-gallery-cta"
              >
                시설 보러가기
                <ChevronRight className="ml-3 h-7 w-7" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
