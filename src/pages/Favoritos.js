import React from "react";
import { Link } from "react-router-dom";
import { auth, getFav } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useLoginContext } from "../UserProvider";
import { getFavByEmail, favEmail } from "../firebaseConfig";
import { favRef, q } from "../firebaseConfig";
import { getDocs, query, where } from "firebase/firestore";

const Favoritos = () => {
   const allFavs = getFav();

  // todos los favoritos -- FUNCIONA
//   const allFavs = () => {
//     getDocs(favRef).then((snapshot) => {
//       let favoritos = [];
//       snapshot.docs.forEach((doc) => {
//         favoritos.push({ ...doc.data(), id: doc.id });
//       });
//       console.log(favoritos);
//     });
//   };

  // favoritos por email
//   const q = query(favRef, where("email", "==", 'h_berru@hotmail.com'));

// // 
//         const getFavByEmail = () => {
//             getDocs(q);
//             getFavByEmail.forEach(doc => {
//             console.log(doc.email, ' => ', doc.data())
//   });
//         }
      const favsByEmail = getFavByEmail();

  return (
    <div>
      {/* {console.log(favsByEmail)} */}
      {favsByEmail()}
      <h1>HOLA DESDE FAVORITOS</h1>
    </div>
  );
};

export default Favoritos;
