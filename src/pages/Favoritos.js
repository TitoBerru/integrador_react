import React from "react";
import { Link } from "react-router-dom";
import { auth, getFav } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useLoginContext } from "../UserProvider";
import { getFavByEmail, favEmail } from "../firebaseConfig";
import { favRef, q } from "../firebaseConfig";
import { getDocs, query, where } from "firebase/firestore";

//guardo usuario


const Favoritos = () => {
  //  const allFavs = getFav();
   const {saveLogin} = useLoginContext();
    console.log(saveLogin);
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
  const q = query(favRef, where("email", "==", saveLogin));

// 
 const GetFavByEmail =  () => {
  const {saveLogin} = useLoginContext();
  console.log(saveLogin);
  
  getDocs(q)
    .then((snapshot)=>{
        let favByEmail = [];
        snapshot.docs.forEach((doc)=>{
          favByEmail.push({ ...doc.data(), id:doc.id})
        })
        console.log(favByEmail)
        })
};

//intento directo, pero me da undefined
      //const favsByEmail = getFavByEmail();

  return (
    <div>
      {/* {console.log(favsByEmail)} */}
      {/* {console.log(favsByEmail)}
      {favsByEmail} */}
      
      {GetFavByEmail()}
    </div>
  );
};

export default Favoritos;
