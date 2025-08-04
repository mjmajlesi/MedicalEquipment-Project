import Link from "next/link";
import React from "react";

export interface IProducts {
  id: number;
  title: string;
  description: string;
  image: string;
}

async function Product({id} : {id : number}) {
  const res = await fetch("https://medicalequipment-project.onrender.com/api/v1/products_detail");
  const data = await res.json();
  return (
    <>
      {data.map(
        (product: IProducts) =>
          product.id <= id && (
            <div
              key={product.id}
              className="w-[350px] h-[530px] lg:h-[570px] rounded-[42px] bg-[#f2f2f7] px-2.5 pt-2.5"
            >
              <img  
                src="https://medicalequipment-project.onrender.com/media/Angiography_vest_skirt.jpg"
                alt={product.title}
                className="w-[330px] h-[330px] lg:h-[350px] object-cover rounded-[32px]"
              />
              <div className="flex flex-col gap-5">
                <h3 className="font-bold text-black text-[20px] lg:text-[24px] mt-5 line-clamp-1">
                  {product.title}
                </h3>
                <span className="line-clamp-2 text-[14px] text-black opacity-60">
                  {product.description}
                </span>
                <button className="bg-[#e5e5ea] px-5 py-2.5 rounded-[80px] text-black font-semibold cursor-pointer hover:scale-105 transition-all duration-300 ">
                  <Link href={`/products/${product.id}`}>
                    برای اطلاعات بیشتر
                  </Link>
                </button>
              </div>
            </div>
          )
      )}
    </>
  );
}

export default Product;
