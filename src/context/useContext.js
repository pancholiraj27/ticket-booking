// MyContext.js
import React, { createContext, useState } from "react";

const SelectedSeatsDetailContext = createContext();

const ContextProvider = ({ children }) => {
  const [selectedSeatsContext, setSelectedSeatsContext] = useState([]);
  return (
    <SelectedSeatsDetailContext.Provider
      value={{ selectedSeatsContext, setSelectedSeatsContext }}
    >
      {children}
    </SelectedSeatsDetailContext.Provider>
  );
};

export { SelectedSeatsDetailContext, ContextProvider };
