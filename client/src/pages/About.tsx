import { Heart, Shield, Sparkles, CheckCircle2, Phone } from "lucide-react";
import logoImg from "@assets/바른나무요양원 로고-Photoroom_1760948721948.png";

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Premium Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-green-50/40 via-white to-green-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(103,186,109,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(103,186,109,0.06),transparent_60%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold tracking-widest uppercase px-5 py-2.5 rounded-full shadow-soft" style={{ backgroundColor: '#67BA6D20', color: '#67BA6D' }}>
                About Us
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8" style={{ color: '#67BA6D' }}>
              바른나무요양원
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 max-w-5xl mx-auto leading-relaxed font-light">
              포천에서 만나는 <span className="font-bold" style={{ color: '#67BA6D' }}>프리미엄 요양 시설</span><br />
              청결하고 깔끔한 최신 인테리어로<br className="hidden sm:block" /> 어르신들을 모십니다
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Premium */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 animate-slide-up">
              <div className="inline-block mb-8">
                <span className="text-sm font-bold tracking-widest uppercase px-5 py-2.5 rounded-full shadow-soft" style={{ backgroundColor: '#67BA6D20', color: '#67BA6D' }}>
                  Our Philosophy
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-10" style={{ color: '#67BA6D' }}>
                운영 철학
              </h2>
              
              <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-3xl shadow-premium mb-12 border border-green-100/50">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black leading-relaxed" style={{ color: '#67BA6D' }}>
                  바른 마음,<br />
                  바른 태도,<br />
                  바른 정성으로<br />
                  <span className="text-gray-800">우리 부모님을<br />
                  건강하고 편안하게<br />
                  안전하고 행복하게<br />
                  모십니다</span>
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-5 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300" style={{ backgroundColor: '#67BA6D' }}>
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2" style={{ color: '#67BA6D' }}>바른 마음</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      어르신 한 분 한 분을 우리 부모님처럼 진심으로 대합니다
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-5 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300" style={{ backgroundColor: '#67BA6D' }}>
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2" style={{ color: '#67BA6D' }}>바른 태도</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      정직하고 투명하게 운영하며 보호자님과 소통합니다
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-5 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300" style={{ backgroundColor: '#67BA6D' }}>
                    <Sparkles className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2" style={{ color: '#67BA6D' }}>바른 정성</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      세심하고 전문적인 케어를 제공합니다
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 to-green-100/30 rounded-full blur-3xl"></div>
                <div className="relative bg-white rounded-3xl p-12 shadow-premium border border-green-100/50">
                  <img 
                    src={logoImg}
                    alt="바른나무요양원 로고" 
                    className="w-72 h-72 sm:w-96 sm:h-96 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Grid */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-green-50/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold tracking-widest uppercase px-5 py-2.5 rounded-full shadow-soft" style={{ backgroundColor: '#67BA6D20', color: '#67BA6D' }}>
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6" style={{ color: '#67BA6D' }}>
              바른나무요양원의 특별함
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {[
              {
                title: "프리미엄 시설",
                description: "청결하고 깔끔한 최신 인테리어로 어르신들이 쾌적한 환경에서 편안하게 지내실 수 있습니다"
              },
              {
                title: "친절한 상담",
                description: "원장님이 직접 장기요양등급 신청 절차와 서류 준비에 대해 자세하고 친절하게 안내해드립니다"
              },
              {
                title: "포천 위치",
                description: "포천에 위치하여 접근성이 좋고, 자연 친화적인 환경에서 어르신들이 건강한 생활을 하실 수 있습니다"
              },
              {
                title: "전문 케어",
                description: "경험 풍부한 전문 케어팀이 어르신 한 분 한 분께 맞춤형 돌봄 서비스를 제공합니다"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-green-50/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
                <div className="relative bg-white rounded-3xl p-10 shadow-soft hover:shadow-premium transition-all duration-500 border border-green-100/50">
                  <div className="flex items-start space-x-5">
                    <CheckCircle2 className="h-10 w-10 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" style={{ color: '#67BA6D' }} />
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: '#67BA6D' }}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-500 to-emerald-500"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 mx-auto mb-10 flex items-center justify-center shadow-2xl">
            <Phone className="h-12 w-12 text-white" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 text-white">
            궁금하신 점이 있으신가요?
          </h2>
          <p className="text-2xl sm:text-3xl mb-12 text-white/95 font-light leading-relaxed">
            장기요양등급부터 입소 절차까지<br />
            친절하게 상담해드립니다
          </p>
          
          <a 
            href="tel:0507-1381-0016"
            className="inline-block bg-white px-14 py-8 rounded-2xl text-3xl font-black shadow-2xl hover:shadow-glow hover:scale-105 transition-all duration-300"
            style={{ color: '#67BA6D' }}
            data-testid="link-call-about"
          >
            <Phone className="inline-block mr-4 h-8 w-8 mb-1" />
            0507-1381-0016
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
