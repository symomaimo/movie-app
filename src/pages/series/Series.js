import React, { useState, useEffect } from "react";
import axios from "axios";
import "./series.css";
import MovieCard from "../../components/cards/MovieCard";
const Series = () => {
  const [series, setSeries] = useState([]);
  const url =
    "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWFmOGQ5OGJjNjU5NWMwMGViMjkxYmFhZDA2YzgzMCIsIm5iZiI6MTcyOTI1NDM1OC43NzA1NTEsInN1YiI6IjY3MGNjYmY4MWNhNGMzOWZkZWViN2Y1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AfmDHu0uHToZrv-fNm3UU3M8tMILgCS6D1huff_PUco",
    },
  };
  useEffect(() => {
    axios
      .get(url, options)
      .then(function (response) {
        // handle success
        console.log(response);
        setSeries(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return (
    <div className="section-container">
      <p className="series-title">Movies series</p>
      <div className="series-container">
        {series?.length > 0 ? (
          series.map((serie) => (
           <MovieCard key={serie.id} movie={serie}/>
          ))
        ) : (
          <p>You do not have series</p>
        )}
      </div>
    </div>
  );
};

export default Series;
