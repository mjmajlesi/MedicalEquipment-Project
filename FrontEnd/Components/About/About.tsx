import React from "react";
import Container from "../Container";
import { IoAdd } from "react-icons/io5";
import AnimateDivs from "../animation/animateDivs";
import ScrollDivAnime from "../animation/ScrollDivAnime";
import SwiperComp from "./Swiper";

export const gradiantText =
  "bg-gradient-to-r from-[rgba(255,255,255,0.4)] via-white to-[rgba(255,255,255,0.4)] bg-clip-text ";

function About() {
  return (
    <div id="Aboutme">
      <Container>
        <AnimateDivs
          duration={1}
          delay={0.1}
          y={10}
          className="about min-h-screen flex flex-col items-center justify-center gap-10 xl:gap-[100px]"
        >
          <ScrollDivAnime text="درباره ما" />
          <div className="flex items-center  flex-col-reverse xl:flex-row gap-8 lg:gap-16 w-11/12 sm:w-10/12">
            <div className="flex flex-col items-start  p-2 gap-8 leading-[30px] ">
              <AnimateDivs
                duration={1}
                delay={0.15}
                y={10}
                className="w-full flex flex-col items-start gap-4 "
              >
                <p className="md:text-[19px] text-[14px] sm:text-[16px]">
                  <span className="bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] bg-clip-text font-semibold text-xl sm:text-2xl text-[20px]">
                    شرکت فروغ طب روناک سینا{" "}
                  </span>{" "}
                  با ارائه خدمات فنی و تخصصی در زمینه گازهای طبی بیمارستانی (مشاوره، اجراء و تعمیرات) در دهها پروژه و ارائه خدمات فنی و تخصصی در زمینه سرب کوبی مراکز تصویر برداری طی چند
                  دهه در ده ها مرکز رادیولوژی، سی تی اسکن، آنژیوگرافی و پزشکی هسته ای
                  همینطور تعمیر، سرویس و نگهداشت دستگاه های اکسیژن ساز بیمارستانی از مهمترین فعالیت ها و خدمات قبلی شرکت فروغ طب روناک سینا میباشد.
                </p>
                <span className="font-semibold text-[20px] sm:text-2xl">
                  مدیر عامل شرکت : مجتبی فرجیان زاده
                </span>
              </AnimateDivs>
              <div className="flex flex-col items-start ">
                <AnimateDivs
                  duration={1}
                  delay={0.2}
                  y={10}
                  className="flex items-center gap-2 flex-nowrap"
                >
                  <IoAdd size={35} color="#7FB2F3" />
                  <span className="font-semibold text-[14px] md:text-[16px] transition-all line-clamp-1 duration-300 ease-in-out md:hover:text-[18px]">
                    نماینده رسمی شرکت رئوف در استان همدان
                  </span>
                </AnimateDivs>
                <AnimateDivs
                  duration={1}
                  delay={0.3}
                  y={10}
                  className="flex items-center gap-2 flex-nowrap"
                >
                  <IoAdd size={35} color="#7FB2F3" />
                  <span className="font-semibold text-[14px] md:text-[16px] transition-all line-clamp-1 duration-300 ease-in-out  md:hover:text-[18px]">
                    دارای رابطه تجاری با بیش از 30 بیمارستان و مرکز درمانی استان
                    همدان
                  </span>
                </AnimateDivs>
                <AnimateDivs
                  duration={1}
                  delay={0.4}
                  y={10}
                  className="flex items-center gap-2 flex-nowrap"
                >
                  <IoAdd size={35} color="#7FB2F3" />
                  <span className="font-semibold text-[14px] md:text-[16px] transition-all line-clamp-1 duration-300 ease-in-out  md:hover:text-[18px]">
                    همکار شرکت های تولید کننده تجهیزات گاز های طبی
                  </span>
                </AnimateDivs>
              </div>
            </div>
            <AnimateDivs
              duration={1}
              delay={0.3}
              y={25}
              className=""
            >
              <SwiperComp />
            </AnimateDivs>
          </div>
        </AnimateDivs>
      </Container>
    </div>
  );
}

export default About;
