import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Helmet from 'react-helmet';

const Home = () => {

  const [data,setData]=useState([]);
  const getData=()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
      .then(function(response){
        // console.log('Response :', response)
        return response.json();
      })
      .then(function(myJson) {
        // console.log('MyJson :', myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  return(
    <div>
      <Helmet>
        <title>
          Home page title by Helmet
        </title>
        <meta
        name='title'
        content='Home page title by Helmet'
        data-react-helmet="true"
        />
        <meta
        name='description'
        content='Home page description by Helmet'
        data-react-helmet="true"
        />
      </Helmet>

      <h1>Bonjour Monde !</h1>
      <p>ceci est la page d'accueil du site</p>

      <ul>
        {data.map(post =>
        <Link to={{pathname:`/post/${post.id}`, state: { title: `${post.title}`, body: `${post.body}`}}}>
          <li style={{listStyle:'none'}} key="{post.title}">{post.id} - {post.title}</li>      
        </Link>
        )}
      </ul>

    </div>
  )
}

export default Home;