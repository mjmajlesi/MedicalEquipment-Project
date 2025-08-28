import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IProducts } from "./Products";

export interface IProduct {
  id? : number;
  products : IProducts[];
}

async function Product({id = 0 , products} : IProduct) {

  return (
    <>
      {products.map(
        (product) =>
          product.id >= id && (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div
                className="relative w-[280px] sm:w-[350px] h-[450px] sm:h-[500px] lg:h-[500px] xl:w-[400px] rounded-[22px] bg-[#f2f2f7] px-2.5 pt-2.5 shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 hover:shadow-gray-500/50 cursor-pointer">
                <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                priority
                className="sm:w-[330px] w-[260px] sm:h-[330px] h-[300px] lg:h-[350px] object-cover rounded-[12px]"
              />
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-gray-800 text-[20px] lg:text-[24px] mt-5 line-clamp-1">
                  {product.title}
                </h3>
                <span className="line-clamp-2 text-[14px] text-black opacity-60 ">
                  {product.description}
                </span>
              </div>
            </div>
            </Link>
          )
      )}
    </>
  );
}

export default Product;
