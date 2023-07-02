import React from "react";


function LocationFilterPlace(props) {
    return (
        <div className="filter-place">
            <img src={props.place.url} alt="filter-place-icon" />
            <p>{props.place.name}</p>
        </div>
    )
}

export default LocationFilterPlace;