import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar.js';
import Recipes from './components/Recipes.js';
import RecipePage from './components/Recipe-Page.js';

function App() {
  return (
    <Router>
        <div>
          <Nav />
            <Switch>
             <Route path="/recipes" component={Recipes} exact/>
             <Route path="/recipe/:id" component={RecipePage} exact/>
           </Switch>
        </div> 
      </Router>
  );
}

export default App;
