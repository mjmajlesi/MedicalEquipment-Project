"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "./Product";

function SwiperProducts({ products , id = 0 }: IProduct) {
  return (
    <div className="max-w-[1500px] p-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="product-swiper"
      >
        {products.map((product) => (
          product.id >= id &&
          <SwiperSlide key={product.id} className="flex justify-center">
            <Link href={`/products/${product.id}`}>
              <div className="relative w-[330px] h-[500px] rounded-[22px] bg-[#f2f2f7] px-2.5 pt-2.5 shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 hover:shadow-gray-500/50 cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={240}
                  height={260}
                  priority
                  className="w-full h-[300px] lg:h-[350px] object-cover rounded-[12px]"
                />
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-gray-800 text-[20px] lg:text-[24px] mt-5 line-clamp-1">
                    {product.title}
                  </h3>
                  <span className="lg:line-clamp-2 text-[14px] text-black opacity-60 line-clamp-1">
                    {product.description}
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperProducts;
