import './Banner.css';
import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Banner() {
  const [movie,setMovie] = useState([]);
  const [trailerURL, setTrailerURL] = useState('');
  const [playText, setPlayText] = useState("Play");
  const [showMoreInfo, setShowMoreInfo] = useState("hidden");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchCurrentTopRatedNetflix);
      /* to show top rated only */
      //setMovie(request.data.results[0]);
      /* to show a random film on each refresh */
      setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
      return request;
    }
    fetchData();
  }, []);

  //console.log(movie);

  function truncateDescription(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function playMovieTrailer (movie) {
      if(trailerURL) {
        setTrailerURL('');
        setPlayText("Play");
      }
      else {
        setPlayText("Stop");
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

  const moreInfo = () => {
    if (showMoreInfo === "hidden") {
      setShowMoreInfo("visible");
    }
    else {
      setShowMoreInfo("hidden");
    }
  }

  const options = {
    height: "445rem",
    width: (window.innerWidth/1.75),
    playerVars: {
      allow: "autoplay",
      autoplay: 1,
    },
  };

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
    <div className="banner_contents">
      <h1 className="banner_title">
        {/* titles show up from API in three ways */}
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <h1 className="banner_description">{truncateDescription(movie?.overview,500)}</h1>
      <div className="banner_buttons">
        <button className="banner_button" onClick={() => playMovieTrailer(movie)}>{playText}</button>
        <button 
          className="banner_button" 
          onMouseEnter={() => {moreInfo()}}
          onMouseLeave={() => {moreInfo()}}
        >
          More Info
        </button>
        {trailerURL && 
        <YouTube videoId={trailerURL} opts={options} 
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(1, 1, 1)",
        }}/>}
        <div className="banner_moreinfo" style={{visibility: showMoreInfo}}>
          Original Air Date: {movie.first_air_date}<br />
          Rating: {movie.vote_average}/10
        </div>
      </div>
    </div>

    {/* to fade the banner into the rest of the app */}  
    <div className="banner_fadebottom"></div>
    </header>
  )
}

export default Banner;