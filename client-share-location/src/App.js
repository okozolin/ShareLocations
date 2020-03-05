import React, {useState} from 'react';
import {List} from "./components/list/list.component";

import './App.css';

function App() {

    const tmpLocations = ['Tel Aviv', 'Ramat Gan', 'Jerusalem']

    const [locations, setLocations] = useState([]);

    return (
    <div className="App">
      <header className="App-header">
          <List locations = {tmpLocations}></List>
      </header>
    </div>
  );
}

export default App;
