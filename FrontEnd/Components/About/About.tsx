import React from "react";
import Container from "../Container";
import { IoAdd } from "react-icons/io5";
import AnimateDivs from "../animation/animateDivs";
import ScrollDivAnime from "../animation/ScrollDivAnime";

export const gradiantText =
  "bg-gradient-to-r from-[#8B8B8B] via-black to-[#A4A4A4] bg-clip-text ";

function About() {
  return (
    <div id="Aboutme">
      <Container>
        <AnimateDivs
          duration={1}
          delay={0.1}
          y={10}
          className="about w-11/12 sm:w-10/12 mx-auto flex flex-col items-center justify-center gap-10 xl:gap-[60px]"
        >
          <ScrollDivAnime
            text="درباره ما"
            className="font-bold text-[30px] md:text-[36px] lg:text-[48px]"
            widthLeft={1}
            widthRight={1}
          />
          <div className="flex flex-col md:flex-row items-start w-full p-2 gap-12 leading-[30px] ">
            <AnimateDivs
              duration={1}
              delay={0.15}
              y={10}
              className=" flex flex-col items-start gap-6 bg-theme-div-text not-md:w-full px-8 py-5 rounded-2xl "
            >
              <ScrollDivAnime
                text="سابقه شرکت"
                className="text-[24px] lg:text-[28px] xl:text-[30px] font-semibold"
                widthLeft={1}
                widthRight={0}
              />
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray text-justify ">
                <span className="bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] bg-clip-text font-semibold text-xl text-[20px]">
                  شرکت فروغ طب روناک سینا{" "}
                </span>{" "}
                با ارائه خدمات فنی و تخصصی در زمینه گازهای طبی بیمارستانی
                (مشاوره، اجراء و تعمیرات) در دهها پروژه و ارائه خدمات فنی و
                تخصصی در زمینه سرب کوبی مراکز تصویر برداری طی چند دهه در دهها
                مرکز رادیولوژی، سی تی اسکن، آنژیوگرافی و پزشکی هسته ای همینطور
                تعمیر، سرویس و نگهداشت دستگاه های اکسیژن ساز بیمارستانی از
                مهمترین فعالیت ها و خدمات قبلی شرکت فروغ طب روناک سینا می‌باشد.
              </p>
            </AnimateDivs>
            <div className="flex flex-col items-start gap-6 bg-theme-div-text px-8 py-5 not-md:w-full  rounded-2xl">
              <ScrollDivAnime
                text="تاریخچه شرکت"
                className="text-[24px] lg:text-[28px] xl:text-[30px] font-semibold"
                widthLeft={1}
                widthRight={0}
              />
              <p className="w-full text-[16px] sm:text-[18px] lg:text-[20px] text-justify text-gray">
                بنیانگذاران شرکت فروغ طب با تجربه چند دهه فعالیت در حوزه خدمات
                پزشکی و بیمارستانی برآن شدند تا با تاسیس شرکت فروغ طب روناک سینا
                در سال 1398، فعالیت های خود را در مجموعه های بیمارستانی متمرکز
                کرده و طی این مدت به موفقیت های خوبی در این حوزه دست یافته‌اند.
                اینک با هدف گسترش خدمات بیمارستانی در زمینه گاز های طبی و
                نگهداشت دستگاه های اکسیژن ساز و نیز خدمات ایزولاسیون مراکز
                تصویربرداری افق های روشنی را برای آینده ترسیم کرده‌ایم.
              </p>
            </div>
          </div>
        </AnimateDivs>
      </Container>
      <div
        className="flex flex-col md:flex-row items-start justify-center gap-3 md:gap-5 bg-theme-div px-4 py-10 w-full mb-8 mt-12"
      >
        <div className="flex items-center gap-1 flex-nowrap">
          <IoAdd size={35} color="#7FB2F3" />
          <span className="font-semibold text-[16px] md:text-[18px] transition-all duration-300 ease-in-out md:hover:text-[20px] text-black-theme">
            نماینده رسمی شرکت رئوف در استان همدان
          </span>
        </div>
        <div className="flex items-center gap-1 flex-nowrap">
          <IoAdd size={35} color="#7FB2F3" />
          <span className="font-semibold text-[16px] md:text-[18px] transition-all duration-300 ease-in-out  md:hover:text-[20px] text-black-theme">
            دارای رابطه تجاری با بیش از 30 بیمارستان و مرکز درمانی
          </span>
        </div>
        <div className="flex items-center gap-1 flex-nowrap">
          <IoAdd size={35} color="#7FB2F3" />
          <span className="font-semibold text-[16px] md:text-[18px] transition-all duration-300 ease-in-out  md:hover:text-[20px] text-black-theme">
            همکار شرکت های تولید کننده تجهیزات گاز های طبی
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
