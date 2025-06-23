import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      thumbnail: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      full: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "요양원 로비"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      full: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "요양원 복도"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      full: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "의료 장비"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      full: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "요양원 침실"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      full: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "상담실"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1594736797933-d0eeaa0bf6e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      full: "https://images.unsplash.com/photo-1594736797933-d0eeaa0bf6e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "요양원 외관"
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
