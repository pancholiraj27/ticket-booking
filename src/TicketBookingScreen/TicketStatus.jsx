import React from "react";
import "./TicketStatus.css";
const TicketStatus = () => {
  return (
    <div className="ticketStatusContainer">
      <div className="wrapperTicketStatus">
        <div className="types">
          <span className="empty showStatus"></span>
          <p>Available</p>
        </div>
        <div className="types">
          <span className="selected showStatus"></span>
          <p>Selected</p>
        </div>
        <div className="types">
          <span className="sold showStatus"></span>
          <p>Sold</p>
        </div>
      </div>
    </div>
  );
};

export default TicketStatus;
