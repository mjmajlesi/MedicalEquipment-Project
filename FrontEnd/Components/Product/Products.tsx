import React from "react";
import Container from "../Container";
import Product from "./Product";
import Link from "next/link";
import AnimateDivs from "../animation/animateDivs";
import Button from "../buttuns";
import ScrollDivAnime from "../animation/ScrollDivAnime";

function Products() {
  return (
    <div id="Products">
      <Container>
        <AnimateDivs
          duration={1}
          delay={0}
          y={5}
          className="flex min-h-screen flex-col items-center md:justify-center gap-6 lg:gap-16"
        >
          <ScrollDivAnime text="محصولات" />
          <div className="hidden md:gap-6 md:grid md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 xl:gap-12">
            <Product id={6} />
          </div>
          <div className="flex flex-col items-center gap-6 md:hidden">
            <Product id={4} />
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
