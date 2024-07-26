import React from "react";

const ArrowIcon = ({ width = "50px", height = "22px", strokeWidth = 8 }) => (
  <svg
    viewBox="0 0 72 72"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
  >
    <path
      d="m46.1964 16.2048-19.3928 19.4603 19.3928 19.4603"
      style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: strokeWidth,
      }}
    />
  </svg>
);

export default ArrowIcon;
