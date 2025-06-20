import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Hospital, Stethoscope, Calendar, Info } from "lucide-react";

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <h1 className="text-4xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
                건강한 삶을 위한<br />
                <span className="font-semibold text-primary">전문 의료진</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                환자 중심의 맞춤형 치료와 최첨단 의료 장비로 여러분의 건강한 미래를 함께 만들어갑니다.
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
                    병원 소개
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
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">왜 우리 병원인가요?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">최고의 의료진과 최첨단 시설로 환자분들의 건강을 책임집니다.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">전문 의료진</h3>
                <p className="text-gray-600 leading-relaxed">각 분야 최고의 전문의들이 환자분 한 분 한 분께 최선을 다합니다.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Hospital className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">최첨단 시설</h3>
                <p className="text-gray-600 leading-relaxed">최신 의료 장비와 쾌적한 병원 환경으로 최고의 치료 효과를 제공합니다.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">환자 중심</h3>
                <p className="text-gray-600 leading-relaxed">환자의 입장에서 생각하고, 맞춤형 치료로 건강한 일상을 되찾아드립니다.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
