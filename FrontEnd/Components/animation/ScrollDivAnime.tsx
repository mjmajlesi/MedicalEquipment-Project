"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import { gradiantText } from "../About/About";

function ScrollDivAnime({text} : {text : string}) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className="flex items-center justify-center w-full lg:w-10/12 mx-auto gap-4 lg:gap-8"
    >
      {/* خط چپ */}
      <motion.span
        className="bg-[#3A3A41] h-[2px] origin-right"
        initial={{ width: 0 }}
        animate={{ width: inView ? "500px" : 0 }} // طول دلخواه
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* هدر وسط */}
      <h1
        className={`${gradiantText} font-bold text-[36px] lg:text-[48px] whitespace-nowrap`}
      >
        {text}
      </h1>

      {/* خط راست */}
      <motion.span
        className="bg-[#3A3A41] h-[2px] origin-left"
        initial={{ width: 0 }}
        animate={{ width: inView ? "500px" : 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  );
}

export default ScrollDivAnime;
