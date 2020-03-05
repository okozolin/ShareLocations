import React, { useCallback, useState} from 'react';
import {List} from "./components/list/list.component";

import './App.css';
import {MapDisplay} from "./components/map/map.component";

function App() {

    const tmpLocations = ['Tel Aviv', 'Ramat Gan', 'Jerusalem']

    const [locations, setLocations] = useState([]);

    const handleListChange = useCallback(
        (event) => {
            const query = event.target.value;

            // fetch from API
        //     fetch(`http://maps.google.com/api?q=${query}`)
        //         .then(res => res.json())
        //         .then(data => setLocations(data.map(formatLocations)));
            setLocations(tmpLocations)
        },
        []
    );

    return (
    <div className="App">
      <header className="App-header">
          <MapDisplay handleListChange = { handleListChange } />
          <List locations = {locations} />
      </header>
    </div>
  );
}

export default App;
