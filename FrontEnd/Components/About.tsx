import React from "react";
import Container from "./Container";
import { IoAdd } from "react-icons/io5";
import AnimateDivs from "./animation/animateDivs";

function About() {
  const gradiantText = "bg-clip-text bg-gradient-to-r text-transparent from-[#023981] to-[#7FB2F3] "
  return (
    <div id="Aboutme">
      <Container>
        <AnimateDivs
          duration={1.5}
          delay={0.1}
          y={-10}
          className="about h-svh flex flex-col items-center justify-center gap-8 xl:gap-[100px]"
        >
          <div className="my-0 flex items-center gap-8 w-full lg:w-2/3 mot-md:mx-4">
            <h1 className={`${gradiantText} w-[200px] font-bold text-[36px] lg:text-[48px]`}>
              درباره ما
            </h1>
            <span className="bg-[#3A3A41] h-[2px] w-full"></span>
          </div>
            <div className=" p-2 flex flex-col md:flex-row items-start gap-12 leading-[30px] xl:w-2/3">
              <AnimateDivs duration={1.5} delay={0.3} y={50} className="w-full md:w-1/2 flex flex-col items-start gap-8 ">
                <p className="text-[20px]">
                   <span className={`${gradiantText} font-semibold text-2xl`}>شرکت فروغ طب روناک سینا </span> با هدف ارتقاء کیفیت خدمات بهداشتی و
                  درمانی، در زمینه تجهیزات پزشکی و گازهای طبی فعالیت می‌کند. ما
                  به عنوان یک شریک قابل اعتماد، به ارائه محصولات با کیفیت و
                  خدمات سرویس و نگهداری تجهیزات پزشکی متعهد هستیم. تیم ما با
                  بهره‌گیری از دانش و تجربه‌ی خود، به دنبال ایجاد راهکارهای
                  نوآورانه و بهینه برای مشتریان عزیز است. ما به سلامت و رفاه
                  جامعه اهمیت می‌دهیم و همواره در تلاشیم تا با ارائه بهترین
                  خدمات، رضایت مشتریان را جلب کنیم
                </p>
                <span className="font-semibold text-2xl lg:text-3xl">مدیر عامل شرکت : مجتبی فرجیان زاده</span>
              </AnimateDivs>
              <div className="flex flex-col items-start ">
                <AnimateDivs
                  duration={1.5}
                  delay={0.5}
                  y={50}
                  className="flex items-center gap-2 flex-nowrap"
                >
                  <IoAdd size={35} color="#7FB2F3" />
                  <span className="font-semibold transition-all line-clamp-1 duration-300 ease-in-out hover:text-[18px]">
                    نماینده رسمی شرکت رئوف در استان همدان
                  </span>
                </AnimateDivs>
                <AnimateDivs
                  duration={1.5}
                  delay={0.7}
                  y={50}
                  className="flex items-center gap-2 flex-nowrap"
                >
                  <IoAdd size={35} color="#7FB2F3" />
                  <span className="font-semibold transition-all line-clamp-1 duration-300 ease-in-out  hover:text-[18px]">
                    دارای رابطه تجاری با بیش از 30 بیمارستان و مرکز درمانی استان
                    همدان
                  </span>
                </AnimateDivs>
                <AnimateDivs
                  duration={1.5}
                  delay={0.9}
                  y={50}
                  className="flex items-center gap-2 flex-nowrap"
                >
                  <IoAdd size={35} color="#7FB2F3" />
                  <span className="font-semibold transition-all line-clamp-1 duration-300 ease-in-out  hover:text-[18px]">
                    همکار شرکت های تولید کننده تجهیزات گاز های طبی
                  </span>
                </AnimateDivs>
              </div>
            </div>
            {/* <AnimateDivs
              duration={1.5}
              delay={0.7}
              y={50}
              className=" w-2/3 pl-6 not-xl:hidden"
            >
              <ThreeScene />
            </AnimateDivs> */}
            <span className="bg-[#3A3A41] h-[2px] w-2/3"></span>
        </AnimateDivs>
      </Container>
    </div>
  );
}

export default About;
