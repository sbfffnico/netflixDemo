//const leadingURL = "https://api.themoviedb.org/3"; might not yet be needed, wasn't and will be used in axios
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;