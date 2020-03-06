import React from 'react'
import './list.component.css'

export const List = ({locations}) => {

    return (
        <div> {
            locations.length == 0 ?
            <h2>Please mark a location on the map</h2> :

            <table>
            <tr>
            <th>Text</th>
            <th>Latitude</th>
            <th>Longitude</th>
            </tr>
            {locations.map(item =>
                <tr key = { item }>
                    <td>{ item.text }</td>
                    <td>{ item.lat }</td>
                    <td>{ item.lng }</td>
                </tr>)}
            </table>
        }
        </div>
    )
}
