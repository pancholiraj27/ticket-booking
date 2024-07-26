import React from "react";
import { Link } from "react-router-dom";

const MovieTypePopup = ({
  showIn,
  language,
  setMovieTypeModal,
  id,
  movieName,
}) => {
  const handleCrossClick = (e) => {
    e.stopPropagation();
    setMovieTypeModal(false);
  };

  const handleWrapperClick = () => {
    setMovieTypeModal(false);
  };

  return (
    <div className="overflowWrapper" onClick={handleWrapperClick}>
      <div className="movieTypeContainer" onClick={(e) => e.stopPropagation()}>
        <div className="movieTypeHeading">
          <p>{movieName}</p>
          <span>Select language and format</span>
          <div className="cross" onClick={handleCrossClick}>
            ✖️
          </div>
        </div>
        <div className="movieTypeFormatsContainer">
          {language.map((movieLang, index) => (
            <div key={index} className="movieTypeFormat">
              <div className="movieTypeLanguage">{movieLang}</div>
              <div className="movieTypeList">
                {showIn.map((item, index) => (
                  <Link
                    key={index}
                    to={`/movie/${id}/${movieLang}/${item}`}
                    className="movieTypeListLink"
                  >
                    <div>{item}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieTypePopup;
