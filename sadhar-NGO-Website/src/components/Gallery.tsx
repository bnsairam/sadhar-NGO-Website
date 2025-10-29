import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ✅ Using real uploaded images (from /public/img folder)
  const galleryImages = [
    { image: "/img/gallery1.jpg", alt: "Gallery Image 1" },
    { image: "/img/gallery2.jpg", alt: "Gallery Image 2" },
    { image: "/img/gallery3.jpg", alt: "Gallery Image 3" },
    { image: "/img/gallery4.jpg", alt: "Gallery Image 4" },
    { image: "/img/gallery5.jpg", alt: "Gallery Image 5" },
    { image: "/img/gallery6.jpg", alt: "Gallery Image 6" },
    { image: "/img/gallery7.jpg", alt: "Gallery Image 7" },
    { image: "/img/gallery8.jpg", alt: "Gallery Image 8" },
    { image: "/img/gallery9.jpg", alt: "Gallery Image 9" },
    { image: "/img/gallery10.jpg", alt: "Gallery Image 10" },
    { image: "/img/gallery11.jpg", alt: "Gallery Image 11" },
    { image: "/img/gallery12.jpg", alt: "Gallery Image 12" },
    { image: "/img/gallery13.jpg", alt: "Gallery Image 13" },
    { image: "/img/gallery14.jpg", alt: "Gallery Image 14" },
    { image: "/img/gallery15.jpg", alt: "Gallery Image 15" },
    { image: "/img/gallery16.jpg", alt: "Gallery Image 16" },
    { image: "/img/gallery17.jpg", alt: "Gallery Image 17" },
    { image: "/img/gallery18.jpg", alt: "Gallery Image 18" },
    { image: "/img/gallery19.jpg", alt: "Gallery Image 19" },
  ];

  return (
    <>
      <section
        id="gallery"
        className="section-padding bg-gradient-to-b from-[#fffef0] via-[#f3f3f3] to-[#fff]"
      >
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1a1a1a]">
            GALLERY
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Moments that Define Our Journey 🇮🇳
          </p>

          {/* ✅ Image Grid */}
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
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/img/placeholder.webp";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Fullscreen Lightbox View */}
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
