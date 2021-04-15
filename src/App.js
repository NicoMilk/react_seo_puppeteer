import Home from './Components/Home';
import Products from './Components/Products';
import Contact from './Components/Contact';
import PostShow from './Components/PostShow';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Helmet from 'react-helmet';
import './App.css';

const App = () => {
  return (
  
  <div className="App">
    <Router>
      <Helmet>
        <title>
          Base page title by Helmet
        </title>
        <meta
        name="title"
        content="Default Title"
        data-react-helmet="true"/>
        <meta
        name='description'
        content='Composant super parent par Helmet'
        data-react-helmet="true"
        />
      </Helmet>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/products' exact component={Products}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path="/post/:id" component={PostShow} />
        {/* <Route path='/' component={()=> <div>Oops, cette page n'existe pas...</div>}/> */}
      </Switch>
    </Router>
  </div>
    );
}

export default App;