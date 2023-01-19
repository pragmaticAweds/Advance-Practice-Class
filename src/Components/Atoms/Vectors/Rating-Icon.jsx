import * as React from "react";

const RatingIcon = (props) => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 19 18"
    xmlns="http://www.w3.org/2000/svg"
    fill="#FFF"
    style={{
      transition: "fill .5s ease 0s",
    }}
    {...props}
  >
    <path d="m9.5 0 2.904 5.503 6.131 1.061-4.337 4.463.886 6.159L9.5 14.44l-5.584 2.746.886-6.16L.465 6.565l6.131-1.06L9.5 0Z" />
  </svg>
);

export default RatingIcon;
