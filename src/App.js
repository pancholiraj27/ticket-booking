import { useState, useEffect, useCallback } from "react";
import "./App.css";
import cinemaList from "./data";
import IconScreen from "./IconScreen";
import Confirm from "./Confirm";

function App() {
  const [updatedList, setUpdatedList] = useState(cinemaList);
  const [seatClicked, setSeatClicked] = useState(false);
  const [selectedSeatCount, setSelectedSeatCount] = useState(0);
  const [buttonYes, setButtonYes] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

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
    setSeatClicked(true);
    const updatedListClick = { ...cinemaList };
    if (updatedListClick[row][seat]["isSeatBooked"] === "setSelected") {
      updatedListClick[row][seat]["isSeatBooked"] = "N/A";
      setUpdatedList(updatedListClick);
      setSelectedSeatCount((prevCount) => prevCount - 1);
      if (selectedSeatCount === 1) {
        setSeatClicked(false);
      }
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
      console.log(`Row: ${row}, Seat: ${seat}`);
      handleClick(row, seat);
    }
  };

  return (
    <div onMouseUp={handleMouseUp}>
      {isModelOpen ? (
        <Confirm setIsModelOpen={setIsModelOpen} setButtonYes={setButtonYes} />
      ) : (
        ""
      )}
      <div className="heading">
        <h1>Select your ticket</h1>
        <div className="showFeature booked">Booked</div>
        <div className="showFeature setSelected">Booked</div>
        <div className="showFeature setHighlighted">
          Right click & hover to select multiple seats
        </div>
        <div className="buttons">
          {seatClicked ? (
            <div>
              <button onClick={confirmBooking}>confirm booking</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : null}
        </div>
      </div>

      <div className="seatsContainer">
        {Object.keys(updatedList).map((item) => {
          return (
            <div className="rowContainer">
              <div className="columnRowNumber">{item}</div>
              {Object.keys(updatedList[item]).map((item2, index) => {
                return (
                  <div
                    className={`rows ${
                      updatedList[item][item2].isSeatBooked === "setSelected"
                        ? "setSelected"
                        : ""
                    } ${
                      updatedList[item][item2].isSeatBooked === "Booked"
                        ? "booked"
                        : ""
                    }`}
                    style={{
                      transition:
                        "background-color blue 0.3s, border-color blue 0.3s",
                    }}
                    onMouseDown={() => handleMouseDown(item, item2)}
                    onMouseEnter={() => handleMouseEnter(item, item2)}
                  >
                    {index}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="screenImage">
        <IconScreen
          style={{
            fill: "rgba(0, 0, 0, 0.6)",
            backgroundColor: "#f0f0f0",
            padding: "5px",
          }}
        />
      </div>
    </div>
  );
}

export default App;
