import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { movieData } from "../moviesData";
// import "./movieDetails.css";
import MovieImg from "./MovieImg";
import MovieDetails from "./MovieDetails";
import AboutTheMovie from "./AboutTheMovie";
import MovieTypePopup from "./MovieTypePopup";
import "./MovieDetailPageShimmer.css";
import MovieDetailsShimmer from "./MovieDetailsShimmer";
const MovieDetailPageShimmer = () => {
  const movieDetails = Array(9).fill(" ");

  return (
    <>
      <div className="movieDetailPage">
        <div className="banner bannerShimmer ">
          <img alt="" />
          <div className="bannerCover"></div>
        </div>
        <div className="details">
          <MovieImg img={""} name="" />
          <MovieDetailsShimmer />
        </div>
        <AboutTheMovie atm={""} />
      </div>
    </>
  );
};

export default MovieDetailPageShimmer;
