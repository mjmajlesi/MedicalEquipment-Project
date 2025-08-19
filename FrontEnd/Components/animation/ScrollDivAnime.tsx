"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import { gradiantText } from "../About/About";

interface IscrolldivAnime {
  text : string
  widthRight : number
  widthLeft : number
  className? : string
}

function ScrollDivAnime({text , widthLeft , widthRight , className} : IscrolldivAnime) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className="flex items-center justify-start w-full gap-4 md:gap-5"
    >
      <motion.span
        className={`bg-theme-white h-[2px] flex-grow ${widthRight == 0 && "hidden"}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inView ? widthRight : 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ transformOrigin: "right" }}
      />

      <h1
        className={`${gradiantText} ${className} whitespace-nowrap`}
      >
        {text}
      </h1>

      <motion.span
        className="bg-theme-white h-[2px] flex-grow"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inView ? widthLeft : 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}

export default ScrollDivAnime;
