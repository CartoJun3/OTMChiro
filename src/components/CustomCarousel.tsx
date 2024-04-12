'use client'
import React from 'react';
import Image from 'next/image'

interface CustomImageCarouselProps {
  images: string[];
}

const CustomImageCarousel: React.FC<CustomImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
        onClick={goToPreviousSlide}
      >
        Previous
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
        onClick={goToNextSlide}
      >
        Next
      </button>
      <Image src={images[currentIndex]} alt={`Slide ${currentIndex}`} width="100" height="100" className="w-full h-auto" />
    </div>
  );
};

export default CustomImageCarousel;
