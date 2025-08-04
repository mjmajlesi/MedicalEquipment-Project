import Container from "@/Components/Container";
import { IProducts } from "@/Components/Product/Product";
import React from "react";

interface Iparams {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

async function ProductPage(props: Iparams) {
  const { id } = await props.params;
  let data: IProducts | null = null;

  try {
    const res = await fetch(
      `https://medicalequipment-project.onrender.com/api/v1/products_detail/product-${id}`
    );
    data = await res.json();
  } catch (error) {
    console.log("Oh error this : ", error);
  }
  if (!data)
    return (
      <h1>اوه انگار مشکلی پیش امده و محصول انتخابی شما در سایت وجود نداره!</h1>
    );

  return (
    <>
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-around h-screen">
          <div>
            <img
              src="https://medicalequipment-project.onrender.com/media/Angiography_vest_skirt.jpg"
              alt={data.title}
              className="w-[330px] h-[350px] object-cover rounded-[32px]"
            />
          </div>
          <div className="flex flex-col items-start gap-6 ">
            <h3 className="font-bold text-[32px] mt-5 line-clamp-1">
              {data.title}
            </h3>
            <span className="bg-[#3A3A41] h-[2px] w-full"></span>

            <p className="line-clamp-2 text-[16px]">
              {data.description}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProductPage;
