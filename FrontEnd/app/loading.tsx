import Image from "next/image";
import React from "react";
import logo from "../public/LogoWeb.jpg";

function loading() {
  return (
    <div
      className="flex h-screen items-center justify-center bg-transparent transition-opacity duration-700 ease-out"
    >
      <Image
        className={`rounded-2xl transition-transform duration-700 ease-out`}
        width={250}
        height={250}
        src={logo}
        alt="Logo"
        priority
      />
    </div>
  );
}

export default loading;
