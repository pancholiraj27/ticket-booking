import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { movieData } from "../moviesData";
import MovieImg from "./MovieImg";
import MovieDetails from "./MovieDetails";
import AboutTheMovie from "./AboutTheMovie";
import MovieTypePopup from "./MovieTypePopup";
import MovieDetailPageShimmer from "./MovieDetailsPageShimmer";
import "./movieDetails.css";

const MovieDetailPage = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieId } = useParams();
  const [movieTypeModal, setMovieTypeModal] = useState(false);
  useEffect(() => {
    const data = movieData.filter((item) => item.id === movieId);
    setMovieDetails(data);
  }, []);
  if (movieDetails.length) {
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
        <div className="movieDetailPage">
          <div className="banner">
            <img src={movieThumbnail} alt="banner" />
            <div className="bannerCover"></div>
          </div>
          <div className="details">
            <MovieImg img={poster} name={name} />
            <MovieDetails
              setMovieTypeModal={setMovieTypeModal}
              movieDetails={movieDetails}
            />
          </div>
          <AboutTheMovie atm={atm} />
          {movieTypeModal ? (
            <MovieTypePopup
              setMovieTypeModal={setMovieTypeModal}
              movieTypeModal={movieTypeModal}
              showIn={showIn}
              language={language}
              movieName={name}
              id={id}
            />
          ) : null}
        </div>
      </>
    );
  } else return <MovieDetailPageShimmer />;
};

export default MovieDetailPage;
