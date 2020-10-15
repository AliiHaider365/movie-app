import React,{useState} from 'react';
// import PropTypes from 'prop-types';

// import NoImage from '../images/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE,BACKDROP_SIZE} from '../api';
// 
import MovieThumb from './MovieThumb';

// import { StyledMovieInfo } from '../styles/StyledMovieInfo';

const MovieInfo = ({ movie }) => {
 
  const background = `https://image.tmdb.org/t/p/w400/${movie.backdrop_path}` ;
  console.log(background)
  return(
  <div className='Movieinfo-outer' style={{backgroundImage:`url(${background})`}}>
    <div className="movieinfo-content">
      <div className="movieinfo-thumb">
        <MovieThumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : 
              // NoImage"
              ""
          }
          clickable={false}
          alt="moviethumb"
        />
      </div>
      <div className="movieinfo-text">
        <h1>
        {movie.title}
        </h1>
        <h3>PLOT</h3>
        <p>
        {movie.overview}
       
        </p>
     
        <div className="rating-director">
          <div>
            <h3>IMDB RATING</h3>
            <div className="score">
            {movie.vote_average}
            </div>
          </div>
          <div className="director">
            {/* <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
            {movie.directors.map(element => (
              <p key={element.credit_id}>{element.name}</p>
            ))} */}
          </div>
        </div>
      </div>
    </div>
   </div>
);
          }
// MovieInfo.propTypes = {
//   movie: PropTypes.object,
//   directors: PropTypes.array,
// }

export default MovieInfo;
