import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
import {getAllSongs} from "./databasehandler"


function App() {
  let allSongs = getAllSongs();
  return (
    <div className="App">
      <h1>Songtiteleingabe:</h1>
      {/* Für die Autosuggest brauchen wir schon alle Titel */}
      <input type="text"></input>
      <button>{"Vorschlag generieren"}</button>

{/* 
      <table>
          <tr>
          <th>Seite1</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
      </table> */}

    </div>
  );
}

export default App;
