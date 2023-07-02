import React from "react";
import locationData from "./datas/locationData";
import Location from "./Location";
import { nanoid } from 'nanoid';

function Places({ locationDropdown }) {

    return (
        <div className={`${locationDropdown ? "places-container darker" : "places-container"}`}>
            {locationData.places.map((item) => {
                return (
                    <Location data={item} key={nanoid()} locationDropdown={locationDropdown} />
                )
            })}
        </div>
    )
}

export default Places;