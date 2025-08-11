"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
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

        className="mySwiper w-[550px] h-[300px] rounded-2xl"
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
    </>
  );
}

export default SwiperComp;
