import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

const MovieCard = ({ movie ,title}) => {
  const navigate = useNavigate();
  const posterPath = "https://image.tmdb.org/t/p/original";
  const handleNavigate = (id) => {
    navigate("/movies/" + id);
  };
  return (
    <div
      onClick={() => handleNavigate(movie.id)}
      key={movie.id}
      className="movie-container"
    >
      <img
        className="poster-image"
        src={posterPath + movie.poster_path}
        alt="poster"
        title
        
      />
        <img className="rating" src="/sparkling.png" alt="star" /> 
     <p className="database"> {movie?.vote_average}</p>
     <p className="title">{movie?.original_title}</p>
      
      <moviename>{title}</moviename>
    </div>
  );
};

export default MovieCard;
