"use client";
import React from "react";
import Button from "./buttuns";
import Container from "./Container";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import LottieHeader from "./animation/LottieHeader";
import { AnimateDivs, ThreeScene } from "./DynamicImport";
import SwiperComp from "./Swiper";

function Header() {
  return (
    <Container>
      <div className="header flex justify-between items-start px-4 xl:items-center h-[calc(100vh-250px)] xl:h-[calc(100vh-100px)] ">
        <div className="flex flex-col items-center gap-8 w-full py-2 xl:w-1/3 xl:p-2 xl:items-start mb-10">
          <AnimateDivs
            duration={1.5}
            delay={0.2}
            y={20}
            className="xl:hidden mb-8"
          >
            <LottieHeader />
          </AnimateDivs>
          <AnimateDivs className="" duration={1.5} delay={0.2} y={20}>
            <h1 className="max-w-2xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-6xl sm:leading-tight md:text-[56px] md:leading-tight">
              خرید تجهیزات پزشکی با بهترین کیفیت و ارائه سرویس و خدمات
            </h1>
          </AnimateDivs>
          <div className="flex flex-col items-center justify-center gap-8">
            <AnimateDivs
              className="flex flex-col items-center gap-8"
              duration={1}
              delay={0.2}
              y={25}
            >
              <h2 className="my-6 max-w-xl text-center text-base leading-relaxed md:text-xl md:leading-relaxed">
                خرید تجهیزات پزشکی و آزمایشگاهی با بهترین قیمت و ارزان ترین قیمت
                بهترین کیفیت، نو و دست دوم با قیمت های مناسب برای معرفی بیشتر
                محصولات می توانید به صفحه محصولات مراجعه کنید.
              </h2>
            </AnimateDivs>
            <AnimateDivs
              duration={1}
              delay={0.4}
              y={25}
              className="flex items-center gap-4 "
            >
              <Button
                variant="normal"
                className="sm:px-4 sm:py-3 rounded-xl p-3 xl:text-[18px] bg-gradient-to-br from-[#589AF6] to-[#275ADD]"
              >
                <Link href={"/products"}>
                  <div className="flex items-center gap-2">
                    <span>مشاهده محصولات</span>
                    <GoArrowLeft size={20} className="text-gray-200" />
                  </div>
                </Link>
              </Button>
              <Button
                variant="normal-nonbg"
                className="sm:px-4 sm:py-3 rounded-md p-3 xl:text-[18px]"
              >
                <Link href={"/products"}>ارتباط با ما</Link>
              </Button>
            </AnimateDivs>
          </div>
        </div>
        <AnimateDivs
          duration={1}
          delay={0.3}
          y={25}
          className="pl-8 not-xl:hidden"
        >
          <SwiperComp />
        </AnimateDivs>
      </div>
      <div
        className="fixed w-[25vw] h-[25vw] min-w-[100px] top-[-100px] left-[5vw] rounded-[746px]
                bg-[#19376d] opacity-[0.7] blur-[100px] z-[-1]
            "
      />
      <div
        className="fixed w-[20vw] h-[20vw] min-w-[100px] bottom-0 right-0 rounded-[746px]
                bg-[#19376d] opacity-[0.7] blur-[100px] z-[-1]
            "
      />
    </Container>
  );
}

export default Header;
