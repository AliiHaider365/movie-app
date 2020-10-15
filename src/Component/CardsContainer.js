import React ,{ useState, useEffect } from 'react'
import { fetchdata,POPULAR_BASE_URL, } from "../api";
import Card from "./cards";
import LoadMoreBtn from './LoadMoreBtn';
import Spinner from './Spinner';
import Slider from './Slider';



function CardsContainer() {
  const [data, setdata] = useState({movies: []});
  const [CurentPage, setCurentPage] = useState(1);
  const [totalPage, settotalPage] = useState();
  const [loading, setLoading] = useState(true);

  const fetch = async (url) => {
    
    setLoading(true);
    let movie = await fetchdata(url);
    console.log(movie)
    settotalPage(movie.total_pages)
    setCurentPage(movie.page)
    setdata(prev => ({
        ...prev,
        movies:
        [...prev.movies, ...movie.results]
      }));
      
    setLoading(false);
  };
  useEffect(() => {
    fetch()
    
  }, []);

  const LoadMoreMovies =  () => {
    const url = `${POPULAR_BASE_URL}&page=${CurentPage + 1}`;
    fetch(url)
  }
    
  
  console.log(data)

    return (
        <>
        <Slider slider={data.movies} />
             <div class="container">
        <div class="row">
          {data.movies ? (
            data.movies.map( (data,index) => {
              return (
                  <Card 
                  key={index}
                  data={data} 
                  />
              );
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
        {loading && <Spinner/>}
      {CurentPage < totalPage &&  (
        <LoadMoreBtn text="Load More" callback={LoadMoreMovies} />
      )}
      </div>
        </>
    )
}

export default CardsContainer
