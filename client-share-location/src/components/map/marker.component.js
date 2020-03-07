import React from 'react';
import './map.component.css';

const Marker = (props) => {
    console.log("marker comp props", props)
    const { color, title, id } = props;
    return (
        <div className="marker"
             style={{ backgroundColor: color, cursor: 'pointer'}}
             title={title}
        >
        </div>
    );
};

export default Marker;
