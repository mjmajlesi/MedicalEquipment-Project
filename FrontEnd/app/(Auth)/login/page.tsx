"use client";
import Button from "@/Components/buttuns";
import Container from "@/Components/Container";
import Link from "next/link";
import React, { useState } from "react";

function Login() {
    const [Email, SetEmail] = useState<string>();
    const [Password, SetPassword] = useState<string>();
    const [Error, SetError] = useState<string | null>(null);
    console.log(Email);
    console.log(Password);

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
        const data = await fetch("https://httpbin.org/post", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: Email, password: Password }),
        });
        const result = await data.json();
        console.log(result);

        result.token && localStorage.setItem("token", result.token);
    };

    return (
        <Container>
            <div className="flex items-center justify-center mt-6">
                <div className="bg-gray-900 border-[2px] border-blue-900 rounded-2xl hover:text-[#7FB2F3] transition-all duration-200 flex flex-col w-full mx-6 md:w-2/3 xl:w-1/3 xl:mx-1 p-2 ">
                    <div className=" flex items-center space-y-4 xl:py-16 xl:px-12 py-8 px-6 font-semibold text-amber-50 flex-col gap-2">
                        <span className="font-semibold text-3xl ">
                            صفحه ورود
                        </span>
                        <input
                            type="email"
                            placeholder="ایمیل"
                            name="Email"
                            onChange={(e) => SetEmail(e.target.value)}
                            required
                            className="w-full p-2 bg-blue-900 overflow-x-auto whitespace-nowrap rounded-xl border border-gray-700 focus:border-blue-700 text-[#7FB2F3] transition-all duration-200"
                        />
                        <input
                            type="password"
                            placeholder="رمز عبور"
                            required
                            name="Password"
                            onChange={(e) => SetPassword(e.target.value)}
                            className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-800 text-[#7FB2F3] transition-all duration-200"
                        />
                        <Button
                            className="p-2 bg-gradient-to-r from-[#023981] to-[#7FB2F3] rounded-md w-full"
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
                                className="font-semibold text-[#7FB2F3] hover:text-blue-700 transition-all duration-200 mx-2"
                                href={"./register"}
                            >
                                ثبت نام
                            </Link>
                        </p>
                    </div>
                </div>
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
