import React from "react";
import Button from "../buttuns";
import Container from "../Container";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import LottieHeader from "../animation/LottieHeader";
import { gradiantText } from "../About/About";
import AnimateDivs from "../animation/animateDivs";

function Header() {
  return (
    <div className="lg:bg-no-repeat lg:bg-[url('/Desktop.png')] bg-none lg:[background-position:center_-150px]">
      <Container>
        <div className="header flex justify-center px-4 h-[calc(100vh-100px)] lg:h-screen">
          <div className="flex flex-col items-center justify-start gap-6 w-full py-2 xl:p-2 mt-16">
            <AnimateDivs
              duration={1.3}
              delay={0.1}
              y={20}
              className="lg:hidden mb-8"
            >
              <LottieHeader />
            </AnimateDivs>
            <AnimateDivs className="" duration={1.3} delay={0.2} y={20}>
              <h1
                className={`max-w-3xl ${gradiantText} lg:leading-20 text-center text-[28px] sm:text-[32px] md:text-[40px] font-bold text-transparent sm:leading-tight lg:text-[64px]`}
              >
                تفاوت را با خدمات صادقانه ما در حوزه پزشکی تجربه کنید
              </h1>
            </AnimateDivs>
            <AnimateDivs
              className="flex flex-col items-center justify-center gap-6"
              duration={1.3}
              delay={0.25}
              y={20}
            >
              <h2 className="my-6 max-w-2xl text-[#e2dedef8] text-center text-[18px] lg:text-[24px] leading-relaxed md:text-xl md:leading-[34px] line-clamp-5">
                خرید تجهیزات پزشکی و آزمایشگاهی با بهترین و مناسب‌ ترین قیمت‌ها
                کیفیت عالی، محصولات نو و دست دوم با شرایط ویژه برای مشاهده و
                آشنایی بیشتر با محصولات، به صفحه محصولات مراجعه فرمایید.
              </h2>
              <AnimateDivs
                duration={1.3}
                delay={0.3}
                y={20}
                className="flex items-center md:gap-12 gap-8"
              >
                <Button
                  variant="dark"
                  className=" active:bg-gray-300 px-5 py-4 rounded-xl xl:text-[18px]"
                >
                  <Link href={"/products"}>
                    <div className="flex items-center gap-[2px] sm:gap-2">
                      <span>مشاهده محصولات</span>
                      <GoArrowLeft size={20} className="text-[#000000]" />
                    </div>
                  </Link>
                </Button>
                {/* <Button
                className="sm:px-4 sm:py-3 md:px-5 active:bg-transparent md:py-4 rounded-md p-2 xl:text-[18px] bg-[#414141]"
              >
                <Link href={"/"}>ارتباط با ما</Link>
              </Button> */}
              </AnimateDivs>
            </AnimateDivs>
          </div>
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
