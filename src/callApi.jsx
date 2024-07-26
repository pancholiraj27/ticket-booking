import React, { useEffect } from "react";

const CallApi = () => {
  useEffect(() => {
    const API_KEY = "8b5252164fc507c7534a769279b310eb";
    const today = new Date();
    const lastMonth = new Date(today);
    lastMonth.setMonth(today.getMonth() - 1);

    const formatDate = (date) => date.toISOString().split("T")[0];
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=hi&sort_by=release_date.desc&with_original_language=hi&primary_release_date.gte=${formatDate(
        lastMonth
      )}`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response.results, "here no response"))
      .catch((err) => console.error(err));

    console.log("HERE", options);
  }, []);

  return <div>call api called</div>;
};

export default CallApi;
