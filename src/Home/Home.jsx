import React from "react";
import { movieData } from "../moviesData";
import "./Home.css";
import { Link } from "react-router-dom";
import HomeShimmer from "./HomeShimmer";

const Home = () => {
  return movieData ? (
    <div className="homeMainContainer">
      <div className="homeWrapper">
        <h1>Recommended Movies</h1>
      </div>

      <div className="moviesContainer">
        {movieData.map((item) => {
          const { id, name, movieType, poster } = item;
          return (
            <div key={id} className="movieContainer">
              <Link className="link" to={`/movie/${id}`}>
                <div className="moviePoster">
                  <img src={poster} alt={name} />
                </div>
                <div className="movieType">
                  <p>{name}</p>
                  <span>{movieType}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <HomeShimmer />
  );
};

export default Home;
