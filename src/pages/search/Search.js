import React, { useState, useEffect } from "react";
import axios from "axios";
import "./search.css";
import MovieCard from "../../components/cards/MovieCard";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWFmOGQ5OGJjNjU5NWMwMGViMjkxYmFhZDA2YzgzMCIsIm5iZiI6MTcyOTU5NTIxOC42Mjc3NTgsInN1YiI6IjY3MGNjYmY4MWNhNGMzOWZkZWViN2Y1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L2-TpaiikZqP8TnyGti5VqGpGqIzVQBnLRgU5PKT8LA",
    },
  };

  const fetchResults = async () => {
    await axios
      .get(url, options)
      .then(function (response) {
        console.log(response);
        setSearchResults(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleSearch = async () => {
    await fetchResults();
  };

  return (
    <>
      <div className="search-input-container">
        <input
          className="search"
          type="text"
          name="movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movie..."
        ></input>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 32 32"
          onClick={handleSearch}
        >
          <path
            fill="currentColor"
            d="M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28l1.439 1.44l7.968-7.969A9.92 9.92 0 0 0 19 23c5.512 0 10-4.488 10-10S24.512 3 19 3m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8"
          />
        </svg>
      </div>
      <div className="movielist-container">
        {searchResults?.length > 0 ? (
          searchResults.map((result) => <MovieCard movie={result} />)
        ) : (
          <p>You have no search result</p>
        )}
      </div>
    </>
  );
};

export default Search;
