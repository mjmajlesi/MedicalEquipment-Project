import React from "react";
import Container from "../Container";
import AnimateDivs from "../animation/animateDivs";
import { PiPhoneFill } from "react-icons/pi";
import CopiedButtun from "../Contact/CopiedButtun";
import { MdPhoneIphone } from "react-icons/md";
import { PiMapPinAreaBold } from "react-icons/pi";
import ScrollDivAnime from "../animation/ScrollDivAnime";

function Contact() {
  return (
    <div id="Contact">
      <Container>
        <AnimateDivs
          duration={1}
          delay={0.1}
          y={10}
          className="about flex flex-col items-center justify-center gap-8 xl:gap-[100px]"
        >
          <ScrollDivAnime text="تماس با ما" />
          <div className="flex items-center flex-col lg:flex-row gap-8 w-full mx-5 lg:w-10/12">
            <div className="flex flex-col items-center gap-10 w-full">
              <h2 className="lg:text-3xl text-2xl font-semibold ">تاریخچه شرکت</h2>
              <p className="w-full text-[19px]">
                بنیانگذاران شرکت فروغ طب با تجربه چند دهه فعالیت در حوزه خدمات
                پزشکی و بیمارستانی برآن شدند تا با تاسیس شرکت فروغ طب روناک سینا
                در سال 1398، فعالیت های خود را در مجموعه های بیمارستانی متمرکز
                کرده و طی این مدت به موفقیت های خوبی در این حوزه دست یافته اند.
                اینک با هدف گسترش خدمات بیمارستانی در زمینه گاز های طبی و
                نگهداشت دستگاه های اکسیژن ساز و نیز خدمات ایزولاسیون مراکز
                تصویربرداری افق های روشنی را برای آینده ترسیم کرده ایم.
              </p>
            </div>
            <div className="GroupCards flex flex-col items-center gap-8 lg:gap-10 w-full">
              <div className="flex flex-col lg:flex-row justify-between w-full gap-6">
                <div className="flex justify-center gap-2 items-center bg-gray-600 px-8 py-4 rounded-2xl">
                  <CopiedButtun
                    text="081-32515434"
                    className="rounded-xl px-4 py-2 lg:text-md text-[18px] cursor-pointer font-semibold bg-gray-700 text-[#e5e5ea]"
                  />
                  <PiPhoneFill size={60} color="#88888b" />
                </div>
                <div className="flex justify-center gap-2 items-center  bg-gray-600 px-8 py-4 rounded-2xl">
                  <CopiedButtun
                    text="081-32515434"
                    className="rounded-xl px-4 py-2 lg:text-md text-[18px] cursor-pointer font-semibold bg-gray-700 text-[#e5e5ea]"
                  />
                  <MdPhoneIphone size={50} color="#88888b" />
                </div>
              </div>
              <div className="flex justify-center gap-4 items-center w-full bg-gray-600 px-6 py-4 rounded-2xl">
                <CopiedButtun
                  text="همدان، میدان آرامگاه بوعلی سینا، مرکز اداری الماس (ساختمان شماره 1)، طبقه چهارم، واحد 37"
                  className="rounded-xl lg:text-md text-[18px] cursor-pointer font-semibold bg-gray-700 text-[#e5e5ea]"
                />
                <PiMapPinAreaBold size={80} color="#88888b" />
              </div>
            </div>
          </div>
        </AnimateDivs>
      </Container>
    </div>
  );
}

export default Contact;
