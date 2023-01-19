import * as React from "react";

const RightArrowIcon = (props) => (
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
    <path d="M1 9h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41L8.7.71a.996.996 0 1 0-1.41 1.41L12.17 7H1c-.55 0-1 .45-1 1s.45 1 1 1Z" />
  </svg>
);

export default RightArrowIcon;
