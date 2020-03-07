import React, {useCallback, useEffect, useState} from 'react';
import {List} from "./components/list/list.component";

import './App.css';
import MapDisplay  from "./components/map/map.component";

function App() {

    // const tmpLocations = [
    //     {
    //         text: 'Tel Aviv',
    //         lat: 32.0522381,
    //         lng: 34.7704602
    //     },
    //     {
    //         text: 'Ramat Gan',
    //         lat: 32.0861836,
    //         lng: 34.8076522
    //     },
    //     {
    //         text: 'Jerusalem',
    //         lat: 31.7767861,
    //         lng: 35.2033057
    //     }
    // ]

    const [locations, setLocations] = useState([]);


    useEffect(()=> {
        debugger
            fetch('http://localhost:1337/')
                .then(res => res.json())
                .then(data => {
                    setLocations(data)
                })
    });

    return (
    <div className="App">
              <MapDisplay locations = {locations}/>
              <List locations = {locations} />
    </div>
  );
}

export default App;
