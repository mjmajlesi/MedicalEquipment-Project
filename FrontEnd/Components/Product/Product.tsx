import Image from "next/image";
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
              className="relative w-[280px] sm:w-[350px] h-[480px] sm:h-[500px] lg:h-[570px] rounded-[42px] bg-[#f2f2f7] px-2.5 pt-2.5 shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <Image  
                src={product.image}
                alt={product.title}
                width={260}
                height={260}
                priority
                className="sm:w-[330px] w-[260px] sm:h-[330px] h-[300px] lg:h-[350px] object-cover rounded-[32px]"
              />
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-gray-800 text-[20px] lg:text-[24px] mt-5 line-clamp-1">
                  {product.title}
                </h3>
                <span className="lg:line-clamp-2 text-[14px] text-black opacity-60 line-clamp-1 ">
                  {product.description}
                </span>
                <button className="absolute bottom-4 right-2 left-2 bg-[#000000] px-5 py-2.5 rounded-[80px] text-white font-semibold cursor-pointer hover:scale-102 transition-all duration-300 ">
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
