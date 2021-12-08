import { useEffect, useState } from 'react';
import { get } from "../utils/httpClient";
import { MovieCard } from './MovieCard';
//import movies from './movies.json'
import styles from './MoviesGrid.module.css'

export function MoviesGrid() {
  //let movies = [];
  //const movieState = useState([]);
  //const movies = movieState[0];
  //const setMovies = moviesState[1];
  // Reemplazamos las tres líneas anteriores por:
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie")
    .then(data => {
      setMovies(data.results);
    })
  }, []);
  // [] -> Arreglo de dependencias -> Sólo se cargará una vez!!!
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}