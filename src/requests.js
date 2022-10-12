// TMDB documentation found at https://developers.themoviedb.org/3/getting-started/introduction
const APIkey = "dab450124c8fbed651a2211d89ce9e7a";
const currentYear = new Date().getFullYear();

// create an object of requests
const requests = {
  fetchActionMovies: `/discover/movie?api_key=${APIkey}&with_genres=28`,
  fetchTrendingMoviesOfWeek: `/trending/movie/week?api_key=${APIkey}`,
  fetchTrendingNow: `/trending/all/day?api_key=${APIkey}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIkey}&with_networks=213`,
  fetchAdventureMovies: `/discover/movie?api_key=${APIkey}&with_genres=12`,
  fetchAnimationMovies: `/discover/movie?api_key=${APIkey}&with_genres=16`,
  fetchComedyMovies: `/discover/movie?api_key=${APIkey}&with_genres=35`,
  fetchCrimeMovies: `/discover/movie?api_key=${APIkey}&with_genres=80`,
  fetchDocumentaryMovies: `/discover/movie?api_key=${APIkey}&with_genres=99`,
  fetchDramaMovies: `/discover/movie?api_key=${APIkey}&with_genres=18`,
  fetchFamilyMovies: `/discover/movie?api_key=${APIkey}&with_genres=10751`,
  fetchFantasyMovies: `/discover/movie?api_key=${APIkey}&with_genres=14`,
  fetchHistoryMovies: `/discover/movie?api_key=${APIkey}&with_genres=27`,
  fetchMusicMovies: `/discover/movie?api_key=${APIkey}&with_genres=10402`,
  fetchMysteryMovies: `/discover/movie?api_key=${APIkey}&with_genres=9648`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIkey}&with_genres=10749`,
  fetchSciFiMovies: `/discover/movie?api_key=${APIkey}&with_genres=878`,
  fetchTVMovies: `/discover/movie?api_key=${APIkey}&with_genres=10770`,
  fetchThrillerMovies: `/discover/movie?api_key=${APIkey}&with_genres=53`,
  fetchWarMovies: `/discover/movie?api_key=${APIkey}&with_genres=10752`,
  fetchWesternMovies: `/discover/movie?api_key=${APIkey}&with_genres=37`,
  fetchCurrentTopRatedNetflix: `discover/tv?api_key=${APIkey}&sort_by=popularity.desc&air_date.gte=${currentYear}&with_networks=213`,
}
// return object
export default requests;