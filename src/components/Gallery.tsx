import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

<<<<<<< HEAD
  // Use your real uploaded images + placeholders for the rest
  const galleryImages = [
    { image: "/img/gallery1.png", alt: "Team Event 1" },
    { image: "/img/gallery2.png", alt: "Training Session" },
    { image: "/img/gallery3.png", alt: "Award Ceremony" },
    // Fallback placeholders until more real images are added
    ...Array.from({ length: 16 }, (_, i) => ({
      image: `/img/placeholder.webp`,
      alt: `Gallery placeholder ${i + 4}`,
=======
  // Update this array to match the actual image filenames in your /public/img/ folder
  const galleryImages = [
    { image: "/img/gallery1.webp", alt: "Team Event 1" },
    { image: "/img/gallery2.webp", alt: "Training Session" },
    { image: "/img/gallery3.webp", alt: "Award Ceremony" },
    { image: "/img/gallery4.webp", alt: "Gallery Image 4" },
    { image: "/img/gallery5.webp", alt: "Gallery Image 5" },
    { image: "/img/gallery6.webp", alt: "Gallery Image 6" },
    // Add more real images here if available
    // Fallback placeholders for the rest
    ...Array.from({ length: 14 }, (_, i) => ({
      image: `/img/gallery${i + 7}.webp`, // Adjust index as per your files
      alt: `Gallery placeholder ${i + 7}`,
>>>>>>> 371dca0f5c79213205d1095c303966595160635c
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
<<<<<<< HEAD

=======
>>>>>>> 371dca0f5c79213205d1095c303966595160635c
          {/* Image Grid */}
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
<<<<<<< HEAD
                    (e.target as HTMLImageElement).src = "/img/placeholder.webp";
=======
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x300?text=Missing+Image";
>>>>>>> 371dca0f5c79213205d1095c303966595160635c
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

=======
>>>>>>> 371dca0f5c79213205d1095c303966595160635c
      {/* Fullscreen Lightbox View */}
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
