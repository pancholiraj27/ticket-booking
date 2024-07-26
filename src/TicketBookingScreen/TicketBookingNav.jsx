import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { movieData } from "../moviesData";
import "./TicketBookingNav.css";
import BackButtonIcon from "../utils/BackButtonIcon";
const TicketBookingNav = ({numberOfSeatsSelected}) => {
  const { movieId, movieLang, movieType, movieTiming, theaterName } =
    useParams();
  const prevUrl = `/movie/${movieId}/${movieLang}/${movieType}`;
  const movieName = movieData.filter((item) => item.id === movieId);
  return (
    <div className="ticketBookingNav">
      <div className="headingContainer">
        <div className="backLogo">
          <Link to={prevUrl}>
            <BackButtonIcon />
          </Link>
        </div>
        <div className="headingDetails">
          <h1>{movieName[0].name}</h1>
          <span>
            {theaterName} <span className="movieTime">
            | Time: {movieTiming}
            </span>
          </span>
        </div>
      </div>
      <div className="headingOtherDetails">
      <div className="movieTimeMWeb">Time: {movieTiming}</div>
        <div>{numberOfSeatsSelected} Seats Selected</div>
        <Link className="linkCrossBtn" to={prevUrl}>
          <span>✖️</span>
        </Link>
      </div>
    </div>
  );
};

export default TicketBookingNav;
