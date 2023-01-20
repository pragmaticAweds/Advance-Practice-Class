import React from "react";
import Button from "../Atoms/Button";
import LeftArrowIcon from "../Atoms/Vectors/LeftArrowIcon";
import RightArrowIcon from "../Atoms/Vectors/RightArrowIcon";

const ProductHeading = ({
  sectionTitle,
  btnTitle,
  onClick,
  arrowRightClick,
  arrowLeftClick,
}) => {
  return (
    <div className="flex w-full items-center justify-between px-10 py-8">
      <h3 className="text-[1.75rem]">{sectionTitle}</h3>
      <div className="flex gap-x-5">
        <div className="flex gap-x-4">
          <span
            className="h-12 w-12 rounded-full bg-[#fafafa] hover:bg-[#e1e1e1] cursor-pointer grid place-content-center"
            onClick={arrowLeftClick}
          >
            <LeftArrowIcon />
          </span>
          <span
            className="h-12 w-12 rounded-full bg-[#fafafa] grid place-content-center hover:bg-[#e1e1e1] cursor-pointer"
            onClick={arrowRightClick}
          >
            <RightArrowIcon />
          </span>
        </div>
        <Button title={btnTitle} onClick={onClick} />
      </div>
    </div>
  );
};

export default ProductHeading;
