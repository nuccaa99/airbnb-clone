import React from "react";
import earth from "../assets/earth.jpg";
import europe from "../assets/europe.jpg";
import italy from "../assets/italy.jpg";
import turkey from "../assets/turkey.jpg";
import samerica from "../assets/samerica.jpg";
import usa from "../assets/usa.jpg";
import clock from "../assets/clock.png";

function LocationBigSearch() {
    return (
        <div className="bigsearch-location">
            <div className="bigsearch-recent">
                <p className="recent-title">Recent searches</p>
                <div className="recent-searches">
                    <img src={clock} alt="clock-icon" className="clock-icon" />
                    <div>
                        <p className="recent-stay-location">Kakheti - Stays</p>
                        <p className="recent-stay-duration">Any week</p>
                    </div>
                </div>
            </div>
            <div >
                <p className="region-title">Search by region</p>
                <div className="bigsearch-regions">
                    <div>
                        <img src={earth} alt="earth-map" />
                        <p>I'm flexible</p>
                    </div>
                    <div>
                        <img src={europe} alt="europ-map" />
                        <p>Europe</p>
                    </div>
                    <div>
                        <img src={samerica} alt="samerica-map" />
                        <p>South America</p>
                    </div>
                    <div>
                        <img src={usa} alt="usa-map" />
                        <p>United States</p>
                    </div>
                    <div>
                        <img src={italy} alt="italy-map" />
                        <p>Italy</p>
                    </div>
                    <div>
                        <img src={turkey} alt="turkey-map" />
                        <p>Turkey</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationBigSearch;