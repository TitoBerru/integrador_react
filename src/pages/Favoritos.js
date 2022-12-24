import React from 'react';
import {useLoginContext} from '../UserProvider'
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { snapShot } from '../firebaseConfig';

const Favoritos = async () =>  {
   
    
  const snapShot = await getDocs(collection(db, 'favoritos'));
  snapShot.forEach(doc => {
     console.log(doc.data());
    
  })
  


  return <div>
<h1>Listado de pelis</h1>

    
  </div>;
};
 
export default Favoritos;