import * as React from "react";

const UserIcon = (props) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 16 17"
    fill="#FFF"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transition: "fill .5s ease 0s",
    }}
    {...props}
  >
    <path d="M8 2.4a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2Zm0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H1.9v-1.1c0-.64 3.13-2.1 6.1-2.1ZM8 .5c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm0 9c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4Z" />
  </svg>
);

export default UserIcon;
