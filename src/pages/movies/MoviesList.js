import React, { useEffect, useState } from "react";
import "./movies.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MovieCard from "../../components/cards/MovieCard";
import Pill from "../../components/pill/Pill";
import { Pagination } from "antd";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState("28");
  const [activeTab, setActiveTab] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const[search,setSearch]=useState([])
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`;
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
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
        setLoading(true);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [genre, page]);

  const [genres, setGenres] = useState([]);
  const genreUrl = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const genreOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWFmOGQ5OGJjNjU5NWMwMGViMjkxYmFhZDA2YzgzMCIsIm5iZiI6MTcyOTQ5NTUwOS4zMzQ3OTUsInN1YiI6IjY3MGNjYmY4MWNhNGMzOWZkZWViN2Y1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AgFuxKPevXIx5QZ-phRvJJ5mVtc8x17T24Qovtt2yBo",
    },
  };
  useEffect(() => {
    axios
      .get(genreUrl, genreOptions)
      .then(function (response) {
        console.log(response);
        setGenres(response.data.genres);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log();
      });
  }, []);
 
  const handleChooseGenre = (genre) => {
    setActiveTab(genre.name);
    setGenre(genre?.id);
  };

  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
  };


  return (
    <div className="section-container">
      <p className="movies-title">Movies lists</p>
      <div className="genre-container">
        {genres?.length > 0 ? (
          genres?.map((genre) => (
            <Pill
              key={genre.name}
              genre={genre}
              handleChooseGenre={handleChooseGenre}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))
        ) : (
          <p>You do not have genres</p>
        )}
      </div>
      <div className="movies-container">
        {movies?.length > 0 ? (
          movies?.map((movie) => <MovieCard key={movie?.id} movie={movie} />)
        ) : (
          <p>You do not have movies</p>
        )}
      </div>
      <div className="pagination-container">
        
        <Pagination onChange={onPageChange} defaultCurrent={1} total={totalPages} />
      </div>
    </div>
  );
};

export default MoviesList;
