import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MovieCard from "../../components/cards/MovieCard";
import "./trendingshows.css";
const TrendingShows = () => {
    const[trendingShows,setTrendingShows]=useState([])
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWFmOGQ5OGJjNjU5NWMwMGViMjkxYmFhZDA2YzgzMCIsIm5iZiI6MTcyOTQ5NTUwOS4zMzQ3OTUsInN1YiI6IjY3MGNjYmY4MWNhNGMzOWZkZWViN2Y1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AgFuxKPevXIx5QZ-phRvJJ5mVtc8x17T24Qovtt2yBo'
      }
    };
    useEffect(()=>{
       axios
       .get(url,options) 
       .then(function(response){
        console.log(response)
        setTrendingShows(response.data.results)
       })
       .catch(function(error){
        console.log(error)
       })
       .finally(function(){

       })
    },[])
  return (
<div className="section-container">
      <p className="tv-title">trendingShows </p>
      <div className="tv-container">
        {trendingShows?.length > 0 ? (
          trendingShows.map((trendingShow) => <MovieCard key={trendingShow.id} movie={trendingShow} />)
        ) : (
          <p>You do not have tv shows</p>
        )}
      </div>
    </div>
  );
};


export default TrendingShows