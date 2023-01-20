import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../Molecules/Product-Card";
import ProductHeading from "../../Molecules/Product-Heading";

const ProductSlider = ({ sectionTitle }) => {
  const settings = {
    dots: false,
    swipe: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
  };
  return (
    <div className="flex flex-col w-full py-[3.125rem] min-h-[31.25rem]">
      <ProductHeading sectionTitle={sectionTitle} btnTitle="Shop all" />
      <Slider {...settings}>
        {Array(5)
          .fill("1")
          .map((content, i) => (
            <ProductCard key={content + i} />
          ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
