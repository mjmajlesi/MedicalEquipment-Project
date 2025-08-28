import React from "react";
import Button from "../buttuns";
import Container from "../Container";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import AnimateDivs from "../animation/animateDivs";
import SwiperComp from "./Swiper";


function Header() {
  return (
    <Container>
      <div
        className="flex flex-col-reverse xl:flex-row xl:justify-between gap-6 md:gap-12 items-center h-[calc(100vh-150px)]"
      >
        <div
          className="flex flex-col not-md:items-center items-start justify-center gap-6 md:gap-8 w-full py-2 xl:p-2 mt-6
           lg:mt-0"
        >
          <AnimateDivs className="" duration={1.3} delay={0.2} y={20}>
            <h1 className="max-w-2xl not-md:text-center text-theme text-[32px] md:text-[36px] xl:text-[40px] 2xl:text-[50px] font-extrabold leading-tight">
              تفاوت را با خدمات صادقانه ما در حوزه پزشکی تجربه کنید
            </h1>
          </AnimateDivs>
          <AnimateDivs
            className="flex flex-col not-md:items-center gap-6"
            duration={1.3}
            delay={0.25}
            y={20}
          >   
            <h2 className="max-w-xl not-md:text-center text-[18px] md:text-xl md:leading-[34px] md:text-justify font-medium text-gray">
              ارائه تجهیزات بیمارستانی و گاز های طبی و خدمات اجرا، نصب و نگهداشت تجهیزات سانترال گازهای طبی به همراه خدمات و نگهداشت دستگاه های اکسیژن ساز بیمارستانی
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button
                variant="dark"
                className="px-6 py-4 rounded-xl text-[18px] font-semibold shadow-lg hover:bg-gray-300 transition"
                aria-label="مشاهده محصولات"
              >
                <Link href="/products" className="flex items-center gap-2">
                  <span>مشاهده محصولات</span>
                  <GoArrowLeft size={22} className="text-black" />
                </Link>
              </Button>
              <Button
                className="px-6 py-4 rounded-xl text-[18px] not-md:hidden font-semibold bg-[#51BCBF] text-white shadow-lg hover:bg-[#3a9b9b] transition"
                aria-label="ارتباط با ما"
              >
                <Link href="/contact">ارتباط با ما</Link>
              </Button>
            </div>
          </AnimateDivs>
        </div>
        <AnimateDivs
          duration={1}
          delay={0.3}
          y={25}
          className="w-full flex justify-center items-center"
        >
          <SwiperComp />
        </AnimateDivs>
      </div>
      <div className="fixed w-[25vw] h-[25vw] min-w-[100px] top-[-100px] left-[5vw] rounded-full opacity-70 blur-[100px] z-[-1] bg-theme" />
      <div className="fixed w-[20vw] h-[20vw] min-w-[100px] bottom-0 right-0 rounded-full opacity-70 blur-[100px] z-[-1] bg-theme" />
      <div className="fixed w-[15vw] h-[15vw] min-w-[100px] bottom-[-50px] left-[-50px] rounded-full bg-theme opacity-70 blur-[100px] z-[-1] " />
    </Container>
  );
}

export default Header;
