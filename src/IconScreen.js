import React from "react";

const IconScreen = ({ style, ...restProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 260 20"
    width="260px"
    height="20px"
    style={{ ...style, fill: "rgba(0, 0, 0, 0.6)" }}
    {...restProps}
  >
    <use xlinkHref="/icons/seatlayout-icons.svg#icon-screen" />
  </svg>
);

export default IconScreen;
