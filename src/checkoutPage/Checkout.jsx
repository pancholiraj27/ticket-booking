import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SelectedSeatsDetailContext } from "../context/useContext";
import "./Checkout.css";
import ArrowDown from "../utils/ArrowDown";
import AnimationPopup from "../utils/AnimationPopup";
const Checkout = () => {
  const { selectedSeatsContext } = useContext(SelectedSeatsDetailContext);
  const [isConvenience, setIsConvenience] = useState(false);
  const { movieType } = useParams();
  const [showPopup, setShowPopup] = useState(false);

  const dummyPrice = 200;
  const [TicketPrice, setTicketPrice] = useState(200);

  useEffect(() => {
    let total = 0;
    selectedSeatsContext.map((item) => {
      total += dummyPrice * item.seats.length;
      return item; // map requires a return value, though it's not used here
    });
    setTicketPrice(total);
  }, [selectedSeatsContext]);

  return selectedSeatsContext.length ? (
    <div className="checkoutContainerWrapper">
      <div className="checkoutContainer">
        <h1>Booking Summary</h1>
        <div className="checkoutRowsContainerWrapper">
          {selectedSeatsContext.map((item) => {
            return (
              <div className="checkoutRowsContainer">
                <div>
                  <p>{item.row} - </p>
                  {item.seats.map((item) => (
                    <span>{item},</span>
                  ))}
                </div>
                <div className="ticketTotal">
                  RS. {dummyPrice * item.seats.length}
                </div>
              </div>
            );
          })}
          <span className="theater">{movieType}</span>
        </div>

        <div className="convenience">
          <div className="convenienceDiv">
            <span
              className={`arrowDown ${isConvenience ? "arrowUp" : ""}`}
              onClick={() => setIsConvenience(!isConvenience)}
            >
              <ArrowDown />
            </span>
            <span onClick={() => setIsConvenience(!isConvenience)}>
              Convenience fees
            </span>
          </div>
          <div>RS. 100</div>
        </div>
        {isConvenience ? (
          <div className="convenienceDetailContainer">
            <div className="convenienceDetail">
              <span>Base Amount</span>
              <span>Rs. 92.00</span>
            </div>
            <div className="convenienceDetail">
              <span>Integrated GST (IGST) @ 18%</span>
              <span>Rs. 16.56</span>
            </div>
          </div>
        ) : null}
        <div className="subTotal">
          <div className="subTotalDetail">
            <span>Sub total</span>
            <span>Rs. {TicketPrice + 92.0 + 16.56}</span>
          </div>
        </div>
        <div className="checkoutTotal" onClick={() => setShowPopup(true)}>
          <p>Total: Rs. {TicketPrice + 92.0 + 16.56}</p>
        </div>
      </div>
      {showPopup && (
        <>
          <div
            className="popup-overlay"
            onClick={() => {
              setShowPopup(false);
              window.location.href = "/";
            }}
          >
            <div className="popup" onClick={(e) => e.stopPropagation()}>
              <AnimationPopup />
              <h2>Ticket Booked!</h2>
              <p>Your Movie ticket has been booked successfully.</p>
              <button
                onClick={(e) => {
                  e.stopPropagation("/");
                  setShowPopup(false);
                  window.location.href = "/";
                }}
              >
                Book another tickets
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  ) : (
    (window.location.href = "/")
  );
};

export default Checkout;
