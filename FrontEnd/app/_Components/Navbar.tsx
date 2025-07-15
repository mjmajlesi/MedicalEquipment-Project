"use client"
import Link from 'next/link'
import React from 'react'
import Button from './buttuns'
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname();

  return (
    <div className='px-6 pb-4 my-4 flex justify-between items-center'>
      <div >
        <h1 className='text-2xl font-bold'>لگو</h1>
      </div>
      <div className='flex flex-row items-center gap-6'>
        {navs.map(nav => (
          <Link className={` ${pathname === nav.link ? "text-[#0d994d]" : "text-[#ededed]"} 
            relative transition-all duration-300 ease-in-out hover:text-[18px]
            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#ededed] after:transition-all after:duration-300
            font-semibold`}
            key={nav.name} href={nav.link}>{nav.name}
          </Link>
        ))}
      </div>
      <div>
        <Button variant='login'>Login</Button>
      </div>
    </div>
  )
}

export default Navbar