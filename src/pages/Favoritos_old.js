import { useEffect, useState } from 'react';
// import './favoritos.css';
// import './../components/Fav/index'
import { MovieCard } from './../components/Cards/MovieCard';
import tmdbApi from '../api/services/tmdbApi';
import { useTmdbApiContext } from '../contexts/TmdbApiContext';
import { getFav } from '../firebaseConfig';
import { async } from '@firebase/util';

const Favoritos = () => {
  //constante para tratar de traer los fav de la bd
  const favs = async()=>{
   const querySnapshot = await getFav();
   querySnapshot.forEach(element => {
    console.log(element.data())
   });
  }

  /* Peliculas de la API de favoritos */
  const [favouritesMovies, setFavouritesMovies] = useState([
    { email: 'test@test', movieId: 505642 },
    { email: 'test@test', movieId: 505642 },
    { email: 'test@test', movieId: 505642 },
  ]);

  /* context para favoritos */

  const { favouriteMovies, setFavouriteMovies } = useTmdbApiContext();

  /* funcion para obtener pelicula de la API tmdb, a traves del id de las favoritas */

  const getMovies = () => {
    try {
      favouritesMovies.map(async (movie) => {
        /* guardar en el contexto "setFavouriteMovies" las peliculas favoritas, para eso hago una copia del array existente en "favouriteMovies"
        (para no borrar las peliculas favoritas ya agregadas) y  le agrego la nueva pelicula favorita que se esta buscando.
        Problema: no me toma la copia del array "...favouriteMovies" y solo deja la ultima pelicula.
         */
        setFavouriteMovies(
          ...favouriteMovies,
          await tmdbApi.getMovie(movie.movieId)
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(favouriteMovies);

  return (
    <div>
      <MovieCard movie={favouriteMovies}></MovieCard>

      {/*   {favouriteMovies.length > 0 &&
        favouriteMovies.map((movie) => (
          <MovieCard key={movie.movieId} movie={favouriteMovies}></MovieCard>
        ))} */}
    </div>
  );
};

export default Favoritos;