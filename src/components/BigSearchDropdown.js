import React, { useState, forwardRef } from "react";
import searchwhite from "./assets/searchwhite.png";
// import search from "./assets/search.png";
import LocationBigSearch from "./LocationBigSearch";
import DurationBigSearch from "./DurationBigSearch";
import GuestBigSearch from "./GuestsBigSearch";

const BigSearchDropdown = forwardRef(({ checkinBigSearch, checkoutBigSearch, guestBigSearch,
    locationBigSearch, locationClicked, checkinClicked,
    checkoutClicked, guestClicked }, ref) => {

    const [stDate, setStDate] = useState("Add dates");
    const [endDate, setEndDate] = useState("Add dates");

    const handleStDateClick = (date) => {
        setStDate(date)
    }
    const handleEndDateClick = (date) => {
        setEndDate(date)
    }

    return (
        <div ref={ref} className="bigSearch-dropdown-container">
            <div className="questions-btns-container">
                <div className="question-buttons">
                    <button className={`${locationBigSearch ? "where-btn in-focus" : "where-btn"}`} onClick={locationClicked}>
                        <p className="question-word">Where</p>
                        <input type="text" placeholder="Search destinations"></input>
                    </button>
                    <button className={`${checkinBigSearch ? "when-btn in-focus" : "when-btn"}`} onClick={checkinClicked}>
                        <p className="question-word">Check in</p>
                        <p>{stDate}</p>
                    </button>
                    <button className={`${checkoutBigSearch ? "when-btn in-focus" : "when-btn"}`} onClick={checkoutClicked}>
                        <p className="question-word">Check out</p>
                        <p>{endDate}</p>
                    </button>
                    <button className={`${guestBigSearch ? "who-btn in-focus" : "who-btn"}`} onClick={guestClicked}>
                        <div className="who-btn-question">
                            <p className="question-word">Who</p>
                            <p>Add guests</p>
                        </div>
                        <div className="search-btn">
                            <img src={searchwhite} alt="search icon" />
                            <p>Search</p>
                            {/* <img src={search} alt="search-logo" className="search-icon" /> */}
                        </div>
                    </button>

                </div>
            </div>
            <div className="bigsearch-container">
                {locationBigSearch &&
                    <LocationBigSearch />}
                {guestBigSearch &&
                    <GuestBigSearch />}
                {(checkinBigSearch || checkoutBigSearch) &&
                    <DurationBigSearch
                        handleStDateClick={handleStDateClick}
                        handleEndDateClick={handleEndDateClick}
                    />}
            </div>
        </div>
    )
})

export default BigSearchDropdown;