import React, { useState } from "react";
import logo from "./assets/airbnb-logo.png";
import languages from "./assets/languages.png";
import ProfileDropDown from "./ProfileDropDown";
import search from "./assets/search.png";
import BigSearchDropdown from "./SearchContainer/BigSearchDropdown";
import useOutsideClick from "./hooks/useOutsideClick";


function Header({ bigSearchDropdown, toggleDropdown, setBigSearchDropdown, locationBigSearch, guestBigSearch, checkinBigSearch, checkoutBigSearch,
    locationClicked, checkinClicked, checkoutClicked, guestClicked }) {

    const [dropdown, setDropdown] = useState(false);

    const handleDropDownClick = () => {
        setDropdown(!dropdown);
    }
    const handleClickOutside = () => {
        setDropdown(false);
       
    };

    const handleClickOutsideBigSearch = () => {
        setBigSearchDropdown(false);
    }

    const ref = useOutsideClick(handleClickOutside);
    const ref2 = useOutsideClick(handleClickOutsideBigSearch);

    return (
        <div>
            <header className={`${bigSearchDropdown ? "additional-search-header" : ""}`}>
                <a href="/"><img src={logo} alt="airbnb-logo" className="airbnb-logo" /></a>
                {!bigSearchDropdown &&
                    <div className="header-search" onClick={toggleDropdown}>
                        <button className="header-search-btn where" onClick={locationClicked}>
                            <div className="header-search-btn-where">Anywhere</div>
                        </button>
                        <button className="header-search-btn when" onClick={checkinClicked}>
                            <div className="header-search-btn-when">Any week</div>
                        </button>
                        <button className="header-search-btn who" id="add-guest-btn" onClick={guestClicked}>
                            <p>Add guests</p>
                            <img src={search} alt="search-logo" className="search-icon" />
                        </button>
                    </div>
                }
                <div className="profile-container">
                    <p>Airbnb your home</p>
                    <img src={languages} alt="languages-logo" className="languages-logo" />
                    <ProfileDropDown ref={ref}
                        open={dropdown} handleDropDownClick={handleDropDownClick} />
                </div>
            </header >

            {bigSearchDropdown &&
                <BigSearchDropdown ref={ref2}
                    locationBigSearch={locationBigSearch}
                    guestBigSearch={guestBigSearch}
                    checkinClicked={checkinClicked}
                    checkoutClicked={checkoutClicked}
                    locationClicked={locationClicked}
                    checkinBigSearch={checkinBigSearch}
                    checkoutBigSearch={checkoutBigSearch}
                    guestClicked={guestClicked}
                />
            }

        </div>
    )
}

export default Header;