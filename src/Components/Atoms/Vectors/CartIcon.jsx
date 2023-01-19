import * as React from "react";

const CartIcon = (props) => (
  <svg
    viewBox="0 0 16 21"
    fill="#FFF"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transition: "fill .5s ease 0s",
    }}
    className="w-[1.625rem] h-[1.625rem] lg:w-5 lg:h-5"
    {...props}
  >
    <path d="M14 4.5h-2c0-2.21-1.79-4-4-4s-4 1.79-4 4H2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2Zm-6-2c1.1 0 2 .9 2 2H6c0-1.1.9-2 2-2Zm6 16H2v-12h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v12Z" />
  </svg>
);

export default CartIcon;
