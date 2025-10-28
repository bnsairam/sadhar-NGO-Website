import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Generate array of gallery images (19 total)
  const galleryImages = Array.from({ length: 19 }, (_, i) => ({
    image: `/img/gallery${i + 1}.webp`,
    alt: `Gallery image ${i + 1}`,
  }));

  return (
    <>
      <section id="involved" className="section-padding bg-muted">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            GALLERY
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Moments that Define Our Journey
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
