import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

// Import consultancy-related images
import ab from "../assets/work1.jpeg";
import bc from "../assets/work4.jpeg";

import consultancy2 from "../assets/55555.jpeg";
import consultancy3 from "../assets/22222.jpeg";
import consultancy4 from "../assets/333.jpeg";

// Define the images in an array
const images = [
  
  
  { src: consultancy3, alt: "3" },
  { src: ab, alt: "1" },
  { src: consultancy2, alt: "2" },
 
  
  { src: bc, alt: "5" },
];

export default function VisaConsultancySlider() {
  const [loaded, setLoaded] = useState(Array(images.length).fill(false));

  const handleImageLoad = (index) => {
    setLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <div className="w-full relative z-[0] bg-gray-100">
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="swiper-container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[300px] sm:h-[620px] md:h-[640px] 2xl:h-[900px] flex items-center justify-center relative">
              {/* Loader/Placeholder */}
              {!loaded[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                  <span className="text-gray-400 text-lg">Loading...</span>
                </div>
              )}

              {/* Fully visible image without cropping */}
              <img
                src={image.src}
                alt={image.alt}
                className={`max-w-full max-h-full object-contain transition-opacity duration-700 ${
                  loaded[index] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(index)}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional custom animation CSS */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
