"use client";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import Button from "../buttuns";
import Container from "../Container";
import Image from "next/image";
import logo from "../../public/LogoWeb.jpg";
import { usePathname} from "next/navigation";
import { AppContext } from "@/Context/AppContext";
import { useTheme } from "next-themes";
import ProfileMenu from "./Avatar";
import { Phone, Home, Store, Highlighter, Moon, Sun } from "lucide-react";
import SmoothButton from "../SmoothButtun";

function Navbar() {
  const path = usePathname();
  const {isLogin } = useContext(AppContext);
  const { resolvedTheme, setTheme } = useTheme();
  const [themePersian, SetThemePersian] = useState<string>("روشن");

  const [mounted, setMounted] = useState(false);
  const [innerWidth, setInnerWidth] = useState<number | null>(null);
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const update = () => setInnerWidth(window.innerWidth);
      update();
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }
    return;
  }, []);

  const navstyle =
    "hover-bg-theme text-[20px] py-2 px-3 hover:rounded-md flex items-center gap-2 font-semibold cursor-pointer";

  const [isNav, SetIsNav] = useState(true);
  const toggleNav = () => {
    SetIsNav(!isNav);
  };
  const SaveTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
    SetThemePersian(resolvedTheme === "light" ? "تاریک" : "روشن");
  };

  return (
    <Container>
      <div
        className={`${
          isNav
            ? " mt-5 flex items-center justify-around w-full h-[100px] bg-theme rounded-4xl "
            : "bg-theme mt-5 rounded-4xl"
        }`}
      >
        <div className=" py-4 not-lg:w-full not-lg:flex not-lg:justify-between not-lg:items-center">
          <div className="Login lg:hidden mr-5">
            {isLogin ? (
              <ProfileMenu />
            ) : (
              <div className="flex items-center gap-3 ">
                <Button className="rounded-xl text-white md:py-4 md:px-6 py-3 px-4 text-[18px] md:text-[20px] font-semibold bg-[#3a9b9b] active:bg-[#2a7a7a]">
                  <Link href={"/login"}>ورود</Link>
                </Button>
                <button
                  className="rounded-xl h-[45px] w-[45px] md:w-[60px] md:h-[60px] cursor-pointer bg-[#f6f6f6] text-[#222222] flex items-center justify-center hover:bg-gray-300 transition-all duration-300 ease-in-out md:p-1 p-2 not-sm:hidden"
                  onClick={SaveTheme}
                >
                  {mounted ? (
                    resolvedTheme === "light" ? (
                      <Sun size={30} />
                    ) : (
                      <Moon size={30} />
                    )
                  ) : (
                    <Sun size={30} />
                  )}
                </button>
              </div>
            )}
          </div>
          <Link href={"/"}>
            <Image
              className={`rounded-2xl cursor-pointer ${
                innerWidth !== null && innerWidth < 480
                  ? "w-[70px]"
                  : "w-[100px]"
              }`}
              width={75}
              height={75}
              src={logo}
              alt="Logo"
              priority
            />
          </Link>
          <div
            onClick={toggleNav}
            className="lg:hidden flex flex-col justify-between w-[35px] h-[30px] ml-5"
          >
            <span className="h-[5px] w-full bg-theme-div rounded-md"></span>
            <span className="h-[5px] w-full bg-theme-div rounded-md"></span>
            <span className="h-[5px] w-full bg-theme-div rounded-md"></span>
          </div>
        </div>
        <div
          className={` ${isNav ? "hidden" : "flex"}
        lg:flex flex-col rounded-lg lg:flex-row gap-0.5 p-2 lg:gap-4 items-center
        bg-transparent`}
        >
          {path == "/" ? (
            <>
              <Link className={navstyle} href={"/"}>
                <Home size={18} />
                خانه
              </Link>
              <SmoothButton link="Aboutme" classname={navstyle}>
                <Highlighter size={18} />
                درباره ما
              </SmoothButton>
              <SmoothButton link="Products" classname={navstyle}>
                <Store size={18} />
                محصولات
              </SmoothButton>
              <SmoothButton link="Contact" classname={navstyle}>
                <Phone size={18} />
                تماس با ما
              </SmoothButton>
              <button
                className={`${
                  isNav && "hidden"
                } flex items-center gap-2 p-2 rounded-md cursor-pointer`}
                onClick={SaveTheme}
              >
                {mounted ? (
                  resolvedTheme === "light" ? (
                    <Sun size={25} />
                  ) : (
                    <Moon size={25} />
                  )
                ) : (
                  <Sun size={25} />
                )}
                <span className="flex items-center gap-1 text-[20px] hover:rounded-md font-semibold cursor-pointer">
                  {" "}
                  حالت {themePersian}
                </span>
              </button>
            </>
          ) : (
            <>
              <Link className={navstyle} href={"/"}>
                <Home size={18} />
                خانه
              </Link>
              <Link className={navstyle} href={"/products"}>
                <Store size={18} />
                محصولات
              </Link>
            </>
          )}
        </div>
        <div className="Login max-lg:hidden">
          {isLogin ? (
            <ProfileMenu />
          ) : (
            <div className="flex items-center gap-6 ">
              <Button className="rounded-xl text-white py-4 px-6 text-[20px] font-semibold bg-[#3a9b9b] active:bg-[#2a7a7a]">
                <Link href={"/login"}>ورود</Link>
              </Button>
              <button
                className="rounded-xl w-[60px] h-[60px] cursor-pointer bg-[#f6f6f6] text-[#222222] flex items-center justify-center hover:bg-gray-300 transition-all duration-300 ease-in-out p-1"
                onClick={SaveTheme}
              >
                {mounted ? (
                  resolvedTheme === "light" ? (
                    <Sun size={30} />
                  ) : (
                    <Moon size={30} />
                  )
                ) : (
                  <Sun size={30} />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
