import React, { useCallback, useState} from 'react';
import {List} from "./components/list/list.component";

import './App.css';
import MapDisplay from "./components/map/map.component";
import {GoogleApiWrapper} from "google-maps-react";

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
          <div className="App-content">
          {/*<MapDisplay handleListChange = { handleListChange } />*/}
              <div className="google-map">
                  <MapDisplay/>
              </div>
              <div>
                  <button onClick={handleListChange}>update locations</button>
                  <List locations = {locations} />
              </div>
          </div>
      </header>
    </div>
  );
}

export default App;
