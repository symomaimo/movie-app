import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movies.css";

const Movie = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWFmOGQ5OGJjNjU5NWMwMGViMjkxYmFhZDA2YzgzMCIsIm5iZiI6MTcyOTI1NDM1OC43NzA1NTEsInN1YiI6IjY3MGNjYmY4MWNhNGMzOWZkZWViN2Y1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AfmDHu0uHToZrv-fNm3UU3M8tMILgCS6D1huff_PUco",
    },
  };

  const posterPath = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    axios
      .get(url, options)
      .then(function (response) {
        setMovie(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);
  return (
    <div className="my-movie-container">
      <div className="division-container">
        <div className="my-image-container">
          <img
            className="my-movie-image"
            src={`${posterPath}${movie?.poster_path}`}
            alt=""
          />
        </div>
        <div className="content-container">
          <p className="my-movie-title">{movie?.original_title}</p>
          <p>{movie?.overview}</p>

          {movie?.production_companies?.length > 0 &&
            movie.production_companies.map((company) => (
              <div>
                <p>{company?.name}</p>
                <p>{company?.origin_country}</p>
                <p>Rating: {movie?.vote_average}</p>
              </div>
            ))}
          <p>Popularity: {movie?.popularity}</p>
          <p>Popularity: {movie?.release_date}</p>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
