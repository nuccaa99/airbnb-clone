import { React, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function DurationBigSearch({ handleStDateClick, handleEndDateClick }) {



    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const [dateActive, setDateActive] = useState(true)
    const [monthsActive, setMonthsActive] = useState(false)
    const [flexActive, setFlexActive] = useState(false)

    const [stDay, setStDay] = useState(new Date())


    let dateTomorrow = new Date();
    dateTomorrow.setDate(stDay.getDate() + 1);


    return (
        <div className="bigsearch-duration">
            <div className="tablist">
                <button className={`tablist-item ${dateActive}`}
                    onClick={() => { setDateActive(true); setMonthsActive(false); setFlexActive(false) }}>Dates</button>
                <button className={`tablist-item ${monthsActive}`}
                    onClick={() => { setMonthsActive(true); setDateActive(false); setFlexActive(false) }}>Months</button>
                <button className={`tablist-item ${flexActive}`}
                    onClick={() => { setFlexActive(true); setMonthsActive(false); setDateActive(false) }}>Flexible</button>
            </div>
            <div className="calendar-container">
                <Calendar defaultValue={stDay}
                    minDate={new Date()}
                    onClickDay={(day) => ((handleStDateClick(`${month[day.getMonth()]} ${day.getDate()}`), setStDay(day)))}
                />
                <Calendar defaultValue={dateTomorrow}
                    minDate={dateTomorrow}
                    onClickDay={(day) => handleEndDateClick(`${month[day.getMonth()]} ${day.getDate()}`)} />
            </div>
        </div>
    )
}

export default DurationBigSearch;