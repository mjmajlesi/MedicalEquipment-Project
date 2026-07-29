import Container from "@/Components/Container";
import Product from "@/Components/Product/Product";
import React from "react";
import { IProducts } from "@/Components/Product/Products";
import { apiUrl, fetchJson } from "@/lib/api";

async function page() {
<<<<<<< HEAD
  const res = await fetch("https://forooghteb.ir/backend/api/v1/products_detail");
  const data = await res.json();
=======
  const data = await fetchJson<IProducts[]>(
    apiUrl("products_detail/"),
    { cache: "no-store" }
  );
>>>>>>> e7dcd91 (fix local development setup and frontend-backend integration)
  return (
    <>
      <Container>
        <div className="flex flex-col items-center gap-8 my-8 md:grid md:grid-cols-2 md:grid-rows-3 xl:grid-cols-4 xl:grid-rows-2 xl:gap-12">
          <Product products={data} />
        </div>
      </Container>  
    </>
  );
}

export default page;
