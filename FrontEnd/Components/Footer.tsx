import React from "react";
import Container from "./Container";
import Button from "./buttuns";
import { FaInstagram } from "react-icons/fa";
import LeafletMap from "./map";

function Footer() {
  return (
    <Container>
        <div className="footerTop flex items-center justify-between">
          <div className="Search w-[100px] lg:w-[450px] flex items-center gap-4 my-8">
            <input
              type="text"
              placeholder="جستجو"
              name="Search"
              className="text-amber-50 w-full bg-slate-600 rounded-xl p-3 h-10  focus:outline-none focus:outline-blue-800"
            />
            <Button variant="login" className="px-3 rounded-xl bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] text-amber-50">جستجو</Button>
          </div>
          <div className="Map">
          </div>
        </div>
        <hr />
        <div className="flex items-center gap-10 lg:justify-between mt-5 pb-4 ">
          <span className="text-[#e6dede] text-base ">تمامی حقوق متعلق به شرکت فروغ طب روناک سینا میباشد</span>
          {/* <span className="not-md:hidden">طراحی شده توسط محمد جواد مجلسی</span> */}
          <div className="media">
            <a href="#" target="_blank"><FaInstagram size={30} /></a>
          </div>
        </div>
    </Container>
  );
}

export default Footer;
