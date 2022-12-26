import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { getFavByEmail, saveFav } from "../../firebaseConfig";
import { useLoginContext } from "../../UserProvider";
import Fav from "../Fav";
import Favoritos from "../../pages/Favoritos";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  const { saveLogin } = useLoginContext();
  // let favoritos = getFavByEmail('inicio1@inicio1.com');
  // console.log(favoritos)

  const handleClick = () => {
    // {saveLogin? alert('Estas logueado ' + movie.id): alert('No estas logueado')}
    // alert(movie.id)
    if (!saveLogin) {
      alert("Debes estar logueado para guardar este favorito");
    } else {
      saveFav(saveLogin, movie.id);
      {
      }
      console.log(
        "se guardo en la base con el usuario" +
          saveLogin +
          " y con el id de movie: " +
          movie.id
      );
    }
  };
  return (
    <div>
      <Favoritos />
    <li className={styles.movieCard}>    
      <Link to={"/movies/" + movie.id}>
       
        <div className="favButtons">
          <button onClick={handleClick}>
            {saveLogin? <div className="heartLike"></div>: <div className="heart"></div>}
            {/* <div className="heart"></div> */}
          </button>
        </div>

        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
    </div>
  );
}
