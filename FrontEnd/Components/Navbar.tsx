"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './buttuns'

function Navbar() {
  const navs = [
    {
      name: "خانه",
      link: "/"
    },
    {
      name: "محصولات",
      link: "/products"
    },
    {
      name: "تماس با ما",
      link: "/contects"
    },
  ]
  const [isNav, SetIsNav] = useState(true);
  const toggleNav = () => {
    SetIsNav(!isNav);
  }

  return (
    <div className={`${isNav ? "text-[#ededed] p-4 flex items-center justify-between" : "mb-6"}`}>
      <div className="p-4 not-md:w-full not-md:flex not-md:justify-between not-md:items-center">
        <p className="font-semibold text-2xl ">لگو </p>
        <div
          onClick={toggleNav}
          className="md:hidden flex flex-col justify-between w-[36px] h-[32px] m-2"
        >
          <span className="h-[6px] w-full bg-white rounded-md"></span>
          <span className="h-[6px] w-full bg-white rounded-md"></span>
          <span className="h-[6px] w-full bg-white rounded-md"></span>
        </div>
      </div>
      <div className={` ${isNav ? "hidden" : "flex"}
        md:flex flex-col rounded-lg md:flex-row gap-4 p-3 md:gap-10 items-center bg-gray-900
        md:bg-transparent `}>
        {navs.map((nav, index) => (
          <Link className="hover:text-[#7FB2F3] text-[#ededed] 
            relative transition-all duration-300 ease-in-out hover:text-[18px]
            font-semibold "
            key={index} href={nav.link}>{nav.name}
          </Link>
        ))}
      </div>

      <div className="Login max-md:hidden">
        <Button className='bg-gradient-to-r from-[#023981] to-[#7FB2F3] transition delay-150 hover:scale-110 cursor-pointer' variant='login'>
          <Link href={"/login"}>
            Login
          </Link>
        </Button>
      </div>
    </div >
  )
}

export default Navbar