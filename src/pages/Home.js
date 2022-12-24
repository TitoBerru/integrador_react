import React from 'react';
import {Link} from 'react-router-dom';
import{auth} from '../firebaseConfig';
import {signOut} from 'firebase/auth'

import {useLoginContext} from '../UserProvider';

const Home = () => {
  const cierreSesion = async ()  =>{
    await signOut(auth);
    setSaveLoginEmail('');
  } 
  const {saveLogin, setSaveLoginEmail} = useLoginContext()

  return <div>Home
    <Link to="/irAlogin">login</Link>
    {saveLogin? <h4 >Bienvenido Usuario: {saveLogin} <br /><br /><button className='btn btn-warning' onClick={cierreSesion}>Cerrar sesion</button> </h4> : <h4>No estas logueado</h4>} 
    
    
   
  </div>;
};

export default Home;
