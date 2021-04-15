import React from 'react';
import Cart from './Cart'
import Helmet from 'react-helmet';

const Products = () => {

  return(
    <div>
      <Helmet>
        <title>
          Products page title by Helmet
        </title>
        <meta
        name='title'
        content='Products page title by Helmet'
        data-react-helmet="true"
        />
        <meta
        name='description'
        content='Products page description by Helmet'
        data-react-helmet="true"
        />
      </Helmet>
      <h1>Section Produits</h1>
      <Cart/>
    </div>
  )
}

export default Products;