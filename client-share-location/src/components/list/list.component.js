import React from 'react'

export const List = ({locations}) => {

    return (
        <div>
            {locations.map(item => <div key={item}>{item}</div>)}
        </div>
    )
}
