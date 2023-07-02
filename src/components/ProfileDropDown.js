import { React, forwardRef } from "react";
import menu from "./assets/menu.png";
import profile from "./assets/profile.png";


const ProfileDropDown = forwardRef(({ open, handleDropDownClick }, ref) => {
    return (
        <div ref={ref}>
            <button className="profile-btn" onClick={handleDropDownClick} >
                <img src={menu} alt="menu-logo" className="menu-logo" />
                <img src={profile} alt="profile-pic" className="profile-pic" />
            </button>
            <ul className={`dropdown-list ${open ? "" : "invisible"}`}>
                <li className="bold"> Messages </li>
                <li className="bold"> Trips </li>
                <li className="border bold" id="wishlists"> Wishlists </li>
                <li> Airbnb your home </li>
                <li> Refer a host </li>
                <li className="border" id="account"> Account </li>
                <li> Help </li>
                <li id="log-out"> Log out </li>
            </ul>
        </div>

    )
})

export default ProfileDropDown;