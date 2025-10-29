import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryImages = [
    { image: "https://via.placeholder.com/300x300?text=Gallery+1", alt: "Team Event 1" },
    { image: "https://via.placeholder.com/300x300?text=Gallery+2", alt: "Training Session" },
    { image: "https://via.placeholder.com/300x300?text=Gallery+3", alt: "Award Ceremony" },
    ...Array.from({ length: 16 }, (_, i) => ({
      image: `https://via.placeholder.com/300x300?text=Placeholder+${i + 4}`,
      alt: `Gallery placeholder ${i + 4}`,
    })),
  ];

  return (
    <>
      <section id="involved" className="section-padding bg-gradient-to-b from-[#fffef0] via-[#f3f3f3] to-[#fff]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1a1a1a]">
            GALLERY
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Moments that Define Our Journey 🇮🇳
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={36} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-full rounded-lg object-contain shadow-2xl border-4 border-white/20"
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
