"use client";
import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Home, Store, Power } from "lucide-react";
import { AppContext } from "@/Context/AppContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

export default function ProfileMenu() {
  const { Login, Emails, SetLogin, SetIsLogin } = useContext(AppContext);
  const { setTheme, resolvedTheme } = useTheme();
  const [themePersian, SetThemePersian] = useState<string>("روشن");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

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
    SetThemePersian(resolvedTheme === "light" ? "تاریک" : "روشن");
  };

  return (
    <div className="relative">
      <div
        className="rounded-full w-[60px] h-[60px] bg-theme-div text-black-theme cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center justify-center w-full h-full text-[18px] font-semibold">
          {Login[0]}
        </span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-64 bg-gray-900 text-white rounded-xl z-10 shadow-lg p-4"
          >
            <div className="flex flex-col items-center border-b border-gray-700 pb-3">
              <div className="rounded-full w-[60px] h-[60px] bg-theme-div text-black-theme">
                <span className="flex items-center justify-center w-full h-full text-[18px] font-semibold">
                  {Login[0]}
                </span>
              </div>
              <h3 className="mt-2 font-semibold">{Login}</h3>
              <p className="text-gray-400 text-sm">{Emails}</p>
            </div>
            <ul className="mt-3 space-y-2">
              <li className=" hover:bg-gray-800 p-2 rounded-md cursor-pointer">
                <Link href={"/"} className="flex items-center gap-2">
                  <Home size={18} /> خانه
                </Link>
              </li>
              {/* <li className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded-md cursor-pointer">
                <User size={18} /> داشبورد
              </li> */}
              <li className=" hover:bg-gray-800 p-2 rounded-md cursor-pointer">
                <Link href={"/products"} className="flex items-center gap-2">
                  <Store size={18} /> محصولات
                </Link>
              </li>
              <li
                className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded-md cursor-pointer"
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
                <span>حالت {themePersian}</span>
              </li>
            </ul>

            <div
              className="border-t border-gray-700 mt-3 pt-2 flex items-center gap-2 cursor-pointer hover:text-red-400"
              onClick={LoginOut}
            >
              <Power size={18} /> خروج
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
