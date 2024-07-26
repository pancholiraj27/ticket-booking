import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { theaterList } from "../utils/theaterList";
import "./TheaterList.css";
import MobileComponent from "../utils/MobileComponent";
import FoodAndBeveragesIcon from "../utils/FoodAndBeveragesIcon";
import PopcornBucketIcon from "../utils/FoodAndBeveragesIcon";
import BurgerIcon from "../utils/FoodAndBeveragesIcon";
import { movieData } from "../moviesData";

const TicketSelection = () => {
  const { movieLang, movieType, movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [theaterDetail, setTheaterDetail] = useState([]);
  useEffect(() => {
    const list = movieData.filter((movie) => movie.id === movieId);
    setMovieDetail(list);
  }, []);

  return movieDetail.length ? (
    <div className="theaterContainer">
      <div className="movieDetailLang">
        <div className="movieDetailLangWrapper">
          <h1>
            {movieDetail[0].name} - {movieLang}
          </h1>
          <div className="movieDetailType">
            {movieDetail[0].movieType.split(",").map((item) => (
              <span>{item}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="theaterListContainer">
        {Object.keys(theaterList[movieType]).map((item) => {
          const { name, timings, others, cancellable } =
            theaterList[movieType][item];
          return (
            <div className="theaterDetail">
              <div className="theaterNameAndMore">
                <h5>{name}</h5>
                <div className="someMoreDetails">
                  {others?.map((item) => (
                    <span>
                      {item == "M-Ticket" ? (
                        <MobileComponent />
                      ) : (
                        <BurgerIcon />
                      )}{" "}
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="theaterTimingsContainer">
                <div className="theaterTimings">
                  {timings.map((time) => (
                    <Link
                      className="linkToTicketBooking"
                      to={`/movie/${movieId}/${movieLang}/${movieType}/${time}/${name}`}
                    >
                      <div className="timings">{time}</div>
                    </Link>
                  ))}
                </div>
                <div className="cancellable">
                  <span
                    className={`${
                      cancellable ? "cancellationIcon" : "nonCancellationIcon"
                    }`}
                  ></span>
                  <span className="cancellableText">
                    {cancellable ? "Cancellable" : "Non-cancellable"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    "loading"
  );
};

export default TicketSelection;
