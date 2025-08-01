import React from "react";
import Container from "./Container";
import AnimateDivs from "./animation/animateDivs";
import Product from "./Product";
import Button from "./buttuns";
import Link from "next/link";

function Products() {
  return (
    <div id="Products">
      <Container>
        <AnimateDivs
          duration={1.5}
          delay={0.1}
          y={10}
          className="min-h-screen overflow-visible flex flex-col items-center md:justify-center gap-8 lg:my-12"
        >
          <div className="my-0 flex items-center gap-8 w-full lg:w-2/3 mot-md:mx-4">
            <h1 className="bg-clip-text bg-gradient-to-r text-transparent from-[#023981] to-[#7FB2F3] w-[200px] font-bold text-[36px] lg:text-[48px]">
              محصولات
            </h1>
            <span className="bg-[#3A3A41] h-[2px] w-full"></span>
          </div>
          <div className="flex flex-col items-center gap-2 md:grid md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 xl:gap-12">
            <Product />
          </div>
          <div>
            <Button
              variant="normal"
              className="px-2.5 py-5 bg-gradient-to-br rounded-xl from-[#589AF6] to-[#275ADD]"
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
