import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: hero1,
      title: "따뜻한 보살핌과 전문 케어",
      subtitle: "어르신들의 건강하고 행복한 노후를 위해"
    },
    {
      image: hero2,
      title: "안전하고 쾌적한 환경",
      subtitle: "집처럼 편안한 요양원에서의 생활"
    },
    {
      image: hero3,
      title: "가족같은 따뜻한 돌봄",
      subtitle: "개별 맞춤 케어로 행복한 일상을"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
              filter: 'brightness(1.15) contrast(0.95)',
            }}
          />
          <div className="absolute inset-0 bg-white/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30" />
          
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 drop-shadow-xl" style={{ color: '#67BA6D', textShadow: '2px 2px 4px rgba(255,255,255,0.8)' }}>
                {slide.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-semibold" style={{ color: '#2d2d2d', textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}>
                {slide.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="text-white px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg font-bold"
                    style={{ backgroundColor: '#67BA6D' }}
                  >
                    상담 문의
                  </Button>
                </Link>
                <Link href="/about">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 bg-white text-gray-900 hover:bg-gray-50 px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg font-bold"
                    style={{ borderColor: '#67BA6D' }}
                  >
                    요양원 소개
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "scale-110" 
                : "opacity-50 hover:opacity-70"
            }`}
            style={{ backgroundColor: '#67BA6D' }}
          />
        ))}
      </div>


    </div>
  );
};

export default HeroSlider;