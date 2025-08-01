import Link from "next/link";
import React from "react";

export interface IProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export interface Rating {
  rate: number;
  count: number;
}

async function Product() {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();
  return (
    <>
      {data.map(
        (product: IProducts) =>
          product.id <= 6 && (
            <div
              key={product.id}
              className="w-[350px] h-[570px] rounded-[42px] bg-[#f2f2f7] px-2.5 pt-2.5"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-[330px] h-[350px] object-center rounded-[32px]"
              />
              <div className="flex flex-col gap-5">
                <h3 className="font-bold text-black text-[24px] mt-5 line-clamp-1">
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
