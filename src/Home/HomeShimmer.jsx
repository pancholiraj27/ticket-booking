import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "./Home.css";
import "./HomeShimmer.css";

const HomeShimmer = () => {
  const dummyLength = Array(9).fill("");
  return (
    <div className="homeMainContainer ">
      <div className="homeWrapper">
        <h1>Recommended Movies</h1>
      </div>

      <div className="moviesContainer">
        {dummyLength.map((item, index) => {
          return (
            <div key={index} className="movieContainer movieContainerShimmer">
              <Link className="link" to={`/movie/`}>
                <div className="moviePoster">
                  <img src="/" alt="" />
                </div>
                <div className="movieType">
                  <p></p>
                  <span></span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeShimmer;
