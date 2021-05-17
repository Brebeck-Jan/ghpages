import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
import page1 from "./page1"
import page2 from "./page2"


function App() {

  return (
    <div className="App">
      <h1>Songtiteleingabe:</h1>
      {/* Für die Autosuggest brauchen wir schon alle Titel */}
      <input type="text"></input>
      <button>{"Vorschlag generieren"}</button>
    
      {/* <Link to="/">1</Link>
      <Link to="/2">2</Link>
      <Switch>
      <Route exact path="/" component={page1} />
      <Route exact path="/2" component={page2} />
      </Switch> */}

    </div>
  );
}

export default App;
