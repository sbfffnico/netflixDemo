import './Banner.css';
import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './requests';

function Banner() {
  const [movie,setMovie] = useState([]);

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

  console.log(movie);

  function truncateDescription(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

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
        <button className="banner_button">Play</button>
        <button className="banner_button">My List</button>
      </div>
    </div>

    {/* to fade the banner into the rest of the app */}  
    <div className="banner_fadebottom"></div>
    </header>
  )
}

export default Banner;