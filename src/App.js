import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Home } from './pages/home';
import { Profile } from './pages/profile'
import React from 'react'

function App() {

  return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
