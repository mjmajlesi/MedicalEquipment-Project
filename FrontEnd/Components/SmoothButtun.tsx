"use client";
import React from "react";

interface ISmoothbuttun {
  link: string;
  classname?: string;
  children: React.ReactNode;
}

function SmoothButton({ link, classname = "", children }: ISmoothbuttun) {
  const scrollSmooth = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <span onClick={() => scrollSmooth(link)} className={classname}>
      {children}
    </span>
  );
}

export default SmoothButton;
