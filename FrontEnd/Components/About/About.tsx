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
          className="about min-h-screen w-11/12 sm:w-10/12 mx-auto flex flex-col items-center justify-center gap-10 xl:gap-[60px]"
        >
          <ScrollDivAnime
            text="درباره ما"
            className="font-bold text-[30px] md:text-[36px] lg:text-[48px]"
            widthLeft={1}
            widthRight={1}
          />
          <div className="flex items-center flex-col-reverse xl:flex-row gap-4 md:gap-6 xl:gap-16 w-full  ">
            <div className="flex flex-col items-start w-full p-2 gap-8 leading-[30px] ">
              <AnimateDivs
                duration={1}
                delay={0.15}
                y={10}
                className=" flex flex-col items-start gap-6 "
              >
                <ScrollDivAnime
                  text="سابقه شرکت"
                  className="text-[24px] lg:text-[28px] xl:text-[30px] font-semibold"
                  widthLeft={1}
                  widthRight={0}
                />
                <p className="md:text-[19px] text-[14px] sm:text-[16px] text-justify not-md:px-4">
                  <span className="bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] bg-clip-text font-semibold text-xl text-[20px]">
                    شرکت فروغ طب روناک سینا{" "}
                  </span>{" "}
                  با ارائه خدمات فنی و تخصصی در زمینه گازهای طبی بیمارستانی
                  (مشاوره، اجراء و تعمیرات) در دهها پروژه و ارائه خدمات فنی و
                  تخصصی در زمینه سرب کوبی مراکز تصویر برداری طی چند دهه در ده ها
                  مرکز رادیولوژی، سی تی اسکن، آنژیوگرافی و پزشکی هسته ای همینطور
                  تعمیر، سرویس و نگهداشت دستگاه های اکسیژن ساز بیمارستانی از
                  مهمترین فعالیت ها و خدمات قبلی شرکت فروغ طب روناک سینا می‌باشد.
                </p>
              </AnimateDivs>
              <div className="flex flex-col items-start gap-6 ">
                <ScrollDivAnime
                  text="تاریخچه شرکت"
                  className="text-[24px] lg:text-[28px] xl:text-[30px] font-semibold"
                  widthLeft={1}
                  widthRight={0}
                />
                <p className="w-full not-md:px-4 text-[18px] lg:text-[20px] text-justify">
                  بنیانگذاران شرکت فروغ طب با تجربه چند دهه فعالیت در حوزه خدمات
                  پزشکی و بیمارستانی برآن شدند تا با تاسیس شرکت فروغ طب روناک
                  سینا در سال 1398، فعالیت های خود را در مجموعه های بیمارستانی
                  متمرکز کرده و طی این مدت به موفقیت های خوبی در این حوزه دست
                  یافته‌اند. اینک با هدف گسترش خدمات بیمارستانی در زمینه گاز های
                  طبی و نگهداشت دستگاه های اکسیژن ساز و نیز خدمات ایزولاسیون
                  مراکز تصویربرداری افق های روشنی را برای آینده ترسیم کرده‌ایم.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-center flex-col gap-6 ">
              <AnimateDivs duration={1} delay={0.3} y={25} className="">
                <SwiperComp />
              </AnimateDivs>
              <div className="flex flex-col items-start gap-1 not-md:hidden">
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
                    دارای رابطه تجاری با بیش از 30 بیمارستان و مرکز درمانی
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
          </div>
        </AnimateDivs>
      </Container>
    </div>
  );
}

export default About;
