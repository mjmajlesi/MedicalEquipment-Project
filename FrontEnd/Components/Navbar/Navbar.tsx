"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Button from "../buttuns";
import Container from "../Container";
import Image from "next/image";
import logo from "../../public/Logo.png";
import { usePathname, useRouter } from "next/navigation";
import { AppContext } from "@/Context/AppContext";

function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const { SetLogin, SetIsLogin, Login, isLogin } = useContext(AppContext);
  const [Menu, SetMenu] = useState<boolean>(false);

  const navstyle =
    "active:bg-gray-700 py-1 px-2 active:rounded-md text-[#ededed] relative transition-all duration-300 ease-in-out text-[18px] hover:text-[20px] font-semibold cursor-pointer";

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

    SetLogin("");
    SetIsLogin(false);
    router.push("/login");
  };

  return (
    <Container>
      <div
        className={`${
          isNav
            ? "text-[#ededed] p-2 flex items-center justify-around w-full h-[80px] "
            : "h-[250px] p-2"
        }`}
      >
        <div className=" py-4 not-md:w-full not-md:flex not-md:justify-between not-md:items-center">
          <Image
            className="rounded-2xl"
            width={60}
            height={60}
            src={logo}
            alt="Logo"
            priority
          />
          <div
            onClick={toggleNav}
            className="md:hidden flex flex-col justify-between w-[35px] h-[30px] m-2"
          >
            <span className="h-[5px] w-full bg-white rounded-md"></span>
            <span className="h-[5px] w-full bg-white rounded-md"></span>
            <span className="h-[5px] w-full bg-white rounded-md"></span>
          </div>
        </div>
        <div
          className={` ${isNav ? "hidden" : "flex"}
        md:flex flex-col rounded-lg md:flex-row gap-2 p-3 md:gap-8 items-center bg-gray-900
        md:bg-transparent`}
        >
          {path == "/" ? (
            <>
              <Link className={navstyle} href={"/"}>
                خانه
              </Link>
              <span
                className={navstyle}
                onClick={() => scrollSmooth("Products")}
              >
                محصولات
              </span>
              <span
                className={navstyle}
                onClick={() => scrollSmooth("Aboutme")}
              >
                درباره ما
              </span>
              <span
                className={navstyle}
                onClick={() => scrollSmooth("Contact")}
              >
                تماس با ما
              </span>
              {typeof window !== "undefined" &&
                window.innerWidth <= 768 &&
                (isLogin ? (
                  <div className="flex items-center gap-2">
                    <Link className={navstyle} href={"/login"}>
                      {Login}
                    </Link>
                    <Button
                      variant="white"
                      onClick={LoginOut}
                      className="rounded-xl py-2 px-3"
                    >
                      خروج
                    </Button>
                  </div>
                ) : (
                  <Link className={navstyle} href={"/login"}>
                    ورود
                  </Link>
                ))}
            </>
          ) : (
            <>
              <Link className={navstyle} href={"/"}>
                خانه
              </Link>
              <Link className={navstyle} href={"/products"}>
                محصولات
              </Link>
            </>
          )}
        </div>

        <div className="Login max-md:hidden">
          {isLogin ? (
            <div onClick={() => SetMenu(!Menu)}>
              {Menu ? (
                <div className=" cursor-pointer rounded-md p-2 bg-white text-black flex items-center gap-4 justify-center">
                  <span>{Login}</span>
                  <Button
                    variant="white"
                    onClick={LoginOut}
                    className="rounded-xl py-2 px-3"
                  >
                    خروج
                  </Button>
                </div>
              ) : (
                <Button variant="dark" className="rounded-md px-4 py-3">
                  <span className="font-semibold">{Login[0]}</span>
                </Button>
              )}
            </div>
          ) : (
            <Button className="rounded-xl py-3 px-6 active:bg-gray-300" variant="dark">
              <Link href={"/login"}>ورود</Link>
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
