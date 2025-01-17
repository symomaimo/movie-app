import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Search from "./pages/search/Search";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import MoviesList from "./pages/movies/MoviesList";
import Series from "./pages/series/Series";
import HomeLayer from "./layout/homelayer/HomeLayer";
import Trendings from "./pages/trending/Trendings";
import Movie from "./pages/movies/Movie";
import TrendingShows from "./pages/tv shows/TrendingShows";
import Search from "./pages/search/Search";
function App() {
  const [state, setState] = useState({
    search: "",
    results: [],
  });
 
  const handleInput = (e) => {
    let search = e.target.value;
    setState((preventState) => {
      return { ...preventState, search: search };
    });
  };
  const searchResult = (e) => {
    if (e.key === "Enter") {
      axios
        .get("  http://www.omdbapi.com/?i=tt3896198&apikey=fcba440a")
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
  };
  const[loading,setLoading]=useState(false)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeLayer />}>
          <Route
            path="/search"
            element={
              <Search handleInput={handleInput} searchResult={searchResult} />
            }
          />
          <Route index element={<MoviesList />} />
         
          <Route path="/series" element={<Series />} />
          <Route path="/trending" element={<Trendings />} />
          <Route path="trending-shows" element={<TrendingShows />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
