import React from 'react'
import './list.component.css'

export const List = ({locations}) => {

    return (
        <div> {
            locations.length == 0 ?
            <h2>Please mark a location on the map</h2> :

            <table>
                <thead>
                    <tr>
                        <th>Marker</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                </thead>
                <tbody>
                    {locations.map((item, index) =>
                        <tr key = { index }>
                            <td>{ item.text }</td>
                            <td>{ item.lat }</td>
                            <td>{ item.lng }</td>
                        </tr>)}
                </tbody>
            </table>
        }
        </div>
    )
}
