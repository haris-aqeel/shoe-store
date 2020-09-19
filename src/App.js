import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
 import Navbar from './Components/Navbar'
import Products from  './Pages/Products'
import AboutUs from  './Pages/AboutUs'
import ContactUs from  './Pages/ContactUs'


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/'>
              <Navbar/>
          </Route>
          <Route path='/products'>
            <Products/>
          </Route>
          <Route path='/about'>
            <AboutUs/>
          </Route>
          <Route path='/contact'>
            <ContactUs/>
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
