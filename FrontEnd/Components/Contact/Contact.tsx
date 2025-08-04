import React from "react";
import Container from "../Container";
import AnimateDivs from "../animation/animateDivs";
import { PiPhoneFill } from "react-icons/pi";
import CopiedButtun from "../Contact/CopiedButtun";
import { MdPhoneIphone } from "react-icons/md";
import { PiMapPinAreaBold } from "react-icons/pi";
import image1 from "../../public/images/image1.jpg";
import Image from "next/image";

function Contact() {
  return (
    <div id="Contact">
      <Container>
        <AnimateDivs
          duration={1.5}
          delay={0.1} 
          y={10}
          className="about h-svh flex flex-col items-center justify-center gap-8 xl:gap-[50px]"
        >
          <div className="my-0 flex items-center gap-4 w-full lg:gap-8 lg:w-5/6">
            <h1 className="bg-clip-text bg-gradient-to-r w-[300px] text-transparent from-[#023981] to-[#7FB2F3] font-bold text-[32px] lg:text-[48px]">
              تماس با ما
            </h1>
            <span className="bg-[#3A3A41] h-[2px] w-full"></span>
          </div>
          <div className="flex items-center gap-12 w-full mx-5 lg:w-5/6">
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
              <Image src={image1} alt="imageContext" className="not-md:hidden rounded-3xl h-[500px] w-full" />
          </div>
        </AnimateDivs>
      </Container>
    </div>
  );
}

export default Contact;
