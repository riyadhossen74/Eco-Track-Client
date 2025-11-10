import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const HeroSection = () => {

     const images = [
    "https://i.ibb.co.com/mCTyHZbf/pexels-polesietoys-31137007.jpg",
    "https://i.ibb.co.com/ds2BtfcF/360-F-217089170-KBoukd-ZXongzmsk-Wq-Fi2h-K1-Xpeydhh-Vr.jpg",
    "https://i.ibb.co.com/RGFC74k9/depositphotos-58885651-stock-photo-cute-baby-playing-with-toys.jpg",
    
  ];
    return (
      
<div className="w-full mx-auto py-8 relative">

  {/* Sticky Text */}
  <div className="absolute top-35 left-50 -translate-x-1/2  text-white px-4 py-2 rounded-lg z-50">
    <p className="text-green-700 text-3xl my-2">Your Sticky Text Here</p>
    <p>Track your eco-journey, reduce waste, <br /> join challenges, and build a greener future.

</p>
  </div>

  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    loop={true}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    className="rounded-2xl shadow-lg"
  >
    {images.map((src, index) => (
      <SwiperSlide key={index}>
        <img
          src={src}
          alt={`Slide ${index}`}
          className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    );
};

export default HeroSection;