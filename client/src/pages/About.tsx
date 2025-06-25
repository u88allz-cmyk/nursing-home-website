import { Card, CardContent } from "@/components/ui/card";

const About = () => {


  return (
    <div className="animate-fade-in">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">요양원 소개</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              어르신들의 건강하고 행복한 노후를 위해<br />
              가족 같은 따뜻한 마음으로 최고의 케어 서비스를 제공합니다.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">우리의 철학</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>어르신들이 존경받고 사랑받는 환경에서 편안하고 행복한 노후를 보내실 수 있도록 최선을 다합니다.</p>
                <p>개별 맞춤 케어를 통해 어르신 한 분 한 분의 특별한 요구사항을 세심하게 살피며 가족 같은 따뜻한 돌봄을 제공합니다.</p>
                <p>안전하고 쾌적한 환경에서 어르신들이 건강하고 활기찬 일상을 유지하실 수 있도록 지속적으로 노력하겠습니다.</p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Healthcare professionals team" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>


        </div>
      </section>
    </div>
  );
};

export default About;
