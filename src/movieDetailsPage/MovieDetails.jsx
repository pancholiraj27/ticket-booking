import React from "react";
import { STAR_ICON } from "../utils/comman";
const MovieDetails = ({ movieDetails, setMovieTypeModal }) => {
  const {
    atm,
    duration,
    id,
    language,
    movieThumbnail,
    movieType,
    name,
    poster,
    ratings,
    releaseDate,
    showIn,
    votes,
  } = movieDetails[0];
  return (
    <>
      <div className="moviePageDetail">
        <h1>{name}</h1>
        <div className="ratings">
          <img src={STAR_ICON} alt="Star" />
          <span>{ratings}</span>
          <span>({votes})</span>
        </div>
        <div className="availableIn">
          <span>{showIn?.join(", ")}</span>
        </div>
        <div className="availableLanguage">
          <span>{language?.join(", ")}</span>
        </div>
        <div className="movieTimeTypeDate">
          <p>
            {duration} ▫️ {movieType} ▫️ {releaseDate}
          </p>
        </div>
        <button onClick={() => setMovieTypeModal(true)}>Book Tickets</button>
      </div>
    </>
  );
};

export default MovieDetails;
