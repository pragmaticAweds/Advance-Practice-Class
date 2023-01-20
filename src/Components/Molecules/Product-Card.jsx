import React from "react";

const ProductCard = () => {
  return (
    <div className="w-[90%] h-full text-left">
      <div className="relative bg-[#fafafa] flex items-center justify-center py-[3.75rem] px-10">
        <div className="z-0 h-[18.9375rem] w-[13.5rem] flex flex-col relative">
          <img
            src="/img/product-frame.webp"
            alt="product-frame"
            className="h-full w-full"
          />
          <img
            src="/img/product-1.webp"
            alt="product-1"
            className="absolute top-[0.1875rem] left-[0.1875rem] w-[13.125rem] h-[18.5625rem]"
          />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <span>Sweet Tomato from Mt Vesuvius · Enikő Katalin Eged</span>
        <span>£40 - £170</span>
      </div>
    </div>
  );
};

export default ProductCard;
