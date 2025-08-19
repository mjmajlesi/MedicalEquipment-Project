import React from "react";
import Container from "../Container";
import AnimateDivs from "../animation/animateDivs";
import { PiPhoneFill } from "react-icons/pi";
import CopiedButtun from "../Contact/CopiedButtun";
import { MdPhoneIphone } from "react-icons/md";
import { PiMapPinAreaBold } from "react-icons/pi";
import ScrollDivAnime from "../animation/ScrollDivAnime";
import { Map } from "../DynamicImport";
import { BiLogoGmail } from "react-icons/bi";

function Contact() {
  return (
    <div id="Contact">
      <Container>
        <AnimateDivs
          duration={1}
          delay={0.1}
          y={10}
          className="contect min-h-screen lg:w-10/12 mx-auto flex flex-col items-center justify-center gap-6 xl:gap-[80px]"
        >
          <ScrollDivAnime
            text="تماس با ما"
            widthLeft={1}
            widthRight={1}
            className="font-bold text-[30px] md:text-[36px] lg:text-[48px] "
          />
          <div className="flex items-center flex-col xl:flex-row gap-10 w-full">
            <div className="footerMapContainer rounded-[10px] h-[250px] w-[300px] md:h-[350px] md:w-full border-2 my-8 ">
              <Map />
            </div>
            <div className="GroupCards bg-theme-div-text p-2 sm:px-5 sm:py-3 rounded-2xl flex flex-col items-end justify-center gap-2 w-full">
              <div className="flex justify-center gap-2 items-center px-4 py-2 rounded-2xl">
                <CopiedButtun
                  text="08132515434"
                  className="rounded-xl lg:text-md text-[18px] md:text-[20px] cursor-pointer font-semibold"
                />
                <PiPhoneFill className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#42a0a4] text-white rounded-full shadow-md p-2 flex-shrink-0" />
              </div>
              <span className="h-[2px] bg-theme-white w-full" />
              <div className="flex justify-center gap-2 items-center px-4 py-2 rounded-2xl">
                <CopiedButtun
                  text="09188110276"
                  className="lg:text-md text-[18px] md:text-[20px] cursor-pointer font-semibold"
                />
                <MdPhoneIphone className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#42a0a4] text-white rounded-full shadow-md p-2 flex-shrink-0" />
              </div>
              <span className="h-[2px] bg-theme-white w-full" />
              <div className="flex justify-center gap-2 items-center px-4 py-2 rounded-2xl">
                <CopiedButtun
                  text="farajianzadeh.majid@gmail.com"
                  className="flex-1 text-[16px] md:text-[18px] cursor-pointer font-semibold text-center break-words max-w-[180px] sm:max-w-full"
                />
                <BiLogoGmail className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#42a0a4] text-white rounded-full shadow-md p-2 flex-shrink-0" />
              </div>
              <span className="h-[2px] bg-theme-white w-full" />

              <div className="flex justify-center gap-2 items-center px-4 py-2 rounded-2xl">
                <CopiedButtun
                  text="همدان، میدان آرامگاه بوعلی سینا، مرکز اداری الماس (ساختمان شماره 1)، طبقه چهارم، واحد 37"
                  className="flex-1 text-[16px] md:text-[18px] cursor-pointer font-semibold text-center"
                />
                <PiMapPinAreaBold className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#42a0a4] text-white rounded-full shadow-md p-2 flex-shrink-0" />
              </div>
            </div>
          </div>
        </AnimateDivs>
      </Container>
    </div>
  );
}

export default Contact;
