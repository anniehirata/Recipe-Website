import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import Nav from './components/NavUser.js';
import Recipes from './components/Recipes.js';
import RecipePage from './components/Recipe-Page.js';
import SignupPage from './components/Signup-Page'

function App() {
  return (
    <Router>
        <div>
            <Switch>
             <Route path="/recipes" component={Recipes} exact/>
             <Route path="/recipe/:id" component={RecipePage} exact/>
             <Route path="/signup" component={SignupPage} exact/>
           </Switch>
        </div> 
      </Router>
  );
}

export default App;
