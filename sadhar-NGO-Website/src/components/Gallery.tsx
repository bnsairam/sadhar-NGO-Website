import { useState, useCallback, useEffect } from "react";
import { X } from "lucide-react";

interface GalleryItem {
  image: string;
  alt: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  // Define gallery images with exact paths from public/img/
  const galleryImages: GalleryItem[] = Array.from({ length: 19 }, (_, i) => {
    const num = i + 1;
    return {
      image: `/img/gallery${num}.webp`,
      alt: `Gallery Image ${num}`,
    };
  });

  // Preload first 4 images for better LCP
  useEffect(() => {
    const preloadImages = galleryImages.slice(0, 4).map((item) =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages((prev) => new Set(prev).add(item.image));
          resolve(img);
        };
        img.onerror = (e) => {
          const msg = `Error loading ${item.image}: ${e.type}`;
          setErrorMessages((prev) => [...prev, msg]);
          resolve(img);
        };
        img.src = item.image;
      })
    );
    Promise.all(preloadImages);
  }, []);

  const handleImageClick = useCallback((image: string) => {
    setSelectedImage(image);
  }, []);

  const handleImageError = useCallback((imageSrc: string, e: React.SyntheticEvent<HTMLImageElement>) => {
    const msg = `Error loading ${imageSrc}: ${e.type}`;
    setErrorMessages((prev) => [...prev, msg]);
    setImageErrors((prev) => new Set(prev).add(imageSrc));
  }, []);

  const handleImageLoad = useCallback((imageSrc: string) => {
    setLoadedImages((prev) => new Set(prev).add(imageSrc));
  }, []);

  return (
    <>
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/logo.png" // Replace with your logo path
              alt="Sardar Vallabhbhai Patel Academy Logo"
              className="h-10 mr-2"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-900">Sardar Vallabhbhai Patel</h1>
              <span className="text-sm text-orange-600">ACADEMY</span>
            </div>
          </div>
          <nav className="flex space-x-6">
            <a href="#home" className="text-blue-800 hover:text-blue-600">HOME</a>
            <a href="#about" className="text-blue-800 hover:text-blue-600">ABOUT US</a>
            <a href="#programmes" className="text-blue-800 hover:text-blue-600">PROGRAMMES</a>
            <a href="#gallery" className="text-blue-800 hover:text-blue-600">GALLERY</a>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full hover:bg-gradient-to-l">
              DONATE
            </button>
          </nav>
        </div>
      </header>

      <section
        id="gallery"
        className="section-padding bg-gradient-to-b from-[#fffef0] via-[#f3f3f3] to-[#fff] py-12 sm:py-16"
        style={{ contain: "layout style paint" }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              GALLERY
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto">
              Moments that Define Our Journey 🇮🇳
            </p>
          </div>

          {/* Debug Error Messages */}
          {errorMessages.length > 0 && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded">
              {errorMessages.map((msg, idx) => (
                <p key={idx}>{msg}</p>
              ))}
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((item, index) => {
              const isError = imageErrors.has(item.image);
              const isLoaded = loadedImages.has(item.image);

              return (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer relative group bg-gray-50"
                  onClick={() => handleImageClick(item.image)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleImageClick(item.image)
                  }
                  aria-label={`View ${item.alt} in full screen`}
                >
                  {/* Skeleton Loader */}
                  <div
                    className={`absolute inset-0 bg-gray-200 animate-pulse ${
                      isLoaded || isError ? "hidden" : ""
                    }`}
                  />

                  {/* Error Overlay */}
                  {isError && (
                    <div className="absolute inset-0 bg-red-100 flex items-center justify-center">
                      <span className="text-red-500 text-xs font-medium">
                        Image not found
                      </span>
                    </div>
                  )}

                  <img
                    src={item.image}
                    alt={item.alt}
                    className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                      isLoaded ? "opacity-100" : "opacity-0"
                    } ${isError ? "hidden" : ""}`}
                    loading={index < 4 ? "eager" : "lazy"}
                    fetchPriority={index < 4 ? "high" : "auto"}
                    decoding="async"
                    onLoad={() => handleImageLoad(item.image)}
                    onError={(e) => handleImageError(item.image, e)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedImage(null);
          }}
          role="dialog"
          aria-labelledby="lightbox-title"
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] rounded-lg object-contain"
            onError={() => setSelectedImage(null)}
            loading="eager"
            fetchPriority="high"
            id="lightbox-title"
          />
        </div>
      )}
    </>
  );
};

export default Gallery;