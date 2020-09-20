import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
// import Navbar from './Components/Navbar'
import Products from  './Pages/Products'
import Checkout from './Components/Checkout'
import Home from './Pages/Home'
import Productind from './Pages/Productind'
import reducer, { initialState } from './Pages/State/reducer'
import StateProvider from './Pages/State/GlobalState'

function App() {
  return (
    <StateProvider reducer={reducer} initialState = {initialState}>
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
              <Home/>
          </Route>
          <Route exact path='/products'>
            <Products/>
          </Route>
          <Route path='/product'>
            <Productind/>
          </Route>
          <Route path='/checkout'>
              <Checkout/>
          </Route>
        </Switch>
        </div>
    </Router>
    </StateProvider>
  );
}

export default App;
