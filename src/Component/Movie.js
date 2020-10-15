import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Movieinfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Spinner from "./Spinner";
import { fetchMovie } from "../api";
import {useParams} from 'react-router-dom'

function Movie() {
  const [movie, setmovie] = useState({});
  const [loading, setLoading] = useState(true);
    const {id}=useParams()
  const fetch = async () => {
    setLoading(true);
    let movie = await fetchMovie(id);
    console.log(movie);
    setmovie(movie);
  };
  useEffect(() => {
    fetch();
  }, []);
  if(!movie){
      return <Spinner/>
  }
  return (
    <div>
         <Navigation movie={movie.original_title} />
         <Movieinfo movie={movie} />
         <MovieInfoBar
         time={movie.runtime}
         budget={movie.budget}
         revenue={movie.revenue}
         />
      </div>
  );
}

export default Movie;
