import React from "react";

const BurgerIcon = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      width="12"
      height="12"
      fill="rgb(255, 164, 38)" // Set the color here
    >
      <path d="M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6S15.31 2 12 2zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
      <path d="M18 8h-2V6h-8v2H6c-1.1 0-2 .9-2 2v1h16v-1c0-1.1-.9-2-2-2z" />
      <path d="M18 11H6v2h12v-2z" />
      <path d="M18 14H6v2h12v-2z" />
      <path d="M18 17H6v2h12v-2z" />
    </svg>
  );
};

export default BurgerIcon;
