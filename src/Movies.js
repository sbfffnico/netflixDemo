import React from 'react';
import Row from './Row';
import requests from './requests';

function Movies() {

  return (
    <div>
      <Row title="Trending Now" fetchURL={requests.fetchTrendingNow} />
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Movies This Week" fetchURL={requests.fetchTrendingMoviesOfWeek} />
      <Row title="Action" fetchURL = {requests.fetchActionMovies} />
      <Row title="Adventure" fetchURL = {requests.fetchAdventureMovies} />
      <Row title="Animation" fetchURL = {requests.fetchAnimationMovies} />
      <Row title="Comedy" fetchURL = {requests.fetchComedyMovies} />
      <Row title="Crime" fetchURL = {requests.fetchCrimeMovies} />
      <Row title="Documentaries" fetchURL = {requests.fetchDocumentaryMovies} />
      <Row title="Drama" fetchURL = {requests.fetchDramaMovies} />
      <Row title="For the Family" fetchURL = {requests.fetchFamilyMovies} />
      <Row title="Fantasy" fetchURL = {requests.fetchFantasyMovies} />
      <Row title="History" fetchURL = {requests.fetchHistoryMovies} />
      <Row title="Embrace the Music" fetchURL = {requests.fetchMusicMovies} />
      <Row title="Mystery" fetchURL = {requests.fetchMysteryMovies} />
      <Row title="Romance" fetchURL = {requests.fetchRomanceMovies} />
      <Row title="Science Fiction" fetchURL = {requests.fetchSciFiMovies} />
      <Row title="Made for TV" fetchURL = {requests.fetchTVMovies} />
      <Row title="Thriller" fetchURL = {requests.fetchThrillerMovies} />
      <Row title="War" fetchURL = {requests.fetchWarMovies} />
      <Row title="Western" fetchURL = {requests.fetchWesternMovies} />
    </div>
      
  );
}

export default Movies