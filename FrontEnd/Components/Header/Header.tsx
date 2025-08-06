import React from "react";
import Button from "../buttuns";
import Container from "../Container";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import LottieHeader from "../animation/LottieHeader";
import { AnimateDivs} from "../DynamicImport";
import SwiperComp from "./Swiper";

function Header() {
  return (
    <div className="lg:bg-no-repeat lg:bg-[url('/Desktop.png')] bg-none lg:[background-position:center_-150px]">
    <Container>
      <div className="header flex justify-center px-4 h-[calc(100vh-250px)] lg:h-screen">
        <div className="flex flex-col items-center justify-start gap-6 w-full py-2 xl:p-2 mt-16">
          <AnimateDivs
            duration={1.5}
            delay={0.2}
            y={20}
            className="lg:hidden mb-8"
          >
            <LottieHeader />
          </AnimateDivs>
          <AnimateDivs className="" duration={1.5} delay={0.2} y={20}>
            <h1 className="max-w-3xl bg-gradient-to-r from-[rgba(255,255,255,0.4)] via-white to-[rgba(255,255,255,0.4)] bg-clip-text lg:leading-20 text-center text-4xl font-bold text-transparent sm:leading-tight md:text-[60px]">
              خرید تجهیزات پزشکی با بهترین کیفیت و ارائه سرویس و خدمات
            </h1>
          </AnimateDivs>
          <div className="flex flex-col items-center justify-center gap-6">
            <AnimateDivs
              className="flex flex-col items-center gap-8"
              duration={1}
              delay={0.2}
              y={25}
            >
              <h2 className="my-6 max-w-xl text-[#ffffff] text-center text-base lg:text-[20px] leading-relaxed md:text-xl md:leading-[34px]">
                خرید تجهیزات پزشکی و آزمایشگاهی با بهترین قیمت و ارزان ترین قیمت
                بهترین کیفیت، نو و دست دوم با قیمت های مناسب برای معرفی بیشتر
                محصولات می توانید به صفحه محصولات مراجعه کنید.
              </h2>
            </AnimateDivs>
            <AnimateDivs
              duration={1}
              delay={0.4}
              y={25}
              className="flex items-center gap-10 "
            >
              <Button
                variant="dark"
                className="sm:px-4 sm:py-3 rounded-xl p-3 xl:text-[18px]"
              >
                <Link href={"/products"}>
                  <div className="flex items-center gap-2">
                    <span>مشاهده محصولات</span>
                    <GoArrowLeft size={20} className="text-[#000000]" />
                  </div>
                </Link>
              </Button>
              <Button
                className="sm:px-4 sm:py-3 rounded-md p-3 xl:text-[18px] bg-[#414141]"
              >
                <Link href={"/products"}>ارتباط با ما</Link>
              </Button>
            </AnimateDivs>
          </div>
        </div>
        {/* <AnimateDivs
          duration={1}
          delay={0.3}
          y={25}
          className="pl-8 not-xl:hidden"
        >
          <SwiperComp />
        </AnimateDivs> */}
      </div>
      {/* <div
        className="fixed w-[25vw] h-[25vw] min-w-[100px] top-[-100px] left-[5vw] rounded-[746px]
                bg-[#19376d] opacity-[0.7] blur-[100px] z-[-1]
            "
      />
      <div
        className="fixed w-[20vw] h-[20vw] min-w-[100px] bottom-0 right-0 rounded-[746px]
                bg-[#19376d] opacity-[0.7] blur-[100px] z-[-1]
            "
      /> */}
    </Container>
    </div>
  );
}

export default Header;
