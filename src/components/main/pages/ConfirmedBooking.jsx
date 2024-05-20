import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

import check_icon from "../../../assets/images/icons/check_icon.png";
import calendar_icon from "../../../assets/images/icons/calendar_icon.png";
import time_icon from "../../../assets/images/icons/time_icon.png";
import people_icon from "../../../assets/images/icons/people_icon.png";
import table_icon from "../../../assets/images/icons/table_icon.png";
import occasion_icon from "../../../assets/images/icons/occasion_icon.png";

import './ConfirmedBooking.css';


function ConfirmedBooking({ submitDispatch }) {

  useEffect(() => {

    submitDispatch({ isSubmitted: false, submitData: false });

  }, [])


  const { state } = useLocation();

  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = state.data.date.getDay();

  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = state.data.date.getMonth();

  const dayNumber = state.data.date.getDate();

  let personPeople = 'people';

  if (state.data.guests == 1) {
    personPeople = 'person';
  }
  return (
    <section className="conf_booking">
      <article className="book_conf">
        <img src={check_icon} />
        <h1>Booking Confirmed!</h1>

      </article>

      <article className="dinner_details">
        <h2>Dinner Details</h2>

        <div>
          <div>
            <img src={calendar_icon} />
            <h3>{DAYS[day]}, {MONTHS[month]} {dayNumber}</h3>

          </div>

          <div>
            <img src={time_icon} />
            <h3>{state.data.time}</h3>

          </div>

          <div>
            <img src={people_icon} />
            <h3>{state.data.guests} {personPeople}</h3>

          </div>

          <div>
            <img src={table_icon} />
            <h3>{state.data.table}</h3>

          </div>

          <div>
            <img src={occasion_icon} />
            <h3>{state.data.occasion}</h3>

          </div>

        </div>
      </article>


    </section>
  );
}

export default ConfirmedBooking;