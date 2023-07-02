import React from "react";
import locationfilterData from "./datas/locationfilterData";
import FilterPlace from "./LocationFilterPlace";
import { nanoid } from 'nanoid';
import filter from "./assets/filter.png";

function LocationFilter() {
    return (

        <div className="filter-places-container">
            {locationfilterData.places.map((item) => {
                return (
                    <FilterPlace place={item} key={nanoid()} />
                )
            })}
            <button className="filter-btn">
                <img src={filter} alt="filter-icon" className="filter-icon" />
                <p>Filter</p>
            </button>
        </div>

    )
}

export default LocationFilter;