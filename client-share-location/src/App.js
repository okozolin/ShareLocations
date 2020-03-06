import React, { useCallback, useState} from 'react';
import {List} from "./components/list/list.component";

import './App.css';
import MapDisplay from "./components/map/map.component";
import {GoogleApiWrapper} from "google-maps-react";

function App() {

    const tmpLocations = [
        {
            text: 'Tel Aviv',
            lat: 32.0522381,
            lng: 34.7704602
        },
        {
            text: 'Ramat Gan',
            lat: 32.0861836,
            lng: 34.8076522
        },
        {
            text: 'Jerusalem',
            lat: 31.7767861,
            lng: 35.2033057
        }
    ]

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
        {/*<MapDisplay handleListChange = { handleListChange } />*/}
          <div className="google-map">
              <MapDisplay/>
          </div>
          <div>
              <button onClick={handleListChange}>update locations</button>
              <List locations = {locations} />
          </div>
    </div>
  );
}

export default App;
