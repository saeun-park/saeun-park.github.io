import React, { useState } from 'react';

interface ImageCarouselProps {
  images: { src: string; alt?: string }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-full mx-auto my-4">
      <img
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt || 'Project Image'}
        className="w-full object-contain"
        style={{ maxHeight: '500px' }}
        loading="lazy"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ml-2 hover:bg-opacity-75 transition-all"
            aria-label="Previous image"
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full mr-2 hover:bg-opacity-75 transition-all"
            aria-label="Next image"
          >
            &#10095;
          </button>
        </>
      )}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`block w-2 h-2 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
              }`}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
