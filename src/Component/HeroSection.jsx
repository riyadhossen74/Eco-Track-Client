import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const HeroSection = () => {

     const images = [
    "https://i.ibb.co.com/Tx7tcDxJ/location-app-router-url-https-images-alltrails.jpg",
    "https://i.ibb.co.com/20Z3km3G/forest-road-1112-1840.jpg",
    "https://i.ibb.co.com/LdmXDD6f/man-running-track-fit-male-fitness-runner-jogging-stadium-man-running-track-fit-male-runner-jogging.jpg",
    
  ];
    return (
      
<div className="w-full mx-auto py-8 relative">

  {/* Sticky Text */}
  <div className="absolute top-35 left-80 -translate-x-1/2  text-white px-4 py-2 rounded-lg z-49">
    <p className="text-green-700 text-5xl my-2 ">Eco Track</p>
    <p className="hover:text-blue-600 text-2xl">Track your eco-journey, reduce waste, <br /> join challenges, and build a greener future.

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