import movieTrailer from 'movie-trailer';
import React, {useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import axios from './axios';
import "./Row.css";

const baseImageURL = "https://image.tmdb.org/t/p/original";

function Row({title, fetchURL, isLargeRow, checkRowTitle, setCheckRowTitle}) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState('');
  const [isPlayed, setIsPlayed] = useState(-1);
  const [prevIndex, setPrevIndex] = useState(-1);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      //console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const updateRowTitle = () => {
    setCheckRowTitle(title);
  }

  const enablePlayed = (index) => {
    (isPlayed === index && checkRowTitle === title) ? setIsPlayed(null) : setIsPlayed(index);
  }

  function playMovieTrailer (movie, index) {
    enablePlayed(index);
    if(index === prevIndex && checkRowTitle === title) {
      setTrailerURL('');
      setPrevIndex(-1);
    }
    else {
      setTrailerURL('');
      setPrevIndex(index);
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
      .then(function (url) {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerURL(urlParams.get('v'));
      }).catch(function (error) {
            console.log("Movie trailer error: " + error + ", URL: " + (trailerURL || movie?.title || movie?.name || movie?.original_name || ""));
            setTrailerURL("dQw4w9WgXcQ");
          }
        );
    }
  }

  //console.table(movies);
  //console.log(movies);
  //console.log(movies.map(movie => movie.poster_path));

  const options = {
    height: "420rem",
    width: window.innerWidth,
    playerVars: {
      allow: "autoplay",
      autoplay: 1,
    },
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie,index) => (
          <img 
              key={movie.id}
              onClick={() => {
                updateRowTitle();
                playMovieTrailer(movie,index);
                }}
              className={`row_poster ${isLargeRow ? " row_posterLarge" : ""} ${(isPlayed === index && checkRowTitle === title) ? " row_poster_played" : ""}`}
              src={`${baseImageURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
              alt={movie?.title || movie?.name || movie?.original_name}
          />
        ))}
        {(trailerURL && checkRowTitle === title) && 
        <YouTube videoId={trailerURL} opts={options} 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(1, 1, 1)",
          zIndex: "1",
      }}/>}
      
      </div>
    </div>
  )
}

export default Row;