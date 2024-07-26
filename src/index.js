import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import TicketBooking from "./TicketBookingScreen/TicketBooking";
import Home from "./Home/Home";
import MovieDetailPage from "./movieDetailsPage/MovieDetailPage";
import TicketSelection from "./TicketBookingScreen/TicketSelection";
import NavBar from "./utils/NavBar";
import Checkout from "./checkoutPage/Checkout";
import { ContextProvider, MyProvider } from "./context/useContext";
import Offline from "./Offline";
const AppLayout = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return !isOffline ? (
    <div className="app">
      <NavBar />
      <Outlet />
    </div>
  ) : (
    <Offline />
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/movie/:movieId",
        element: <MovieDetailPage />,
      },
      {
        path: "/movie/:movieId/:movieLang/:movieType",
        element: <TicketSelection />,
      },
      {
        path: "/movie/:movieId/:movieLang/:movieType/booking-summary",
        element: <Checkout />,
      },
    ],
    errorElement: <Home />,
  },
  {
    path: "/movie/:movieId/:movieLang/:movieType/:movieTiming/:theaterName",
    element: <TicketBooking />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);
