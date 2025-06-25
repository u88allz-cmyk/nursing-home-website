import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Activity, Users, Palette, Shield, MessageCircle, FileText } from "lucide-react";

const Programs = () => {
  useEffect(() => {
    document.title = "프로그램 안내 - 해와달 요양원 | 7가지 전문 케어 프로그램";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "해와달 요양원의 7가지 전문 케어 프로그램을 확인하세요. 일상생활 지원, 물리치료, 인지활동, 요양등급 과정 지원 등 체계적인 케어 서비스를 제공합니다.");
    }
  }, []);
  const programs = [
    {
      icon: Heart,
      title: "일상생활 지원",
      description: "식사, 목욕, 복약관리 등 어르신들의 일상생활을 세심하게 도와드리며, 개별 맞춤 케어를 통해 편안한 일상을 지원합니다.",
      color: "primary"
    },
    {
      icon: Activity,
      title: "물리치료 프로그램",
      description: "관절 운동, 근력 강화, 보행 훈련을 통해 신체 기능을 유지하고 향상시킵니다. 전문 물리치료사의 체계적인 프로그램을 제공합니다.",
      color: "secondary"
    },
    {
      icon: Users,
      title: "인지 활동 프로그램",
      description: "치매 예방과 인지능력 향상을 위한 다양한 활동을 제공합니다. 개별 수준에 맞는 프로그램으로 두뇌 건강을 관리합니다.",
      color: "accent"
    },
    {
      icon: Palette,
      title: "여가 문화 프로그램",
      description: "음악, 미술, 원예 등 다양한 여가 활동으로 삶의 질을 높입니다. 창작 활동을 통해 성취감과 즐거움을 제공합니다.",
      color: "primary"
    },
    {
      icon: Shield,
      title: "건강 관리 프로그램",
      description: "정기 건강 체크와 만성질환 관리로 어르신들의 건강을 체계적으로 관리합니다. 예방 중심의 건강 케어를 제공합니다.",
      color: "secondary"
    },
    {
      icon: MessageCircle,
      title: "상담 지원 프로그램",
      description: "심리적 안정과 정서적 지원을 통해 마음의 건강을 돌봅니다. 개별 상담을 통해 어르신들의 정서적 안정을 도모합니다.",
      color: "accent"
    },
    {
      icon: FileText,
      title: "요양등급 과정 지원 프로그램",
      description: "요양등급 신청부터 인정조사, 등급 판정까지 전 과정을 체계적으로 안내하고 지원합니다. 서류 작성 및 절차 진행을 전문적으로 도와드립니다.",
      color: "primary"
    }
  ];

  const getIconBgColor = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-primary/10 text-primary';
      case 'secondary': return 'bg-secondary/10 text-secondary';  
      case 'accent': return 'bg-accent/10 text-accent';
      default: return 'bg-primary/10 text-primary';
    }
  };

  return (
    <div className="animate-fade-in">
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">프로그램 안내</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              어르신들의 건강하고 활기찬 일상을 위한 다양한 케어 프로그램을 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${getIconBgColor(program.color)}`}>
                    <program.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
