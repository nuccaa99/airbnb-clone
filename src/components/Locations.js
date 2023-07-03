import React from "react";
import locationData from "./datas/locationData";
import Location from "./Location";
import { nanoid } from 'nanoid';

function Locations({ bigSearchDropdown }) {
    console.log(bigSearchDropdown)
    return (
        <div className={`${bigSearchDropdown ? "places-container darker" : "places-container"}`}>
            {locationData.places.map((item) => {
                return (
                    <Location data={item} key={nanoid()} bigSearchDropdown={bigSearchDropdown} />
                )
            })}
        </div>
    )
}

export default Locations;