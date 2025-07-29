import React from "react";
import Container from "./Container";
import AnimateDivs from "./animation/animateDivs";
import { PiPhoneFill } from "react-icons/pi";
import CopiedButtun from "./CopiedButtun";
import { MdPhoneIphone } from "react-icons/md";
import { PiMapPinAreaBold } from "react-icons/pi";

function Contact() {
  return (
    <div id="Contact">
      <Container>
        <AnimateDivs
          duration={1.5}
          delay={0.2}
          y={-50}
          className="about h-svh flex flex-col items-center justify-center gap-8 xl:gap-[100px]"
        >
          <div className="Head mx-auto w-fit my-0">
            <span className="bg-clip-text bg-gradient-to-r inline-block text-transparent from-[#023981] to-[#7FB2F3] font-bold text-[48px] p-4">
              تماس با ما
            </span>
          </div>
          <div className="GroupCards flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
            <div className="flex flex-col gap-4 items-center border-4 not-md:w-full border-[#023981] rounded-2xl py-8 p-6 bg-[#e5e5ea] lg:grow">
              <PiPhoneFill size={50} color="#88888b" />
              <div className="flex items-center">
                <span className="lg:text-base text-[18px] font-semibold text-[#1c1c1eda]">
                  081-32515434
                </span>
                <CopiedButtun
                  text="081-32515434"
                  className="rounded-xl px-4 py-2 text-[#424247ba]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center border-4 not-md:w-full border-[#023981] rounded-2xl py-8 p-6 bg-[#e5e5ea] lg:grow ">
              <MdPhoneIphone size={50} color="#88888b" />
              <div className="flex items-center">
                <span className="lg:text-base text-[18px] font-semibold text-[#1c1c1eda]">
                  081-32515434
                </span>
                <CopiedButtun
                  text="081-32515434"
                  className="rounded-xl px-4 py-2 text-[#020618]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center border-4 not-md:w-full border-[#023981] rounded-2xl py-8 p-6 bg-[#e5e5ea] lg:grow-3 ">
              <PiMapPinAreaBold size={50} color="#88888b" />
              <div className="flex items-center ">
                <span className="lg:text-base text-[18px] font-semibold text-[#1c1c1eda] line-clamp-2">
                  همدان، میدان آرامگاه بوعلی سینا، مرکز اداری الماس (ساختمان
                  شماره 1) طبقه چهارم، واحد 37
                </span>
                <CopiedButtun
                  text="همدان- میدان آرامگاه بوعلی سینا- مرکز اداری الماس (ساختمان شماره 1) طبقه چهارم واحد 37"
                  className="rounded-xl px-4 py-2 text-[#020618]"
                />
              </div>
            </div>
          </div>
        </AnimateDivs>
      </Container>
    </div>
  );
}

export default Contact;
