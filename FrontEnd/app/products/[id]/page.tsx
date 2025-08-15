import Container from "@/Components/Container";
import { IProducts } from "@/Components/Product/Product";
import Image from "next/image";
import React from "react";

interface Iparams {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[]>>;
}

async function ProductPage(props: Iparams) {
  const { id } = await props.params;
  const res = await fetch(
    `https://medicalequipment-project.onrender.com/api/v1/products_detail/product-${id}`
  );
  if (!res.ok) {
    console.log(res);
    return (
      <div className="h-screen flex items-center justify-center w-full">
        <h1 className="text-2xl font-semibold">
          اوه انگار مشکلی پیش امده و محصول انتخابی شما در سایت وجود نداره!
        </h1>
      </div>
    );
  }
  const data: IProducts = await res.json();

  return (
    <>
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-around h-screen">
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <Image
              src={data.image}
              alt={data.title}
              width={350}
              height={350}
              className="w-[350px] h-[350px] object-cover rounded-[32px]"
            />
          </div>
          <div className="flex flex-col items-start gap-6 w-full ">
            <h3 className="font-bold text-[32px] mt-5 line-clamp-1">
              {data.title}
            </h3>
            <span className="bg-[#3A3A41] h-[2px] w-full"></span>

            <p className="text-[16px]">{data.description}</p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProductPage;
