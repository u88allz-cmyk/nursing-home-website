import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import gallery1 from "@assets/KakaoTalk_20250528_102610842_28_1750829170834.jpg";
import gallery2 from "@assets/KakaoTalk_20250528_102612362_01_1750829170835.jpg";
import gallery3 from "@assets/KakaoTalk_20250528_104708745_01_1750829170835.jpg";
import gallery4 from "@assets/KakaoTalk_20250528_102610842_24_1750829170836.jpg";
import gallery5 from "@assets/KakaoTalk_20250414_153731808_08_1750829199051.jpg";
import gallery6 from "@assets/KakaoTalk_20250528_125344906_03_1750829228701.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      thumbnail: gallery1,
      full: gallery1,
      alt: "요양원 병실 - 깔끔한 환경"
    },
    {
      thumbnail: gallery2,
      full: gallery2,
      alt: "개인 욕실 - 안전한 시설"
    },
    {
      thumbnail: gallery3,
      full: gallery3,
      alt: "치료실 - 전문 의료 장비"
    },
    {
      thumbnail: gallery4,
      full: gallery4,
      alt: "개인실 - 편안한 침실"
    },
    {
      thumbnail: gallery5,
      full: gallery5,
      alt: "복도 - 밝고 안전한 통로"
    },
    {
      thumbnail: gallery6,
      full: gallery6,
      alt: "식당 - 넓고 쾌적한 공간"
    }
  ];

  return (
    <div className="animate-fade-in">
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-foreground mb-6">시설안내</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              해와달 요양원의 쾌적하고 안전한 시설을 확인해보세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div 
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => setSelectedImage(image.full)}
              >
                <img 
                  src={image.thumbnail}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <DialogTitle className="sr-only">갤러리 이미지 확대 보기</DialogTitle>
          <DialogDescription className="sr-only">
            병원 시설 갤러리 이미지를 확대하여 볼 수 있습니다.
          </DialogDescription>
          {selectedImage && (
            <img 
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
