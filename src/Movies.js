import React, {useState} from 'react';
import Row from './Row';
import requests from './requests';

function Movies() {

  const [checkRowTitle, setCheckRowTitle] = useState("");

  return (
    <div>
      <Row title="Trending Now" fetchURL={requests.fetchTrendingNow} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle}/>
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle}/>
      <Row title="Trending Movies This Week" fetchURL={requests.fetchTrendingMoviesOfWeek} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="Action" fetchURL = {requests.fetchActionMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="Adventure" fetchURL = {requests.fetchAdventureMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="Animation" fetchURL = {requests.fetchAnimationMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="Comedy" fetchURL = {requests.fetchComedyMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="Crime" fetchURL = {requests.fetchCrimeMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="Documentaries" fetchURL = {requests.fetchDocumentaryMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="Drama" fetchURL = {requests.fetchDramaMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="For the Family" fetchURL = {requests.fetchFamilyMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="Fantasy" fetchURL = {requests.fetchFantasyMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="History" fetchURL = {requests.fetchHistoryMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="Embrace the Music" fetchURL = {requests.fetchMusicMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="Mystery" fetchURL = {requests.fetchMysteryMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="Romance" fetchURL = {requests.fetchRomanceMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="Science Fiction" fetchURL = {requests.fetchSciFiMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="Made for TV" fetchURL = {requests.fetchTVMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="Thriller" fetchURL = {requests.fetchThrillerMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="War" fetchURL = {requests.fetchWarMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
      <Row title="Western" fetchURL = {requests.fetchWesternMovies} checkRowTitle={checkRowTitle} setCheckRowTitle={setCheckRowTitle} />
    </div>
      
  );
}

export default Movies