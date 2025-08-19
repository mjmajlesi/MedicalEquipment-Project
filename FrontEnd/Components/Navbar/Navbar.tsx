"use client";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import Button from "../buttuns";
import Container from "../Container";
import Image from "next/image";
import logo from "../../public/Logo.png";
import { usePathname, useRouter } from "next/navigation";
import { AppContext } from "@/Context/AppContext";
import { useTheme } from "next-themes";
import ProfileMenu from "./Avatar";
import { Phone, Home, Store, Highlighter, Moon, Sun } from "lucide-react";

function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const { SetLogin, SetIsLogin, isLogin } = useContext(AppContext);
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const navstyle =
    "hover-bg-theme text-[20px] py-2 px-3 hover:rounded-md flex items-center gap-2  text-[18px] font-semibold cursor-pointer";

  const [isNav, SetIsNav] = useState(true);
  const toggleNav = () => {
    SetIsNav(!isNav);
  };
  const scrollSmooth = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const LoginOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    localStorage.removeItem("username");
    localStorage.removeItem("Email");

    SetLogin("");
    SetIsLogin(false);
    router.push("/login");
  };

  const SaveTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
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
          <Image
            className="rounded-2xl not-lg:hidden"
            width={80}
            height={80}
            src={logo}
            alt="Logo"
            priority
          />
          <div className="Login lg:hidden mr-5">
            {isLogin ? (
              <ProfileMenu />
            ) : (
              <div className="flex items-center gap-6 ">
                <Button className="rounded-xl text-white md:py-4 md:px-6 py-3 px-4 text-[18px] md:text-[20px] font-semibold bg-[#3a9b9b] active:bg-[#2a7a7a]">
                  <Link href={"/login"}>ورود</Link>
                </Button>
                <button
                  className="rounded-xl h-[45px] w-[45px] md:w-[60px] md:h-[60px] cursor-pointer bg-[#f6f6f6] text-[#222222] flex items-center justify-center hover:bg-gray-300 transition-all duration-300 ease-in-out md:p-1 p-2"
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
          <div
            onClick={toggleNav}
            className="lg:hidden flex flex-col justify-between w-[35px] h-[30px] ml-5"
          >
            <span className="h-[5px] w-full bg-white rounded-md"></span>
            <span className="h-[5px] w-full bg-white rounded-md"></span>
            <span className="h-[5px] w-full bg-white rounded-md"></span>
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
              <span
                className={navstyle}
                onClick={() => scrollSmooth("Products")}
              >
                <Store size={18} />
                محصولات
              </span>
              <span
                className={navstyle}
                onClick={() => scrollSmooth("Aboutme")}
              >
                <Highlighter size={18} />
                درباره ما
              </span>
              <span
                className={navstyle}
                onClick={() => scrollSmooth("Contact")}
              >
                <Phone size={18} />
                تماس با ما
              </span>
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
