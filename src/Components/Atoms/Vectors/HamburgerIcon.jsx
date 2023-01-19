import * as React from "react";

const HamburgerIcon = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 16"
    fill="#FFF"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transition: "fill .5s ease 0s",
    }}
    {...props}
  >
    <path d="M1.333 16h21.334C23.4 16 24 15.4 24 14.667c0-.734-.6-1.334-1.333-1.334H1.333c-.733 0-1.333.6-1.333 1.334C0 15.4.6 16 1.333 16Zm0-6.667h21.334C23.4 9.333 24 8.733 24 8s-.6-1.333-1.333-1.333H1.333C.6 6.667 0 7.267 0 8s.6 1.333 1.333 1.333ZM0 1.333c0 .734.6 1.334 1.333 1.334h21.334c.733 0 1.333-.6 1.333-1.334C24 .6 23.4 0 22.667 0H1.333C.6 0 0 .6 0 1.333Z" />
  </svg>
);

export default HamburgerIcon;
