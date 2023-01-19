import * as React from "react";

const CloseIcon = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 12 12"
    fill="#FFF"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transition: "fill .5s ease 0s",
    }}
    {...props}
  >
    <path d="M9.536 10.95 6 7.414 2.464 10.95a1.003 1.003 0 0 1-1.414 0 1.003 1.003 0 0 1 0-1.414L4.586 6 1.05 2.465a1.003 1.003 0 0 1 0-1.415 1.003 1.003 0 0 1 1.414 0L6 4.586 9.536 1.05a1.003 1.003 0 0 1 1.414 0 1.003 1.003 0 0 1 0 1.415L7.414 6l3.536 3.536a1.003 1.003 0 0 1 0 1.414 1.003 1.003 0 0 1-1.414 0Z" />
  </svg>
);

export default CloseIcon;
