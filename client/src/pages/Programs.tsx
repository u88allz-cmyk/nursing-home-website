import { Card, CardContent } from "@/components/ui/card";
import { Heart, Activity, Users, Palette, Shield, MessageCircle, Clock, User } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Heart,
      title: "일상생활 지원",
      description: "식사, 목욕, 복약관리 등 어르신들의 일상생활을 세심하게 도와드립니다.",
      schedule: "24시간",
      staff: "생활지원사",
      color: "primary"
    },
    {
      icon: Activity,
      title: "물리치료 프로그램",
      description: "관절 운동, 근력 강화, 보행 훈련을 통해 신체 기능을 유지합니다.",
      schedule: "월-금 09:00-17:00",
      staff: "물리치료사",
      color: "secondary"
    },
    {
      icon: Users,
      title: "인지 활동 프로그램",
      description: "치매 예방과 인지능력 향상을 위한 다양한 활동을 제공합니다.",
      schedule: "월-금 10:00-16:00",
      staff: "작업치료사",
      color: "accent"
    },
    {
      icon: Palette,
      title: "여가 문화 프로그램",
      description: "음악, 미술, 원예 등 다양한 여가 활동으로 삶의 질을 높입니다.",
      schedule: "주 3회 14:00-16:00",
      staff: "여가지도사",
      color: "primary"
    },
    {
      icon: Shield,
      title: "건강 관리 프로그램",
      description: "정기 건강 체크와 만성질환 관리로 어르신들의 건강을 지킵니다.",
      schedule: "주 2회 09:00-12:00",
      staff: "간호사",
      color: "secondary"
    },
    {
      icon: MessageCircle,
      title: "상담 지원 프로그램",
      description: "심리적 안정과 정서적 지원을 통해 마음의 건강을 돌봅니다.",
      schedule: "월-금 14:00-17:00",
      staff: "사회복지사",
      color: "accent"
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
                  <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                  <div className="text-sm text-gray-500">
                    <div className="flex items-center mb-1">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>운영시간: {program.schedule}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span>담당: {program.staff}</span>
                    </div>
                  </div>
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
