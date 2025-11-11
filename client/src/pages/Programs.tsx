import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Activity, Users, Palette, Shield, MessageCircle, FileText } from "lucide-react";

const Programs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    document.title = "프로그램 안내 - 바른나무요양원 | 전문 케어 프로그램";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "바른나무요양원의 전문 케어 프로그램을 확인하세요. 일상생활 지원, 물리치료, 인지활동, 요양등급 과정 지원 등 체계적인 케어 서비스를 제공합니다.");
    }
  }, []);

  const programs = [
    {
      icon: Heart,
      title: "일상생활 지원",
      description: "식사, 목욕, 복약관리 등 어르신들의 일상생활을 세심하게 도와드리며, 개별 맞춤 케어를 통해 편안한 일상을 지원합니다."
    },
    {
      icon: Activity,
      title: "물리치료 프로그램",
      description: "관절 운동, 근력 강화, 보행 훈련을 통해 신체 기능을 유지하고 향상시킵니다. 전문 물리치료사의 체계적인 프로그램을 제공합니다."
    },
    {
      icon: Users,
      title: "인지 활동 프로그램",
      description: "치매 예방과 인지능력 향상을 위한 다양한 활동을 제공합니다. 개별 수준에 맞는 프로그램으로 두뇌 건강을 관리합니다."
    },
    {
      icon: Palette,
      title: "여가 문화 프로그램",
      description: "음악, 미술, 원예 등 다양한 여가 활동으로 삶의 질을 높입니다. 창작 활동을 통해 성취감과 즐거움을 제공합니다."
    },
    {
      icon: Shield,
      title: "건강 관리 프로그램",
      description: "정기 건강 체크와 만성질환 관리로 어르신들의 건강을 체계적으로 관리합니다. 예방 중심의 건강 케어를 제공합니다."
    },
    {
      icon: MessageCircle,
      title: "상담 지원 프로그램",
      description: "심리적 안정과 정서적 지원을 통해 마음의 건강을 돌봅니다. 개별 상담을 통해 어르신들의 정서적 안정을 도모합니다."
    },
    {
      icon: FileText,
      title: "요양등급 과정 지원 프로그램",
      description: "요양등급 신청부터 인정조사, 등급 판정까지 전 과정을 체계적으로 안내하고 지원합니다. 서류 작성 및 절차 진행을 전문적으로 도와드립니다."
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % programs.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [programs.length, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        setCurrentSlide((prev) => (prev + 1) % programs.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);
      }
    }
  };

  return (
    <div className="animate-fade-in">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ 
                color: '#67BA6D',
                fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif'
              }}
            >
              서비스 안내
            </h1>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ 
                fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif',
                wordBreak: 'keep-all'
              }}
            >
              바른 마음, 바른 태도, 바른 정성으로 어르신들을 건강하고 편안하게 모시기 위한 다양한 서비스와 프로그램을 운영합니다.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={index} 
                className="border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                data-testid={`card-program-${index}`}
              >
                <CardContent className="p-8">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: '#67BA6D20' }}
                  >
                    <program.icon className="h-8 w-8" style={{ color: '#67BA6D' }} />
                  </div>
                  <h3 
                    className="text-xl font-bold mb-4"
                    style={{ 
                      color: '#67BA6D',
                      fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif'
                    }}
                  >
                    {program.title}
                  </h3>
                  <p 
                    className="text-gray-700 leading-relaxed"
                    style={{ 
                      fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif',
                      wordBreak: 'keep-all'
                    }}
                  >
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Auto Slider */}
          <div 
            className="md:hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={(e) => {
              setIsPaused(true);
              handleTouchStart(e);
            }}
            onTouchMove={handleTouchMove}
            onTouchEnd={(e) => {
              handleTouchEnd();
              setIsPaused(false);
            }}
          >
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {programs.map((program, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Card className="border-2 shadow-lg">
                      <CardContent className="p-6">
                        <div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                          style={{ backgroundColor: '#67BA6D20' }}
                        >
                          <program.icon className="h-8 w-8" style={{ color: '#67BA6D' }} />
                        </div>
                        <h3 
                          className="text-xl font-bold mb-4"
                          style={{ 
                            color: '#67BA6D',
                            fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif'
                          }}
                        >
                          {program.title}
                        </h3>
                        <p 
                          className="text-gray-700 leading-relaxed"
                          style={{ 
                            fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif',
                            wordBreak: 'keep-all'
                          }}
                        >
                          {program.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {programs.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-8' : ''
                  }`}
                  style={{ 
                    backgroundColor: index === currentSlide ? '#67BA6D' : '#D1D5DB'
                  }}
                  onClick={() => setCurrentSlide(index)}
                  data-testid={`button-slide-indicator-${index}`}
                />
              ))}
            </div>

            <p 
              className="text-center text-sm text-gray-500 mt-4"
              style={{ fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif' }}
            >
              좌우로 밀어서 볼 수 있습니다 ({currentSlide + 1}/{programs.length})
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
