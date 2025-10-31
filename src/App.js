import Header from "./Components/Header"
import SearchBar from "./Components/SearchBar"
import SortDropdown from "./Components/SortDropdown"
import MovieList from "./Components/MovieList"
import PageTracker from "./Components/PageTracker"
import {useState, useEffect} from "react";
import "./styles.css"

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TMDB_BEARER,
  },
};

export default function App() {

  const [searchText, setSearchText] = useState(""); 
  const [sortMethod, setSortMethod] = useState(0)
  const [currentPage, setcurrentPage] = useState(1); 
  const [movies, setMovies] = useState([]); 
  const [totalPages, setTotalPages] = useState(1);

  const BASE_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US";

   const getTeller = (optionText) => {
    switch (optionText) {
      case "Release Date (Asc)": return 1;
      case "Release Date (Desc)": return 2;
      case "Rating (Asc)": return 3;
      case "Rating (Desc)": return 4;
      default: return 0;
    }
  };

const fetchMovies = async () => {
    const url = searchText
      ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          searchText
        )}&language=en-US&page=${currentPage}`
      : `${BASE_URL}&page=${currentPage}`;

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      let results = data.results || [];

      if (sortMethod === 1)
        results.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
      if (sortMethod === 2)
        results.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      if (sortMethod === 3)
        results.sort((a, b) => a.vote_average - b.vote_average);
      if (sortMethod === 4)
        results.sort((a, b) => b.vote_average - a.vote_average);

      setMovies(results);
      console.log(data); 
      setTotalPages(data.total_pages);
    } catch (err) {
      console.error(err);
    }
  };

   useEffect(() => {
    fetchMovies();
  }, [currentPage, searchText, sortMethod]);
 


  return (
    <div id = "entireContainer">
      <Header/>
      <div id = "searchSection"> 
        <SearchBar searchText = {searchText} setSearchText = {setSearchText}></SearchBar>
        <SortDropdown setSortMethod = {setSortMethod} getTeller = {getTeller}></SortDropdown>
      </div>
      <MovieList movies = {movies}></MovieList>
      <PageTracker page={currentPage} setPage={setcurrentPage} totalPages = {totalPages} />
    </div>
  );
}


