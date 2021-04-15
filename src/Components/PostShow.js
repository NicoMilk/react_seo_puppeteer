import React from 'react'
import Helmet from 'react-helmet';
import {useLocation} from "react-router-dom";
import {Link} from 'react-router-dom';

const PostShow = () => {
 const data = useLocation();
//  console.log('DATA :', data)

  return (
    <div>
      <Helmet>
        <title>
          {data.state.title}
        </title>
        <meta
        name='title'
        content={data.state.title}
        data-react-helmet="true"
        />
        <meta
        name='description'
        content={data.state.body}
        data-react-helmet="true"
        />
      </Helmet>

      <h1>{data.state.title}</h1>
      <p>{data.state.body}</p>

      <Link to="/">
        <div>
          🏠 Retour
        </div>
      </Link>

    </div>
  )
}

export default PostShow;