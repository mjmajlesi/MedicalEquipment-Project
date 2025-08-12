import React from "react";
import Container from "../Container";
import Button from "../buttuns";
import { FaInstagram } from "react-icons/fa";
import { Map } from "../DynamicImport";

function Footer() {
  return (
    <Container>
        <div className="footerTop flex items-end justify-between">
          <div className="Search w-full not-md:px-4 lg:w-[450px] flex items-center gap-4 my-8">
            <input
              type="text"
              placeholder="جستجو"
              suppressHydrationWarning
              name="Search"
              className="text-amber-50 w-full bg-slate-600 rounded-xl p-3 h-10  focus:outline-none focus:outline-blue-800"
            />
            <Button variant="login" className="px-3 rounded-xl bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] text-amber-50">جستجو</Button>
          </div>
          <div className="footerMapContainer h-[200px] md:w-[200px] xl:w-[500px] not-md:hidden border-2 my-8 ">
            <Map />
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between my-5 ">
          <span className="text-[#e6dede] lg:text-base text-[12px] ">تمامی حقوق متعلق به شرکت فروغ طب روناک سینا میباشد</span>
          {/* <span className="not-md:hidden">طراحی شده توسط محمد جواد مجلسی</span> */}
          <div className="media">
            <a href="#" target="_blank"><FaInstagram size={30} /></a>
          </div>
        </div>
    </Container>
  );
}

export default Footer;
