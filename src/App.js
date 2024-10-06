import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
function App() {
  //---------------------------------------------------
  const [pagesCount, setPagesCount] = useState(0);

  // storing movies in state to use it------------------------------------------
  const [movies, setMovies] = useState([]);

  //get all movies from api------------------------------------------------
  const getAllMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=2a93f7e8186da0baa2cf6465bc8c15e9&language=ar&page=1"
    );
    setMovies(response.data.results);
    setPagesCount(response.data.total_pages);
  };
  useEffect(() => {
    getAllMovies();
  }, []);

  //Search for movies------------------------------------------------------
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=ar&query=${word}&api_key=2a93f7e8186da0baa2cf6465bc8c15e9`
      );
      setMovies(response.data.results);
      setPagesCount(response.data.total_pages);
    }
  };
  //-------------------------------------------------------------------
  const getAllPages = async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=2a93f7e8186da0baa2cf6465bc8c15e9&language=ar&page=${page}`
    );
    setMovies(response.data.results);
    setPagesCount(response.data.total_pages);
  };

  // return--------------------------------------------------------------
  return (
    <div className="font color-body ">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getAllPages={getAllPages}
                  pagesCount={pagesCount}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
