import React, { useState } from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker.component';

const MapDisplay = (props) => {
    const { locations } = props
    const [center, setCenter] = useState({lat: 32.0522381, lng: 34.7704602 });
    const [zoom, setZoom] = useState(16);
    const [marker, setMarker] = useState([{}])

    const addMarker = (marker) => {
        console.log("addMarker")
    }

    const getMarkers = () => {
        console.log("getMarkers")
    }

    const deleteMarker = (id) => {
        console.log("deleteMarker")
    }
    // click on map to add marker
    const _onClick = ({x, y, lat, lng, event}) => {
        // create new marker
        setMarker({
            text: 'new locations',
            lat: lat,
            lng: lng

        })
        // add to list of markers
        locations.push(marker)
        console.log("marker", marker)
        console.log("locations", locations)
    }

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMap
                bootstrapURLKeys={{ key: 'AIzaSyDMuj0_dl564YZr7DtlL3uuZzNDqqN18bg' }}
                defaultCenter={center}
                zoom ={zoom}
                onClick={_onClick}
            >
                {locations.map((marker,i) =>
                   <Marker
                       key={i}
                       lat={marker.lat}
                       lng={marker.lng}
                       name={marker.text}
                       color="red"
                   />
                )}
            </GoogleMap>
        </div>
    );
}

export default MapDisplay;
