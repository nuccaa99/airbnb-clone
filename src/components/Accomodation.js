import React from "react";
import star from "./assets/star.png";

function Accomodation({ data, LocationDropdown }) {
    return (
        <div className="place-container">
            <div className="place-img-wrapper">
                <img src={data.url} alt="place-img" className={`${LocationDropdown ? "place-img darker" : "place-img"}`} />
            </div>
            <div className="place-location-rating">
                <div className="place-location">
                    <span>{data.country}, </span>
                    <span>{data.city}</span>
                </div>
                <div className="place-rating">
                    <img src={star} alt="star" className="star-icon" />
                    <span>{data.rating}</span>
                </div>
            </div>
            <p>{data.info}</p>
            <span className="price">{data.price}</span>
            <span> night</span>
        </div>
    )
}

export default Accomodation;