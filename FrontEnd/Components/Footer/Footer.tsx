import React from "react";
import Container from "../Container";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footerTop w-full mt-10 bg-theme">
      <Container>
          {/* <div className="Search w-full not-md:hidden not-md:px-4 lg:w-[450px] flex items-center gap-4 my-8">
            <input
              type="text"
              placeholder="جستجو"
              suppressHydrationWarning
              name="Search"
              className="text-amber-50 w-full bg-slate-600 rounded-xl p-3 h-10  focus:outline-none focus:outline-blue-800"
            />
            <Button variant="login" className="px-3 rounded-xl bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] text-amber-50">جستجو</Button>
          </div> */}
          <hr />
          <div className="flex items-center justify-between py-5 ">
            <span className=" font-semibold md:text-base text-[12px] ">
              تمامی حقوق متعلق به شرکت فروغ طب روناک سینا می‌باشد
            </span>
            {/* <span className="not-md:hidden">طراحی شده توسط محمد جواد مجلسی</span> */}
            <div className="media">
              <a href="https://www.instagram.com/foroughteb_medicalcompany/" target="_blank">
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
      </Container>
    </div>
  );
}

export default Footer;
