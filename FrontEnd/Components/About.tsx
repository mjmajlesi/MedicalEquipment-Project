import React from "react";
import Container from "./Container";
import { IoAdd } from "react-icons/io5";
import AnimateDivs from "./animation/animateDivs";

function About() {
  return (
    <div id="Aboutme">
      <Container>
        <AnimateDivs
          duration={2}
          delay={0.3}
          y={50}
          className="about h-svh flex flex-col items-center justify-center gap-8 xl:gap-[100px]"
        >
          <div className="my-0 mx-auto w-fit">
            <h1 className="font-bold text-[48px] p-4">درباره ما</h1>
          </div>
          <div className="p-4 flex items-center justify-around gap-4">
            <div className=" p-6 flex flex-col items-start gap-12 leading-[30px] xl:w-1/2">
              <p className="text-[20px]">
                شرکت فروغ طب روناک سینا با هدف ارتقاء کیفیت خدمات بهداشتی و
                درمانی، در زمینه تجهیزات پزشکی و گازهای طبی فعالیت می‌کند. ما به
                عنوان یک شریک قابل اعتماد، به ارائه محصولات با کیفیت و خدمات
                سرویس و نگهداری تجهیزات پزشکی متعهد هستیم. تیم ما با بهره‌گیری
                از دانش و تجربه‌ی خود، به دنبال ایجاد راهکارهای نوآورانه و بهینه
                برای مشتریان عزیز است. ما به سلامت و رفاه جامعه اهمیت می‌دهیم و
                همواره در تلاشیم تا با ارائه بهترین خدمات، رضایت مشتریان را جلب
                کنیم
              </p>
              <div className="flex flex-col items-start ">
                <div className="flex items-center gap-2 flex-nowrap">
                  <IoAdd size={35} color="#7FB2F3" />
                  <span className="font-semibold transition-all line-clamp-1 duration-300 ease-in-out hover:text-[18px]">
                    نماینده رسمی شرکت رئوف در استان همدان
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-nowrap">
                  <IoAdd size={35} color="#7FB2F3" />
                  <span className="font-semibold transition-all line-clamp-1 duration-300 ease-in-out  hover:text-[18px]">
                    دارای رابطه تجاری با بیش از 30 بیمارستان و مرکز درمانی استان
                    همدان
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-nowrap">
                  <IoAdd size={35} color="#7FB2F3" />
                  <span className="font-semibold transition-all line-clamp-1 duration-300 ease-in-out  hover:text-[18px]">
                    همکار شرکت های تولید کننده تجهیزات گاز های طبی
                  </span>
                </div>
              </div>
            </div>
            <div className="not-md:hidden">
              {/* image */}
              <div className="bg-amber-50 not-md:hidden rounded-3xl h-[400px] w-[350px]"></div>
            </div>
          </div>
        </AnimateDivs>
      </Container>
    </div>
  );
}

export default About;
