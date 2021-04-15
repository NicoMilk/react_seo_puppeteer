import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=> {
  return(
    <ul style={{display:'flex'}}>
      <Link to='/'>
        <li style={{marginLeft:20, listStyle:'none'}}>Accueil</li>      
      </Link>

      <Link to='/products'>
        <li style={{marginLeft:20, listStyle:'none'}}>Produits</li>      
      </Link>

      <Link to='/contact'>
        <li style={{marginLeft:20, listStyle:'none'}}>Contact</li>      
      </Link>
 
    </ul>
  )
}

export default Navbar;