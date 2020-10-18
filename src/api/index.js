import axios from "axios";
import { useState, useEffect } from 'react';

// const url = "https://covid19.mathdro.id/api";
// const All = "https://api.thevirustracker.com/free-api?global=stats";
const  apikey = "0441a4f1cfe57dfce6b4809fb196f063";


const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '844dba0bfd8f3a4f3799f6130ef9e335';

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${apikey}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'http://image.tmdb.org/t/p/';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';


export const fetchdata = async (nextPage) => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&
  language=en-US&page=1`
  try {
    const res = await axios.get(nextPage || url);
    const data = await res.data;
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }

}; 


export const fetchMovie = async (movieId) => {
  const error =true
  const loading =true
  try {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    const data = await axios.get(endpoint);
    const result = await data.data;
  
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const creditsResult = await (await fetch(creditsEndpoint)).json();
      const directors = creditsResult.crew.filter(
        member => member.job === 'Director'
      );
      const moviedata={
        ...result,
        actors: creditsResult.cast,
        directors,
        loading,
        error
      }
      return moviedata;
  } catch (error) {
    error(true);
  }
  loading(false);
}

export {IMAGE_BASE_URL, POSTER_SIZE,POPULAR_BASE_URL,BACKDROP_SIZE}