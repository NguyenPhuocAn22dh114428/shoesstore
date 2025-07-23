import React from "react";
import { star } from "../assets/icons";
import gsap from "gsap";
import { useRef } from "react";

const PopularProductCard = ({ imageUrl, name, price }) => {
  const backendUrl = "http://localhost:5235";
  const imageRef = useRef();
  const handleMouseEnter = () => {
    gsap.to(imageRef.current, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  return (
    <div
      className="flex flex-1 flex-col 
    w-full max-sm:w-full cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-center items-center bg-gray-100">
        <img
          ref={imageRef}
          src={`${backendUrl}${imageUrl}`}
          alt={name}
          className="w-[280px] h-[280px]"
        />
      </div>
      <div
        className="mt-8 flex justify-start
        gap-2.5"
      >
        <img src={star} alt="rating" width={24} height={24} />
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

export default PopularProductCard;
