import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";
import LocationFilter from "./LocationFilter";
import Locations from "./Locations";



function App() {
    const [bigSearchDropdown, setBigSearchDropdown] = useState(false);
    const [locationBigSearch, setLocationBigSearch] = useState(false);
    const [checkinBigSearch, setCheckinBigSearch] = useState(false);
    const [checkoutBigSearch, setCheckoutBigSearch] = useState(false);
    const [guestBigSearch, setGuestBigSearch] = useState(false);

    const toggleDropdown = () => {
        setBigSearchDropdown(!bigSearchDropdown)
    }
    const locationClicked = () => {
        setLocationBigSearch(true)
        setCheckinBigSearch(false)
        setCheckoutBigSearch(false)
        setGuestBigSearch(false)

    }
    const checkinClicked = () => {
        setCheckinBigSearch(true)
        setCheckoutBigSearch(false)
        setLocationBigSearch(false)
        setGuestBigSearch(false)
    }

    const checkoutClicked = () => {
        setCheckoutBigSearch(true)
        setCheckinBigSearch(false)
        setLocationBigSearch(false)
        setGuestBigSearch(false)
    }

    const guestClicked = () => {
        setGuestBigSearch(true)
        setCheckoutBigSearch(false)
        setCheckinBigSearch(false)
        setLocationBigSearch(false)

    }


    return (
        <>
            <Header
                setBigSearchDropdown={setBigSearchDropdown}
                bigSearchDropdown={bigSearchDropdown}
                toggleDropdown={toggleDropdown}
                locationBigSearch={locationBigSearch}
                checkoutClicked={checkoutClicked}
                checkinClicked={checkinClicked}
                guestBigSearch={guestBigSearch}
                guestClicked={guestClicked}
                checkinBigSearch={checkinBigSearch}
                checkoutBigSearch={checkoutBigSearch}
                locationClicked={locationClicked}
            />
            <LocationFilter />
            <Locations bigSearchDropdown={bigSearchDropdown} />
        </>
    )
}

export default App;