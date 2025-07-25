"use client";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./buttuns";
import Container from "./Container";
import Image from "next/image";
import logo from "../public/Logo.png";

function Navbar() {
    const navstyle =
        "hover:text-[#7FB2F3] text-[#ededed] relative transition-all duration-300 ease-in-out hover:text-[18px] font-semibold";

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

    return (
        <Container>
            <div
                className={`${
                    isNav
                        ? "text-[#ededed] px-2 py-4 flex items-center justify-between h-[100px] "
                        : "h-[250px] p-2"
                }`}
            >
                <div className="p-2 not-md:w-full not-md:flex not-md:justify-between not-md:items-center">
                    <Image
                        className="rounded-2xl"
                        width={50}
                        height={50}
                        src={logo}
                        alt="Logo"
                        priority
                    />
                    <div
                        onClick={toggleNav}
                        className="md:hidden flex flex-col justify-between w-[36px] h-[32px] m-2"
                    >
                        <span className="h-[6px] w-full bg-white rounded-md"></span>
                        <span className="h-[6px] w-full bg-white rounded-md"></span>
                        <span className="h-[6px] w-full bg-white rounded-md"></span>
                    </div>
                </div>
                <div
                    className={` ${isNav ? "hidden" : "flex"}
        md:flex flex-col rounded-lg md:flex-row gap-4 p-3 md:gap-10 items-center bg-gray-900
        md:bg-transparent`}
                >
                    <Link className={navstyle} href={"/"}>
                        خانه
                    </Link>
                    <Link className={navstyle} href={"/products"}>
                        محصولات
                    </Link>
                    <span
                        className={`${navstyle} cursor-pointer`}
                        onClick={() => scrollSmooth("Aboutme")}
                    >
                        درباره ما
                    </span>
                    <Link className={navstyle} href={"/contact"}>
                        تماس با ما
                    </Link>
                </div>

                <div className="Login max-md:hidden">
                    <Button
                        className="bg-gradient-to-r from-[#023981] to-[#7FB2F3] rounded-md"
                        variant="login"
                    >
                        <Link href={"/login"}>Login</Link>
                    </Button>
                </div>
            </div>
        </Container>
    );
}

export default Navbar;
