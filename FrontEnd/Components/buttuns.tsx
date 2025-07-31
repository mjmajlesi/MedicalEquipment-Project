import React, { ComponentProps } from "react";

type Tvariant =
  | "dark"
  | "normal"
  | "login"
  | "seccece"
  | "danger"
  | "normal-nonbg"
  | "white";

type Tchildren = ComponentProps<"button"> & {
  variant?: Tvariant;
};

export default function Button({
  children,
  className,
  variant,
  ...root
}: Tchildren) {
  const styleButtun =
    "p-2  transition-all hover:scale-105 duration-300 ease-in-out cursor-pointer";
  return (
    <button
      {...root}
      className={`${styleButtun} ${className || ""} ${Changevariant(variant)}`}
    >
      {children}
    </button>
  );
}

function Changevariant(variant?: Tvariant) {
  switch (variant) {
    case "normal":
      return "text-[#ededed] outline-1 outline-[#7FB2F3] border-[#09090B] border-2 hover:border-none hover:outline-none ";
    case "normal-nonbg":
      return "text-[#ededed] hover:bg-gray-700";
    case "dark":
      return "bg-white text-black";
    case "white":
      return "bg-[#010211] text-[#e5e5ea]";
    case "login":
      return "bg-[#0d994d] text-white p-2";
    case "seccece":
      return "bg-green text-white";
    case "danger":
      return "bg-red text-white ";
  }
}
