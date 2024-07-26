import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const AnimationPopup = () => {
  const { width, height } = useWindowSize();
  const confettiProps = {
    width: width,
    height: height,
    gravity: 0.5, // Increase this value to speed up the fall of the confetti
    numberOfPieces: 500, // Increase this value for more confetti pieces
    wind: 0.01, // Adjust this value for horizontal movement
  };

  return <Confetti {...confettiProps} />;
};

export default AnimationPopup;
