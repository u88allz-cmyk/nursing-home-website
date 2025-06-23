import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Hospital, Stethoscope, Calendar, Info } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Slider Section */}
      <HeroSlider />
      
      {/* Original Hero Section - now hidden */}
      <section className="relative bg-muted py-20 lg:py-32 hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <h1 className="text-4xl lg:text-6xl font-light text-foreground leading-tight mb-6">
                따뜻한 보살핌과<br />
                <span className="font-semibold text-primary">전문 케어</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                어르신들의 건강하고 행복한 노후를 위해 가족같은 마음으로 최고의 케어 서비스를 제공합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="px-8 py-4 rounded-xl shadow-lg hover:shadow-xl">
                    <Calendar className="mr-2 h-5 w-5" />
                    상담 예약
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="px-8 py-4 rounded-xl border-2">
                    <Info className="mr-2 h-5 w-5" />
                    요양원 소개
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 mt-12 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern hospital interior" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-4">왜 해와달 요양원인가요?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">최고의 케어와 따뜻한 마음으로 어르신들의 건강한 노후를 책임집니다.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">전문 케어팀</h3>
                <p className="text-muted-foreground leading-relaxed">경험 풍부한 전문 케어팀이 어르신 한 분 한 분께 최선을 다합니다.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Hospital className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">쾌적한 시설</h3>
                <p className="text-muted-foreground leading-relaxed">안전하고 편안한 환경으로 어르신들이 집처럼 편안하게 지내실 수 있습니다.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">가족같은 돌봄</h3>
                <p className="text-muted-foreground leading-relaxed">어르신의 입장에서 생각하고, 개별 맞춤 케어로 행복한 일상을 만들어드립니다.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
