"use client";
import Button from "@/Components/buttuns";
import Container from "@/Components/Container";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import Pattern from "../../../public/Pattern.png";
import AnimateDivs from "@/Components/animation/animateDivs";
import { AppContext } from "@/Context/AppContext";

export interface IApi {
  message : string
  token : string
  refresh : string
  username : string
  error : string
}

function Login() {
  const {SetLogin , SetIsLogin} = useContext(AppContext);

  const [Email, SetEmail] = useState<string>();
  const [Password, SetPassword] = useState<string>();
  const [Error, SetError] = useState<string | null>(null);
  const router = useRouter();

  const LoginUser = async () => {
    /* Controls errors */
    if (!Email || !Password) {
      SetError("لطفا ایمیل و رمز عبور خود را وارد کنید.");
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
    /* Fetch Users */
    const data = await fetch("https://medicalequipment-project.onrender.com/api/v1/login/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: Email, password: Password }),
    });
    const result : IApi = await data.json();

    if (result.token && result.refresh) {
      console.log(result); // for test
      localStorage.setItem("token", result.token);
      localStorage.setItem("refresh", result.refresh);
      localStorage.setItem("username", result.username);
      SetLogin(result.username);
      SetIsLogin(true);
      router.push("/");
    } else {
      SetError(result.error);
    }
  };

  return (
    <Container>
      <div className="flex items-center justify-around h-screen">
        <AnimateDivs className="" y={20} duration={1.5}>
          <Image src={Pattern} alt="Pattren" height={500} />
        </AnimateDivs>
        <AnimateDivs
          y={20}
          duration={1.5}
          className="flex flex-col w-full md:w-5/12 xl:mx-1 p-2 "
        >
          <span className="font-bold text-3xl text-amber-50 text-center ">
            صفحه ورود
          </span>
          <div className=" flex items-center md:py-12 xl:px-8 py-8 px-6 flex-col gap-4">
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
              هنوز ثبت نام نکردی؟
              <Link
                className="font-semibold text-white hover:text-[d8d5d5] transition-all duration-200 mx-2"
                href={"./register"}
              >
                ثبت نام
              </Link>
            </p>
          </div>
        </AnimateDivs>
      </div>
    </Container>
  );

  /*
      {
        "message": "Login successful",
        "token": "eyJhbGciOiJIUzI1NiIs..."
      }
    */
}

export default Login;
