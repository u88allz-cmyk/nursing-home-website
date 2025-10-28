import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Heart, Sparkles, Shield } from "lucide-react";
import logoImg from "@assets/바른나무요양원 로고-Photoroom_1760948721948.png";

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-green-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#67BA6D' }}>
              바른나무요양원
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              포천에서 만나는 프리미엄 요양 시설<br />
              청결하고 깔끔한 최신 인테리어로 어르신들을 모십니다
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#67BA6D' }}>
                운영 철학
              </h2>
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg mb-8">
                <p className="text-2xl sm:text-3xl font-bold leading-relaxed" style={{ color: '#67BA6D' }}>
                  바른 마음, 바른 태도, 바른 정성으로<br />
                  우리 부모님을 건강하고 편안하게<br />
                  안전하고 행복하게 모십니다
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Heart className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: '#67BA6D' }} />
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-bold" style={{ color: '#67BA6D' }}>바른 마음</span>으로 어르신 한 분 한 분을 우리 부모님처럼 진심으로 대합니다
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: '#67BA6D' }} />
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-bold" style={{ color: '#67BA6D' }}>바른 태도</span>로 정직하고 투명하게 운영하며 보호자님과 소통합니다
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <Sparkles className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: '#67BA6D' }} />
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-bold" style={{ color: '#67BA6D' }}>바른 정성</span>으로 세심하고 전문적인 케어를 제공합니다
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src={logoImg}
                  alt="바른나무요양원 로고" 
                  className="w-64 h-64 sm:w-80 sm:h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center" style={{ color: '#67BA6D' }}>
            바른나무요양원의 특별함
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-8 w-8 flex-shrink-0 mt-1" style={{ color: '#67BA6D' }} />
                  <div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#67BA6D' }}>
                      프리미엄 시설
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      청결하고 깔끔한 최신 인테리어로 어르신들이 쾌적한 환경에서 편안하게 지내실 수 있습니다
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-8 w-8 flex-shrink-0 mt-1" style={{ color: '#67BA6D' }} />
                  <div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#67BA6D' }}>
                      친절한 상담
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      원장님이 직접 장기요양등급 신청 절차와 서류 준비에 대해 자세하고 친절하게 안내해드립니다
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-8 w-8 flex-shrink-0 mt-1" style={{ color: '#67BA6D' }} />
                  <div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#67BA6D' }}>
                      포천 위치
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      포천에 위치하여 접근성이 좋고, 자연 친화적인 환경에서 어르신들이 건강한 생활을 하실 수 있습니다
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-8 w-8 flex-shrink-0 mt-1" style={{ color: '#67BA6D' }} />
                  <div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#67BA6D' }}>
                      전문 케어
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      경험 풍부한 전문 케어팀이 어르신 한 분 한 분께 맞춤형 돌봄 서비스를 제공합니다
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            궁금하신 점이 있으신가요?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            장기요양등급부터 입소 절차까지<br />
            친절하게 상담해드립니다
          </p>
          <a 
            href="tel:0507-1450-8033"
            className="inline-block bg-white text-green-600 px-10 py-4 rounded-xl text-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            data-testid="link-call-about"
          >
            0507-1450-8033
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
