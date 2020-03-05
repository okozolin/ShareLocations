import React from 'react'
import "./map.component.css";


export const MapDisplay = ({ handleListChange }) => {

    return (
        <div>
            <button onClick={ handleListChange }>Update locations</button>
        </div>
    )
}
