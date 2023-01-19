import * as React from "react";

const LeftArrowIcon = (props) => (
  <svg
    width={13}
    height={13}
    viewBox="0 0 16 16"
    fill="#070707"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transition: "fill .5s ease 0s",
    }}
    {...props}
  >
    <path d="M15 7H3.83l4.88-4.88c.39-.39.39-1.03 0-1.42A.996.996 0 0 0 7.3.7L.71 7.29a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L3.83 9H15c.55 0 1-.45 1-1s-.45-1-1-1Z" />
  </svg>
);

export default LeftArrowIcon;
