import { Card, CardContent } from "@/components/ui/card";
import { Heart, Bone, Baby, Eye, Brain, Stethoscope, Clock, User } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Heart,
      title: "내과",
      description: "고혈압, 당뇨병, 심장질환 등 내과 전반에 걸친 진료를 제공합니다.",
      schedule: "월-금 09:00-18:00",
      doctor: "김○○ 과장",
      color: "primary"
    },
    {
      icon: Bone,
      title: "정형외과",
      description: "관절, 척추, 외상 등 근골격계 질환의 전문적인 치료를 제공합니다.",
      schedule: "월-토 09:00-17:00",
      doctor: "이○○ 과장",
      color: "secondary"
    },
    {
      icon: Baby,
      title: "소아청소년과",
      description: "신생아부터 청소년까지 아이들의 건강한 성장을 돕습니다.",
      schedule: "월-금 09:00-18:00",
      doctor: "박○○ 과장",
      color: "accent"
    },
    {
      icon: Eye,
      title: "안과",
      description: "백내장, 녹내장, 망막질환 등 안과 질환의 정밀 진료를 제공합니다.",
      schedule: "화-토 09:00-17:00",
      doctor: "최○○ 과장",
      color: "primary"
    },
    {
      icon: Brain,
      title: "신경과",
      description: "뇌졸중, 치매, 두통 등 신경계 질환의 전문 치료를 제공합니다.",
      schedule: "월-금 09:00-17:00",
      doctor: "정○○ 과장",
      color: "secondary"
    },
    {
      icon: Stethoscope,
      title: "건강검진센터",
      description: "종합건강검진과 맞춤형 건강관리 프로그램을 제공합니다.",
      schedule: "월-금 08:00-17:00",
      doctor: "예약문의: 1588-0000",
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
              다양한 전문 진료과와 특별 프로그램으로 환자분들의 건강을 종합적으로 관리합니다.
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
                      <span>진료시간: {program.schedule}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span>전담의: {program.doctor}</span>
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
