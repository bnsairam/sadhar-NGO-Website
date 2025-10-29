import { useState, useCallback, useEffect } from "react";
import { X } from "lucide-react";

interface GalleryItem {
  image: string;
  alt: string;
  webp: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  // ✅ Your exact image paths - gallery1.webp to gallery19.webp
  const galleryImages: GalleryItem[] = Array.from({ length: 19 }, (_, i) => {
    const num = i + 1;
    const paddedNum = num.toString().padStart(2, '0'); // 01, 02, ..., 19
    return {
      image: `/img/gallery${num}.webp`,
      webp: `/img/gallery${num}.webp`,
      alt: `Gallery Image ${num}`,
    };
  });

  // Preload first 4 images for better LCP
  useEffect(() => {
    const preloadImages = async () => {
      const preloadPromises = galleryImages.slice(0, 4).map(item =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set(prev).add(item.webp));
            resolve(img);
          };
          img.onerror = () => resolve(img);
          img.src = item.webp;
        })
      );
      await Promise.all(preloadPromises);
    };
    preloadImages();
  }, []);

  const handleImageClick = useCallback((image: string) => {
    setSelectedImage(image);
    // Preload lightbox image
    const img = new Image();
    img.src = image;
  }, []);

  const handleImageError = useCallback((imageSrc: string) => {
    setImageErrors(prev => new Set(prev).add(imageSrc));
  }, []);

  const handleImageLoad = useCallback((imageSrc: string) => {
    setLoadedImages(prev => new Set(prev).add(imageSrc));
  }, []);

  const getImageStatus = (image: string) => {
    if (imageErrors.has(image)) return 'error';
    if (loadedImages.has(image)) return 'loaded';
    return 'loading';
  };

  return (
    <>
      <section
        id="gallery"
        className="section-padding bg-gradient-to-b from-[#fffef0] via-[#f3f3f3] to-[#fff] py-20"
        style={{ contain: "layout style paint" }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#1a1a1a] to-[#333] bg-clip-text text-transparent">
              GALLERY
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Moments that Define Our Journey 🇮🇳
            </p>
          </div>

          {/* ✅ Optimized Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
            {galleryImages.map((item, index) => {
              const status = getImageStatus(item.webp);
              return (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gray-50 hover:bg-white"
                  onClick={() => handleImageClick(item.webp)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleImageClick(item.webp);
                    }
                  }}
                  aria-label={`View ${item.alt} in full screen`}
                >
                  {/* Skeleton Loader */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      status === 'loading' ? 'animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200' : 'opacity-0'
                    }`}
                  />

                  {/* Success/Error Overlay */}
                  {status === 'error' && (
                    <div className="absolute inset-0 bg-red-100 flex items-center justify-center">
                      <div className="text-red-500 text-xs font-medium px-3 py-1 bg-white/80 rounded-full backdrop-blur-sm">
                        Image not found
                      </div>
                    </div>
                  )}

                  {/* Main Image */}
                  <picture className="w-full h-full block">
                    <source
                      srcSet={item.webp}
                      type="image/webp"
                    />
                    <img
                      src={item.webp}
                      alt={item.alt}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                        status === 'loaded' ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading={index < 6 ? "eager" : "lazy"}
                      fetchPriority={index < 6 ? "high" : "auto"}
                      decoding="async"
                      onLoad={() => handleImageLoad(item.webp)}
                      onError={() => handleImageError(item.webp)}
                    />
                  </picture>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-200">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ✅ Fullscreen Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-6 animate-in fade-in zoom-in duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedImage(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          {/* Close Button */}
          <button
            className="group absolute top-6 right-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-white/20 hover:bg-white/40 backdrop-blur-xl transition-all duration-300 hover:scale-110 shadow-2xl border border-white/30"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            <X className="w-8 h-8 text-white group-hover:text-orange-400 transition-colors duration-200" />
          </button>

          {/* Navigation Arrows */}
          <button
            className="absolute left-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-white/20 hover:bg-white/40 backdrop-blur-xl transition-all duration-300 hover:scale-110 shadow-2xl border border-white/30 hidden md:flex"
            onClick={(e) => e.stopPropagation()}
            aria-label="Previous image"
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-24 w-14 h-14 flex items-center justify-center rounded-2xl bg-white/20 hover:bg-white/40 backdrop-blur-xl transition-all duration-300 hover:scale-110 shadow-2xl border border-white/30 hidden md:flex"
            onClick={(e) => e.stopPropagation()}
            aria-label="Next image"
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main Lightbox Image */}
          <div className="max-w-[95vw] max-h-[95vh] flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Fullscreen gallery image"
              className="max-w-full max-h-full object-contain rounded-3xl shadow-4xl animate-in zoom-in duration-500"
              onError={() => setSelectedImage(null)}
              loading="eager"
              fetchPriority="high"
              id="lightbox-title"
            />
          </div>

          {/* Keyboard Navigation */}
          <div
            className="sr-only"
            onKeyDown={(e) => {
              if (e.key === "Escape") setSelectedImage(null);
              if (e.key === "ArrowLeft") console.log("Previous");
              if (e.key === "ArrowRight") console.log("Next");
            }}
            tabIndex={-1}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;