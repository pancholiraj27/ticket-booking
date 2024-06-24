import React from "react";

const Confirm = ({ setIsModelOpen, setButtonYes }) => {
  return (
    <div className="confimContainer">
      <h1>Are you sure you want to book the ticket?</h1>
      <div className="buttons2">
        <div
          onClick={() => {
            setButtonYes(true);
            setIsModelOpen(false);
          }}
        >
          Yes
        </div>
        <div
          onClick={() => {
            setButtonYes(false);
            setIsModelOpen(false);
          }}
        >
          No
        </div>
      </div>
    </div>
  );
};

export default Confirm;
