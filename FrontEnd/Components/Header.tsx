import React from "react";
import Button from "./buttuns";
import Container from "./Container";
import AnimateType from "./animation/animateType";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import LottieHeader from "./animation/LottieHeader";
import AnimateDivs from "./animation/animateDivs";
import ThreeScene from "./animation/Threesence";

function Header() {
  return (
    <Container>
      <div className="header flex gap-12 items-start xl:items-center h-[calc(100vh-250px)] xl:h-[calc(100vh-100px)] ">
        <div className="flex flex-col items-center gap-10 w-full py-2 xl:w-1/3 xl:p-2 xl:items-start mb-10">
          <AnimateDivs
            duration={1}
            delay={0.2}
            y={10}
            className="xl:hidden mb-8"
          >
            <LottieHeader />
          </AnimateDivs>
          <h1 className="font-bold text-[36px] md:text-[40px]">
            <AnimateType text="خرید تجهیزات آزمایشگاهی و ارائه خدمات و سرویس" />
          </h1>
          <AnimateDivs
            className="flex flex-col gap-8"
            duration={1}
            delay={0}
            y={10}
          >
            <h2 className="font-semibold text-[20px] text-gray-300">
              خرید تجهیزات پزشکی و آزمایشگاهی با بهترین قیمت و ارزان ترین قیمت
              بهترین کیفیت، نو و دست دوم با قیمت های مناسب برای معرفی بیشتر
              محصولات می توانید به صفحه محصولات مراجعه کنید.
            </h2>
            <div className="flex items-center gap-4 p-2 xl:gap-8">
              <Button
                variant="normal"
                className="sm:px-4 sm:py-3 rounded-2xl p-3 xl:text-[18px] hover:bg-[#010211] hover:text-[#7FB2F3] hover:border-[#7FB2F3]"
              >
                <Link href={"/products"}>مشاهده محصولات</Link>
              </Button>
              <Button
                variant="normal-border"
                className="sm:px-4 sm:py-3 rounded-2xl p-3 xl:text-[18px]"
              >
                <Link href={"/products"}>ارتباط با ما</Link>
              </Button>
              <GoArrowLeft size={45} className="text-gray-300" />
            </div>
          </AnimateDivs>
        </div>
        <div className=" w-2/3 pl-6 not-xl:hidden">
          <ThreeScene />
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
      </div>
    </Container>
  );
}

export default Header;
