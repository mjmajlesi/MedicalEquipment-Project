import Container from "@/Components/Container";
import { IProducts } from "@/Components/Product/Products";
import Image from "next/image";
import React from "react";
import { apiUrl, fetchJson } from "@/lib/api";

interface Iparams {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[]>>;
}

async function ProductPage(props: Iparams) {
  const { id } = await props.params;
<<<<<<< HEAD
  const res = await fetch(
    `https://forooghteb.ir/backend/api/v1/products_detail/product-${id}`
  );
  if (!res.ok) {
    console.log(res);
=======
  let data: IProducts;

  try {
    data = await fetchJson<IProducts>(
      apiUrl(`products_detail/${id}/`),
      { cache: "no-store" }
    );
  } catch {
>>>>>>> e7dcd91 (fix local development setup and frontend-backend integration)
    return (
      <div className="h-screen flex items-center justify-center w-full">
        <h1 className="text-2xl font-semibold">
          اوه انگار مشکلی پیش امده و محصول انتخابی شما در سایت وجود نداره!
        </h1>
      </div>
    );
  }

  return (
    <>
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 h-screen w-[90%]">
          <div className="max-w-[500px] p-2 bg-[#f5f5f5] lg:w-1/2 rounded-3xl">
            <Image
              src={data.image}
              alt={data.title}
              width={350}
              height={350}
              className="md:w-[500px] w-[300px] h-[350px] md:h-[500px] object-cover rounded-[32px]"
            />
          </div>
          <div className="flex flex-col items-start gap-6 bg-[#f5f5f5] py-10 px-10 rounded-3xl w-full  ">
            <h3 className="font-bold text-[40px] mt-5 line-clamp-1">
              {data.title}
            </h3>
            <span className="bg-[#3A3A41] h-[2px] w-full"></span>

            <p className="text-[16px] md:text-xl font-medium">{data.description}</p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProductPage;
