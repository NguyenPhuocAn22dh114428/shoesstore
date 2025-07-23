import React from "react";

const ProductCard = ({ imageUrl, name, price }) => {
  const backendUrl = "http://localhost:5235";
  return (
    <div
      className="flex flex-1 flex-col 
    w-full max-sm:w-full cursor-pointer"
    >
      <div className="flex justify-center items-center bg-gray-100">
        <img
          src={`${backendUrl}${imageUrl}`}
          alt={name}
          className="w-[280px] h-[280px]"
          id="image-product"
        />
      </div>
      <div
        className="mt-8 flex justify-start
        gap-2.5"
      >
        <p
          className="font-montserrat
        text-l leading-normal text-slate-gray"
        >
          (4.5)
        </p>
      </div>
      <h3
        className="mt-2 text-xl leading-normal
      font-semibold font-semibol"
      >
        {name}
      </h3>
      <p
        className="mt-2 font-semibold font-montserrat
      text-coral-red text-xl leading-normal"
      >
        {price}
      </p>
    </div>
  );
};

export default ProductCard;
