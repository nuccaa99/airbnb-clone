import React from "react";
import locationData from "./datas/locationData";
import Accomodation from "./Accomodation";
import { nanoid } from 'nanoid';

function Accomodations({ bigSearchDropdown }) {
    return (
        <div className={`${bigSearchDropdown ? "places-container darker" : "places-container"}`}>
            {locationData.places.map((item) => {
                return (
                    <Accomodation data={item} key={nanoid()} bigSearchDropdown={bigSearchDropdown} />
                )
            })}
        </div>
    )
}

export default Accomodations;