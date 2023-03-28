import React, { useState } from 'react';
import * as DateFunctions from './dates';


const DeskCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextDay = () => {
   // console.log("Next Day")
    setCurrentDate(DateFunctions.addDays(currentDate, 1));
  }
  const prevDay = () => {
    // console.log("Previous Day")
    setCurrentDate(DateFunctions.addDays(currentDate, -1));
  }

  const dayOfWeek = DateFunctions.getDayOfWeek(currentDate);
  const dayOfMonth = DateFunctions.getDayOfMonth(currentDate);

  /* add buttons to page through - past, today, future */
  /* can page through, identify past, identify future */
  return (
  <div class="calendar">
            
    <div class="day-of-week">
      <button id="prev" className="previous" onClick={ prevDay }>--</button> 
      { dayOfWeek } 
      <button id="next" className="next" onClick={ nextDay }>++</button>
    </div>
    <hr />
    <div class="day-of-month">{ dayOfMonth }</div>
    </div>
);
};

export default DeskCalendar;
