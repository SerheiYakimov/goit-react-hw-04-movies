import axios from "axios";

export default class MoviedFetch {
  constructor() {
    this._searchQuery = "";
    this._page = 1;
    // this._movieId = null;
    // this.perPage = 12;
  }

  get searchQuery() {
    return this._searchQuery;
  }
  set searchQuery(value) {
    return (this._searchQuery = value);
  }
  get page() {
    return this._page;
  }
  set page(value) {
    return (this._page += value);
  }
  // get movieId() {
  //   return this._movieId;
  // }
  // set movieId(id) {
  //   return (this._movieId = id);
  // }

  resetPage() {
    return (this._page = 1);
  }

  trendingMovies() {
    const url = "https://api.themoviedb.org/3/";
    const apiKey = "7c2b2b3c6c797e2889781dee57c7a6ae";
    const params = `trending/all/day?api_key=${apiKey}&page=${this._page}`;
    const fetch = url + params;
    return axios
      .get(fetch)
      .then((result) => {
        console.log(result);
        return result.data;
      })
      .then((data) => {
        console.log(data.results);
        return data.results;
      })
      .catch((error) => console.log(error));
  }

  searchMovies() {
    const url = "https://api.themoviedb.org/3/";
    const apiKey = "7c2b2b3c6c797e2889781dee57c7a6ae";
    const params = `search/movie?api_key=${apiKey}&query=${this._searchQuery}&language=en-US&page=${this._page}&include_adult=false`;
    const fetch = url + params;
    return axios
      .get(fetch)
      .then((result) => {
        console.log(result);
        return result.data;
      })
      .then((data) => {
        console.log(data.results);
        return data.results;
      })
      .catch((error) => console.log(error));
  }

  searchMoviesId(id) {
    const url = "https://api.themoviedb.org/3/";
    const apiKey = "7c2b2b3c6c797e2889781dee57c7a6ae";
    const params = `movie/${id}?api_key=${apiKey}&language=en-US`;
    const fetch = url + params;
    return (
      axios
        .get(fetch)
        .then((result) => {
          console.log(result);
          return result.data;
        })
        // .then((data) => {
        //   console.log(data.results);
        //   return data.results;
        // })
        .catch((error) => console.log(error))
    );
  }
}
