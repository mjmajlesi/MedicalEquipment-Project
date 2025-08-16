"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Button from "../buttuns";
import Container from "../Container";
import Image from "next/image";
import logo from "../../public/Logo.png";
import { usePathname, useRouter } from "next/navigation";
import { AppContext } from "@/Context/AppContext";
import ProfileMenu from "./Avatar";
import { Phone, Home, Store, Highlighter } from "lucide-react";

function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const { SetLogin, SetIsLogin, isLogin } = useContext(AppContext);

  const navstyle =
    "hover:bg-gray-700 py-2 px-3 hover:rounded-md text-[#ededed] flex items-center gap-2  text-[18px] font-semibold cursor-pointer";

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
            className="rounded-2xl not-md:hidden"
            width={65}
            height={60}
            src={logo}
            alt="Logo"
            priority
          />
          <div className="Login md:hidden">
            {isLogin ? (
              <ProfileMenu />
            ) : (
              <Button
                className="rounded-xl font-semibold py-3 px-6 active:bg-gray-300"
                variant="dark"
              >
                <Link href={"/login"}>ورود</Link>
              </Button>
            )}
          </div>
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
        md:flex flex-col rounded-lg md:flex-row gap-1 p-3 md:gap-4 items-center bg-gray-900
        md:bg-transparent`}
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
        <div className="Login max-md:hidden">
          {isLogin ? (
            <ProfileMenu />
          ) : (
            <Button
              className="rounded-xl py-3 px-6 active:bg-gray-300"
              variant="dark"
            >
              <Link href={"/login"}>ورود</Link>
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
