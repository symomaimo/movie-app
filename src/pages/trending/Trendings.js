import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../../components/cards/MovieCard";
import "./trendings.css";
const Trendings = () => {
  const [trendings, setTrendings] = useState([]);
  const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=5';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWFmOGQ5OGJjNjU5NWMwMGViMjkxYmFhZDA2YzgzMCIsIm5iZiI6MTcyOTI1NDM1OC43NzA1NTEsInN1YiI6IjY3MGNjYmY4MWNhNGMzOWZkZWViN2Y1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AfmDHu0uHToZrv-fNm3UU3M8tMILgCS6D1huff_PUco'
    }
  };

  useEffect(() => {
    axios
      .get(url, options)
      .then(function (response) {
        console.log(response);
        setTrendings(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);
  return (
    <div className=" trending-section-container">
      <p className="trendings-title">Trending series</p>
      <div className="trendings-container">
        {trendings?.length > 0 ? (
          trendings.map((trending) => <MovieCard  key={trendings.id}movie={trending} />)
        ) : (
          <p>You do not have trending</p>
        )}
      </div>
    </div>
  );
};

export default Trendings;
