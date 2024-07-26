import React from "react";

const DynamicPopup = ({ setShowOnly10SeatsAllowed, title }) => {
  return (
    <div className="confimContainer">
      <div className="insideContainer">
        <h1>{title}</h1>
        <div className="buttons2">
          <div
            onClick={() => {
              setShowOnly10SeatsAllowed(false);
            }}
          >
            Okay
          </div>
        </div>
      </div>
      <div
        className="crossBtn"
        onClick={() => setShowOnly10SeatsAllowed(false)}
      >
        ✖️
      </div>
    </div>
  );
};

export default DynamicPopup;
