import * as React from "react";

const SearchIcon = (props) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 23 23"
    fill="#FFF"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transition: "fill .5s ease 0s",
    }}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.668 14.666h-1.054l-.373-.36a8.667 8.667 0 0 0 1.973-7.12C16.587 3.48 13.494.52 9.761.067A8.673 8.673 0 0 0 .068 9.76c.453 3.733 3.413 6.827 7.12 7.453a8.667 8.667 0 0 0 7.12-1.973l.36.373v1.053l5.666 5.667c.547.547 1.44.547 1.987 0a1.408 1.408 0 0 0 0-1.986l-5.654-5.68Zm-8 0c-3.32 0-6-2.68-6-6s2.68-6 6-6 6 2.68 6 6-2.68 6-6 6Z"
    />
  </svg>
);

export default SearchIcon;
