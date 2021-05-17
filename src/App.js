import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import './App.css';
import { getAllSongs, getSongSuggestions } from "./databasehandler"


function App() {
  const [selectedSong, setSelectedSong] = useState("");
  const [suggestionResults, setSuggestionResults] = useState();
  let allSongs = Object.values(getAllSongs());
  console.log(allSongs)

  let search = (nameKey, myArray) => {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].titel === nameKey) {
        return myArray[i];
      }
    }
  }

  let calculateSuggestion = (songInformations) => {



   }

  let generateSuggestionDisplay = () => {
    let currentSongInformations = search(selectedSong, allSongs)
    console.log(currentSongInformations)


    setSuggestionResults(<h1>test</h1>)
    setSelectedSong( "" )
    console.log("generateSuffestion fetr")
  }

  console.log(suggestionResults)
  console.log(selectedSong)
  return (
    <div className="App">
      <h1>Songtiteleingabe:</h1>

      <Autocomplete
        id="combo-box-demo"
        options={allSongs}
        getOptionLabel={(option) => option.titel}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        onChange={(e) => { setSelectedSong(e.target.innerHTML) }}
      />
      <button
        onClick={() => { generateSuggestionDisplay() }}>
        {"Vorschlag generieren"}
      </button>

      {suggestionResults}


    </div>
  );
}

export default App;
