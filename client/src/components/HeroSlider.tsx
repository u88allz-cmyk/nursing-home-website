import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";

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
    <div className="relative h-screen overflow-hidden">
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
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight"
                style={{ fontFamily: 'ChosunilboMyeongjo, serif' }}
              >
                해와달 요양원
              </h1>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-4 text-primary">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                {slide.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    상담 문의
                  </Button>
                </Link>
                <Link href="/about">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg backdrop-blur-sm"
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white scale-110" 
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>


    </div>
  );
};

export default HeroSlider;