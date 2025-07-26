import React, { ComponentProps } from 'react'

type Tvariant = "dark" | "normal" | "login" | "seccece" | "danger" | "normal-border"

type Tchildren = ComponentProps<"button"> & {
  variant?: Tvariant
}

export default function Button({ children, className, variant, ...root }: Tchildren) {
  const styleButtun = "p-2  transition-all hover:scale-110 duration-300 ease-in-out cursor-pointer"
  return (
    <button {...root} className={`${styleButtun} ${className || ""} ${Changevariant(variant)}`}>{children}</button>
  )
}

function Changevariant(variant? : Tvariant) {
  switch (variant) {
    case "normal":
      return "bg-[#7FB2F3] text-black hover:bg-[#010211] hover:text-[#7FB2F3] hover:border-[#7FB2F3] border-1 "
    case "normal-border":
      return " bg-[#010211] text-[#7FB2F3]  border-[#7FB2F3] border-1 hover:bg-[#7FB2F3] hover:text-black"
    case "dark":
      return "bg-white text-black"
    case "login":
      return "bg-[#0d994d] text-white p-2"
    case "seccece":
      return "bg-green text-white"
    case "danger":
      return "bg-red text-white "
  }
  }
