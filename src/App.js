import "./css/App.scss";
import Navbar from "./components/Main/NavbarComponent";
import Home from "./components/Main/Home";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Main/Movies";
import Series from "./components/Main/Series";
import MovieItem from "./components/Main/MovieFiles/MovieItem";
import Footer from "./components/Main/HomeFiles/Footer";
import { Context } from "./components/Main/context";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIES_API_KEY}`;
function App() {
  const [searchText, setSearchText] = useState("");
  const [searchId, setSearchId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [searchState, setSearchState] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();

  const handleSumbit = (e) => {
    e.preventDefault();
  };

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  //fetching multiple movies

  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${searchText}`);
  }, [searchText]);

  //fetching one movie

  const fetchMovie = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovie(data);
        setIsLoading(false);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${searchId}`);
    setIsLoading(true);
  }, [searchId]);

  return (
    <Router>
      <Context.Provider
        value={{
          size,
          movies,
          API_ENDPOINT,
          setSearchText,
          setSearchId,
          movie,
          isLoading,
          setIsLoading,
          setSearchState,
          searchState,
        }}
      >
        <Navbar
          handleSumbit={handleSumbit}
          setSearchText={setSearchText}
          searchText={searchText}
          size={size}
        />

        <Switch>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/series">
            <Series />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:imdbID">
            <MovieItem />
          </Route>
        </Switch>
        <Footer />
      </Context.Provider>
    </Router>
  );
}

export default App;
