import React from "react";
const MovieImg = ({ img, name }) => {
  return (
    <div className="posterImg">
      <img src={img} alt={name} />
    </div>
  );
};

export default MovieImg;
