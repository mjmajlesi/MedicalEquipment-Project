"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
const images = [
  { src: "/images/image1.jpg", alt: "سرویس دهی تجهیزات پزشکی" },
  { src: "/images/image2.jpg", alt: "تعمیر دستگاه سونوگرافی" },
  { src: "/images/image3.jpg", alt: "تکنسین متخصص در حال کار" },
  { src: "/images/image5.jpg", alt: "تکنسین متخصص در حال کار" },
];

import "swiper/css";
import "swiper/css/effect-fade";

function SwiperComp() {
  return (
    <>
      <div className="shadow-xl shadow-[#222222] rounded-2xl bg-white/70 p-1 flex justify-center items-center">
        <Swiper
          modules={[Autoplay, EffectFade]}
          slidesPerView={1}
          loop={true}
          autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
          }}
          effect="fade"
          fadeEffect={{
        crossFade: true,
          }}
          className="mySwiper w-[270px] sm:w-[400px] sm:h-[230px] h-[170px] md:h-[260px] md:w-[450px] lg:h-[300px] lg:w-[550px] 2xl:w-[700px] 2xl:h-[350px] rounded-2xl"
        >
          {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
        </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default SwiperComp;
