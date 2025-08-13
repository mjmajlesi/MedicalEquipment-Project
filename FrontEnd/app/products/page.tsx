import Container from "@/Components/Container";
import Product from "@/Components/Product/Product";
import React from "react";

function page() {
  return (
    <>
      <Container>
        <div className="flex flex-col items-center gap-8 my-8 md:grid md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 xl:gap-12">
          <Product id={10000} />
        </div>
      </Container>
    </>
  );
}

export default page;
