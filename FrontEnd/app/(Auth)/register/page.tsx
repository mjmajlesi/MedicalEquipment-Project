"use client";
import Button from "@/Components/buttuns";
import Container from "@/Components/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Pattern from "../../../public/pattern-c.svg";

function Register() {
  const [Username, SetUsername] = useState<string>();
  const [Email, SetEmail] = useState<string>();
  const [Password, SetPassword] = useState<string>();
  const [Confirm, SetConfirm] = useState<string>();
  const [Error, SetError] = useState<string | null>(null);

  const LoginUser = async () => {
    /* Controls errors */
    if (!Email || !Password || !Username) {
      SetError("لطفا نام کاربری و ایمیل و رمز عبور خود را وارد کنید.");
      return;
    }
    if (!Email.includes("@gmail.com")) {
      SetError("لطفا ایمیل معتبر وارد کنید.");
      return;
    }
    if (Password?.length < 4) {
      SetError("رمز عبور باید حداقل ۴ کاراکتر باشد");
      return;
    }
    if (Password !== Confirm) {
      SetError("اوه! رمز عبور با تایید رمز عبور یکسان نیستند!");
      return;
    }
    /* Fetch Users */
    const data = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: Username,
        email: Email,
        password: Password,
      }),
    });
    const result = await data.json();
    console.log(result);

    result.token
      ? localStorage.setItem("token", result.token)
      : SetError(result.message || "مشکلی پیش آمده");
  };
  return (
    <Container>
      <div className="flex items-center justify-around h-screen">
        <div>
          <Image src={Pattern} alt="Pattren" height={700} />
        </div>
        <div className="flex flex-col w-full md:w-2/3 xl:w-1/3 xl:mx-1 p-2 ">
          <span className="font-bold text-3xl text-amber-50 text-center ">
            صفحه ورود
          </span>
          <div className=" flex items-center xl:py-12 xl:px-8 py-8 px-6 flex-col gap-4">
            <input
              type="text"
              placeholder="نام کاربری"
              name="username"
              onChange={(e) => SetUsername(e.target.value)}
              required
              className="w-full p-2 bg-[#f5f5f5] overflow-x-auto h-[66px] whitespace-nowrap rounded-[8px] text-[#212121] transition-all duration-200"
            />
            <input
              type="email"
              placeholder="ایمیل"
              name="Email"
              onChange={(e) => SetEmail(e.target.value)}
              required
              className="w-full p-2 bg-[#f5f5f5] overflow-x-auto h-[66px] whitespace-nowrap rounded-[8px] text-[#212121] transition-all duration-200"
            />
            <input
              type="password"
              placeholder="رمز عبور"
              required
              name="Password"
              onChange={(e) => SetPassword(e.target.value)}
              className="w-full p-2 bg-[#f5f5f5] overflow-x-auto h-[66px] whitespace-nowrap rounded-[8px] text-[#212121] transition-all duration-200"
            />
            <input
              type="password"
              placeholder="تایید رمز عبور"
              required
              name="ConfirmPassword"
              onChange={(e) => SetConfirm(e.target.value)}
              className="w-full p-2 bg-[#f5f5f5] overflow-x-auto h-[66px] whitespace-nowrap rounded-[8px] text-[#212121] transition-all duration-200"
            />
            <Button
              className="p-2 bg-[#2f3538] rounded-[8px] h-[55px] w-full"
              variant="login"
              type="submit"
              onClick={LoginUser}
            >
              ورود
            </Button>
            {Error && (
              <div className="w-full bg-red-700 border border-red-500 text-red-100 px-4 py-2 rounded-2xl mt-2 text-center">
                {Error}
              </div>
            )}
            <p className="p-2">
              قبلا ثبت نام کردی؟
              <Link
                className="font-semibold  text-white hover:text-[d8d5d5] transition-all duration-200 mx-2"
                href={"./login"}
              >
                ورود
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Register;
