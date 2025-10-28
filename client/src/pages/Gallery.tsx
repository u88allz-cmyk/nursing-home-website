import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import facility1 from "@assets/다운로드 (6)_1761650835558.jpg";
import facility2 from "@assets/다운로드 (7)_1761650835558.jpg";
import facility3 from "@assets/다운로드_1761650835559.jpg";
import facility4 from "@assets/다운로드 (1)_1761650835560.jpg";
import facility5 from "@assets/다운로드 (2)_1761650835561.jpg";
import facility6 from "@assets/다운로드 (3)_1761650835563.jpg";
import facility7 from "@assets/다운로드 (4)_1761650835565.jpg";
import facility8 from "@assets/다운로드 (5)_1761650835566.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  useEffect(() => {
    document.title = "시설안내 - 바른나무요양원 | 깨끗하고 편안한 시설";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "바른나무요양원의 쾌적하고 안전한 시설을 사진으로 확인하세요. 병실, 욕실, 치료실, 식당 등 현대적인 시설과 편의시설을 갖추고 있습니다.");
    }
  }, []);

  const images = [
    {
      thumbnail: facility2,
      full: facility2,
      alt: "공용 식당 - 밝고 쾌적한 식사 공간"
    },
    {
      thumbnail: facility3,
      full: facility3,
      alt: "공용 공간 - 넓고 편안한 휴게 공간"
    },
    {
      thumbnail: facility6,
      full: facility6,
      alt: "입소실 - 깨끗하고 안전한 병실"
    },
    {
      thumbnail: facility4,
      full: facility4,
      alt: "물리치료실 - 전문 재활 치료 공간"
    },
    {
      thumbnail: facility5,
      full: facility5,
      alt: "물리치료실 - 체계적인 치료 환경"
    },
    {
      thumbnail: facility8,
      full: facility8,
      alt: "간호사실 - 전문적인 케어 공간"
    },
    {
      thumbnail: facility1,
      full: facility1,
      alt: "욕실 - 안전하고 편리한 시설"
    },
    {
      thumbnail: facility7,
      full: facility7,
      alt: "욕실 - 깨끗하고 넓은 공간"
    }
  ];

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
              시설안내
            </h1>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ 
                fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif',
                wordBreak: 'keep-all'
              }}
            >
              깨끗하고 현대적인 시설에서 어르신들께 편안하고 안전한 환경을 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div 
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 border-2 border-transparent hover:border-[#67BA6D]"
                onClick={() => setSelectedImage(image.full)}
                data-testid={`img-facility-${index}`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.thumbnail}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>

          <p 
            className="text-center text-gray-500 mt-12"
            style={{ 
              fontFamily: 'LotteMartHappy, Noto Sans KR, sans-serif',
              wordBreak: 'keep-all'
            }}
          >
            사진을 클릭하시면 크게 보실 수 있습니다
          </p>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <DialogTitle className="sr-only">시설 이미지 확대 보기</DialogTitle>
          <DialogDescription className="sr-only">
            바른나무요양원 시설 이미지를 확대하여 볼 수 있습니다.
          </DialogDescription>
          {selectedImage && (
            <img 
              src={selectedImage}
              alt="시설 이미지"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
