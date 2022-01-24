import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components.js/Home";
import Word from './components.js/Word';
import Color from './components.js/Color';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:value">
            {/* is able to type in a word or number with isNaN(value)? */}
            <Word />
            </Route>
          <Route exact path="/:word/:colorA/:colorB">
            <Color />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;