import React from 'react';
import Helmet from 'react-helmet';

const Contact = () => {
  return(
    <div>
      <Helmet>
        <title>
          Contact page title by Helmet
        </title>
        <meta
        name='title'
        content='Contact page title by Helmet'
        data-react-helmet="true"
        />
        <meta
        name='description'
        content='Contact page description by Helmet'
        data-react-helmet="true"
        />
      </Helmet>

      <h1>Section Contact</h1>
    </div>
  )
}

export default Contact;