import React from "react";
import Container from "../Container";
import Product from "./Product";
import Link from "next/link";
import AnimateDivs from "../animation/animateDivs";
import Button from "../buttuns";
import ScrollDivAnime from "../animation/ScrollDivAnime";
import SwiperProducts from "./SwiperProducts";

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
          className="flex  flex-col items-center md:justify-center gap-6 lg:gap-10"
        >
          <ScrollDivAnime
            text="محصولات"
            widthLeft={1}
            widthRight={1}
            className="font-bold text-[30px] md:text-[36px] lg:text-[48px]"
          />
          <div className="flex flex-col items-center gap-6 md:gap-6 md:grid md:grid-cols-2 md:grid-rows-3 xl:hidden">
            <Product id={4} products={data} />
          </div>
          <div className="not-xl:hidden">
            <SwiperProducts products={data} />
          </div>
          <div>
            <Button
              variant="normal"
              className="px-2.5 py-5 text-[18px] bg-[#51BCBF] rounded-xl text-black font-semibold"
            >
              <Link href={"/products"}>برای دیدن موارد بیشتر</Link>
            </Button>
          </div>
        </AnimateDivs>
      </Container>
    </div>
  );
}

export default Products;
