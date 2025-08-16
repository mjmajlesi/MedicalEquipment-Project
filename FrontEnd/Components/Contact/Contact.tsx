import React from "react";
import Container from "../Container";
import AnimateDivs from "../animation/animateDivs";
import { PiPhoneFill } from "react-icons/pi";
import CopiedButtun from "../Contact/CopiedButtun";
import { MdPhoneIphone } from "react-icons/md";
import { PiMapPinAreaBold } from "react-icons/pi";
import ScrollDivAnime from "../animation/ScrollDivAnime";
import { Map } from "../DynamicImport";

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
            <div className="footerMapContainer rounded-[10px] h-[200px] w-[300px] md:h-[250px] md:w-full border-2 my-8 ">
              <Map />
            </div>
            <div className="GroupCards flex flex-col items-center justify-center gap-8 lg:gap-10 w-full">
              <div className="flex flex-col lg:flex-row justify-center gap-8 lg:w-full">
                <div className="flex justify-center gap-2 items-center bg-gray-900 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-2xl">
                  <CopiedButtun
                    text="081-32515434"
                    className="rounded-xl lg:text-md text-[18px] md:text-[20px] cursor-pointer font-semibold text-[#e5e5ea]"
                  />
                  <PiPhoneFill className="w-[60px] h-[60px] bg-[#51BCBF] text-white rounded-full shadow-md p-2" />
                </div>
                <div className="flex justify-center gap-2 items-center bg-gray-900 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-2xl">
                  <CopiedButtun
                    text="09188110276"
                    className="lg:text-md text-[18px] md:text-[20px] cursor-pointer font-semibold text-[#e5e5ea]"
                  />
                  <MdPhoneIphone className="w-[60px] h-[60px] bg-[#51BCBF] text-white rounded-full shadow-md p-2" />
                </div>
              </div>
              <div className="flex justify-center gap-4 items-center bg-gray-900 px-4 py-2 md:px-5 md:py-3 lg:px-8 lg:py-4 rounded-2xl">
                <CopiedButtun
                  text="همدان، میدان آرامگاه بوعلی سینا، مرکز اداری الماس (ساختمان شماره 1)، طبقه چهارم، واحد 37"
                  className="w-10/12 lg:text-md text-[18px] cursor-pointer font-semibold text-[#e5e5ea]"
                />
                <PiMapPinAreaBold className="w-[60px] h-[60px] bg-[#51BCBF] text-white rounded-full shadow-md p-2"/>
              </div>
            </div>
          </div>
        </AnimateDivs>
      </Container>
    </div>
  );
}

export default Contact;
