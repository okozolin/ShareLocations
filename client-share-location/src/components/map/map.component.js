
import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapDisplay extends Component {
    render() {

        return (
            <Map
                google={this.props.google}
                zoom={16}
                style={mapStyles}
                initialCenter={{
                    lat: 32.0522381,
                    lng: 34.7704602
                }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDMuj0_dl564YZr7DtlL3uuZzNDqqN18bg'
})(MapDisplay);
