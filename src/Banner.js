import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './requests';

function Banner() {
  const [movie,setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchCurrentTopRatedNetflix);
      setMovie(request.data.results[0]);
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header className="banner">
    <div className="banner_contents">
      <h1></h1>
    </div>
    {/*background image*/}

    {/*title*/}
      
    {/*2 buttons*/}
    {/*description*/}
      
    </header>
  )
}

export default Banner;