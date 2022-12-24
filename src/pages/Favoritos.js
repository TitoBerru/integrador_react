import React from 'react';
import {Link} from 'react-router-dom';
import{auth, getFav} from '../firebaseConfig';
import {signOut} from 'firebase/auth'
import {useLoginContext} from '../UserProvider';
import {getFavByEmail, favEmail} from '../firebaseConfig'

const Favoritos = () => {
    
    const favsByEmail = getFav();
  
  return (
  <div>
        
    <h1>HOLA DESDE FAVORITOS</h1>
   
  </div>
  );
};

export default Favoritos;
