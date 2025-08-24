import React from "react";
import Container from "../Container";
import Product from "./Product";
import Link from "next/link";
import AnimateDivs from "../animation/animateDivs";
import Button from "../buttuns";
import ScrollDivAnime from "../animation/ScrollDivAnime";
import SwiperProducts from "./SwiperProducts";
import { GoArrowLeft } from "react-icons/go";

export interface IProducts {
  id: number;
  title: string;
  description: string;
  image: string;
};

async function Products() {
  const res = await fetch("https://medicalequipment-project.onrender.com/api/v1/products_detail");
  const data = await res.json();

  return (
    <div id="Products">
      <Container>
        <AnimateDivs
          duration={1}
          delay={0}
          y={5}
          className="flex flex-col items-center md:justify-center gap-8"
        >
          <ScrollDivAnime
            text="محصولات"
            widthLeft={1}
            widthRight={1}
            className="font-bold text-[30px] md:text-[36px] lg:text-[48px]"
          />
          <div className="flex flex-col items-center gap-6 md:gap-6 md:grid md:grid-cols-2 md:grid-rows-2 xl:hidden">
            <Product id={4} products={data} />
          </div>
          <div className="not-xl:hidden flex flex-col gap-2">
            <Link className="self-end cursor-pointer hover:scale-103 transition duration-200 flex items-center gap-2 text-theme-text font-semibold" href={"/products"}>
            <span className="border-b-2">مشاهده محصولات</span>
            <GoArrowLeft size={22} />
            </Link>
            <SwiperProducts products={data} />
          </div>
            <Button className="px-6 py-4 rounded-xl text-[18px] font-semibold bg-[#51BCBF] text-white shadow-lg hover:bg-[#3a9b9b] transition lg:hidden">
              <Link href={"/products"}>مشاهده همه محصولات</Link>
            </Button>
        </AnimateDivs>
      </Container>
    </div>
  );
}

export default Products;
