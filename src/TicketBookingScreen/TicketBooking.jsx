import React, { useCallback, useContext, useEffect, useState } from "react";
import D2 from "../utils/D2";
import D3 from "../utils/D3";
import Imax3D from "../utils/imax3D";
import Imax2D from "../utils/imax2D";
import IconScreen from "../IconScreen";
import { Link, useParams } from "react-router-dom";
import "./TicketBooking.css";
import TicketBookingNav from "./TicketBookingNav";
import TicketStatus from "./TicketStatus";
import { click } from "@testing-library/user-event/dist/click";
import DynamicPopup from "../Confirm";
import { SelectedSeatsDetailContext } from "../context/useContext";
const TicketBooking = () => {
  const { selectedSeatsContext, setSelectedSeatsContext } = useContext(
    SelectedSeatsDetailContext
  );

  const { movieType, movieId, movieLang } = useParams();
  const [cinemaList, setCinemaList] = useState({});
  const [updatedList, setUpdatedList] = useState(cinemaList);
  const [seatClicked, setSeatClicked] = useState(false);
  const [selectedSeatCount, setSelectedSeatCount] = useState(0);
  const [buttonYes, setButtonYes] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [numberOfSeatsSelected, setNumberOfSeatsSelected] = useState(0);
  const [tenSeatsSelected, setTenSeatsSelected] = useState(false);
  const [showOnly10SeatsAllowed, setShowOnly10SeatsAllowed] = useState(false);

  useEffect(() => {
    if (numberOfSeatsSelected >= 20) {
      setTenSeatsSelected(true);
      setIsMouseDown(false);
      setShowOnly10SeatsAllowed(true);
    } else {
      setTenSeatsSelected(false);
      setShowOnly10SeatsAllowed(false);
    }
  }, [numberOfSeatsSelected]);
  useEffect(() => {
    setCinemaList(
      movieType === "2D"
        ? D2
        : movieType === "3D"
        ? D3
        : movieType === "IMAX 3D"
        ? Imax3D
        : movieType === "IMAX 2D"
        ? Imax2D
        : ""
    );

    setUpdatedList(
      movieType === "2D"
        ? D2
        : movieType === "3D"
        ? D3
        : movieType === "IMAX 3D"
        ? Imax3D
        : movieType === "IMAX 2D"
        ? Imax2D
        : ""
    );
  }, [setUpdatedList, updatedList, cinemaList]);

  const getSelectedSeatDetails = useCallback(() => {
    const selectedSeats = [];
    Object.keys(updatedList).forEach((item) => {
      Object.keys(updatedList[item]).forEach((item2) => {
        if (updatedList[item][item2]["isSeatBooked"] === "setSelected") {
          selectedSeats.push({ row: item, seat: item2 });
        }
      });
    });
    return selectedSeats;
  }, [updatedList]);

  useEffect(() => {
    if (buttonYes) {
      const selectedSeats = getSelectedSeatDetails();
      const updatedListClick = { ...cinemaList };
      selectedSeats.forEach((item) => {
        updatedListClick[item.row][item.seat]["isSeatBooked"] = "Booked";
      });
      setUpdatedList(updatedListClick);
      setSeatClicked(false);
      setButtonYes(false); // Reset buttonYes after handling
    }
  }, [buttonYes, getSelectedSeatDetails]);

  const handleClick = (row, seat, buttonElement) => {
    setSelectedSeatsContext((prev) => {
      // Find if the row already exists
      const rowIndex = prev.findIndex((item) => item.row === row);
      if (rowIndex !== -1) {
        // Row exists, update the seats
        const updatedPrev = [...prev];
        const existingRow = updatedPrev[rowIndex];
        // Add new seat to the existing row if it's not already there
        if (!existingRow.seats.includes(seat)) {
          existingRow.seats = [...existingRow.seats, seat];
        }
        return updatedPrev;
      } else {
        // Row does not exist, add a new row with the seat
        return [...prev, { row, seats: [seat] }];
      }
    });

    setSeatClicked(true);
    setNumberOfSeatsSelected(numberOfSeatsSelected + 1);
    const updatedListClick = { ...cinemaList };
    if (updatedListClick[row][seat]["isSeatBooked"] === "setSelected") {
      updatedListClick[row][seat]["isSeatBooked"] = "N/A";
      setUpdatedList(updatedListClick);
      setSelectedSeatCount((prevCount) => prevCount - 1);
      if (selectedSeatCount === 1) {
        setSeatClicked(false);
      }
      setNumberOfSeatsSelected(numberOfSeatsSelected - 1);
      return;
    } else {
      updatedListClick[row][seat]["isSeatBooked"] = "setSelected";
      setUpdatedList(updatedListClick);
      setSelectedSeatCount((prevCount) => prevCount + 1);
    }
  };

  const handleCancel = () => {
    const selectedSeats = getSelectedSeatDetails();
    const updatedListClick = { ...cinemaList };
    selectedSeats.forEach((item) => {
      updatedList[item.row][item.seat]["isSeatBooked"] = "N/A";
      setUpdatedList(updatedListClick);
      setSeatClicked(false);
    });
    setSeatClicked(false);
    setTenSeatsSelected(false);
    setNumberOfSeatsSelected(0);
  };

  const confirmBooking = () => {
    setIsModelOpen(true);
  };

  const handleMouseUp = () => {
    console.log("mouse enter and leave");
    setIsMouseDown(false);
  };

  const handleMouseDown = (row, seat) => {
    setIsMouseDown(true);
    handleClick(row, seat);
  };

  const handleMouseEnter = (row, seat) => {
    if (isMouseDown) {
      // console.log(`Row: ${row}, Seat: ${seat}`);
      handleClick(row, seat);
    }
  };

  const handleTouchStart = (row, seat) => {
    handleClick(row, seat);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];

    const element = document.elementFromPoint(touch.clientX, touch.clientY);

    if (element) {
      const row = element.getAttribute("data-row");

      const seat = element.getAttribute("data-seat");

      if (row && seat) {
        handleClick(row, seat);
      }
    }
  };

  const handleTouchEnd = (row, seat) => {
    handleClick(row, seat);
  };

  return Object.keys(cinemaList).length > 0 ? (
    <div className="ticketBookingMainContainer" onMouseUp={handleMouseUp}>
      {showOnly10SeatsAllowed ? (
        <DynamicPopup
          setShowOnly10SeatsAllowed={setShowOnly10SeatsAllowed}
          title={"You can only select 20 seats at a time"}
        />
      ) : (
        ""
      )}
      <TicketBookingNav numberOfSeatsSelected={numberOfSeatsSelected} />
      <div className="heading">
        <div className="showFeature setHighlighted">
          Right click & hover to select multiple seats
        </div>
      </div>
      {seatClicked ? (
        <div className="buttons">
          <div>
            <Link
              className="confirmBookingLink"
              to={`/movie/${movieId}/${movieLang}/${movieType}/booking-summary`}
            >
              <button onClick={confirmBooking}>Confirm booking</button>
            </Link>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      ) : null}

      <div className="seatsContainer">
        {Object.keys(updatedList).map((item) => {
          return (
            <div className="rowContainer" key={item}>
              <div className="columnRowNumber">{item}</div>
              {Object.keys(updatedList[item]).map((item2, index) => {
                return (
                  <div
                    className={`rows ${
                      updatedList[item][item2].isSeatBooked === "setSelected" &&
                      numberOfSeatsSelected !== 0
                        ? "setSelected "
                        : ""
                    } ${
                      updatedList[item][item2].isSeatBooked === "Booked"
                        ? "booked"
                        : ""
                    }`}
                    style={{
                      transition:
                        "background-color blue 0.3s, border-color blue 0.3s",
                      pointerEvents: tenSeatsSelected ? "none" : "",
                    }}
                    onMouseDown={() => handleMouseDown(item, item2)}
                    onMouseEnter={() => handleMouseEnter(item, item2)}
                    onTouchStart={() => handleTouchStart(item, item2)}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={() => handleTouchEnd(item, item2)}
                    data-row={item}
                    data-seat={item2}
                    key={index}
                  >
                    {index}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className={`screenImage ${seatClicked ? "selectPopup" : ""}`}>
        <IconScreen
          style={{
            fill: "rgba(0, 0, 0, 0.6)",
            backgroundColor: "#f0f0f0",
            padding: "5px",
          }}
        />
      </div>
      <TicketStatus />
    </div>
  ) : (
    ""
  );
};

export default TicketBooking;
