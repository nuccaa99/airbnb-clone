import React from "react";


function GuestBigSearch() {

    return (
        <div className="bigsearch-guests">
            <div className="age-container">
                <div className="age-wrapper">
                    <p className="age-title">
                        Adults
                    </p>
                    <p>
                        Ages 13 or above
                    </p>
                </div>
                <div className="quantity-wrapper">
                    <button>
                        -
                    </button>
                    <span>0</span>
                    <button>
                        +
                    </button>
                </div>
            </div>
            <div className="age-container">
                <div className="age-wrapper">
                    <p className="age-title">
                        Children
                    </p>
                    <p>
                        Ages 2-12
                    </p>
                </div>
                <div className="quantity-wrapper">
                    <button>
                        -
                    </button>
                    <span>0</span>
                    <button>
                        +
                    </button>
                </div>
            </div>
            <div className="age-container">
                <div className="age-wrapper">
                    <p className="age-title">
                        Infants
                    </p>
                    <p>
                        Under 2
                    </p>
                </div>
                <div className="quantity-wrapper">
                    <button>
                        -
                    </button>
                    <span>0</span>
                    <button>
                        +
                    </button>
                </div>
            </div>
            <div className="age-container pets">
                <div className="age-wrapper">
                    <p className="age-title pet">
                        Pets
                    </p>
                    <p>
                        Bringing a service animal?
                    </p>
                </div>
                <div className="quantity-wrapper">
                    <button>
                        -
                    </button>
                    <span>0</span>
                    <button>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GuestBigSearch;