import React, {useState, useEffect} from 'react';
import axios from './axios';
import "./Row.css";

const baseImageURL = "https://image.tmdb.org/t/p/original";

function Row({title, fetchURL, isLargeRow}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      //console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  //console.table(movies);
  //console.log(movies);
  //console.log(movies.map(movie => movie.poster_path));

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(movie => (
          <img 
              key={movie.id} 
              className={`row_poster${isLargeRow ? " row_posterLarge" : ""}`}
              src={`${baseImageURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
              alt={movie.title}
          >
          </img>
        ))}
      </div>
    </div>
  )
}

export default Row;