import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

import error_icon from "../../../assets/images/icons/error_icon.png";

import './Booking.css';

export let disableSubmit = false;

export let buttonClass = "submit_button";
export let dateClass = "date";
export let timeClass = "time";
export let dateErrorClass = "not_error"
export let timeErrorClass = "not_error"


export const DATE_ERROR_MESSAGE = "You can't select a past day. Please select another day"
export const TIME_ERROR_MESSAGE = "No tables available this day. Please select another day"

export function Booking({ className, tittle, times, dispatch, successfulSubmit, submitDispatch }) {

  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(times[0]);
  const [table, setTable] = useState("Indoor Table");
  const [occasion, setOccasion] = useState("None");

  const reserveData = {
    guests: guests,
    date: date,
    time: time,
    table: table,
    occasion: occasion
  }

  const handleChange = (e) => {
    setDate(new Date(e.target.value.replace(/-/g, '\/')));
    dispatch({ type: new Date(e.target.value.replace(/-/g, '\/')) })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitDispatch({ isSubmitted: true, submitData: reserveData });
  }

  function dateChecker(day) {
    const result = (day.getFullYear() * 20) + ((1 + day.getMonth() * 100)) + (day.getDate())
    return result
  }

  const navigate = useNavigate();

  useEffect(() => {

    if (successfulSubmit) {
      navigate("/confirmed_booking", { state: { data: reserveData } });
    }

  }, [successfulSubmit])

  useEffect(() => { setTime(times[0]) }, [date])

  const today = dateChecker(new Date());
  const datePicked = dateChecker(date);
  if (today > datePicked) {
    dateErrorClass = 'error';
    buttonClass = 'submit_button_disabled'
    dateClass = 'date_error'

  }
  else {
    dateErrorClass = 'not_error'
    dateClass = 'date'
  }

  if (times[0] == "Not Available") {
    timeErrorClass = 'error';
    buttonClass = 'submit_button_disabled'
    timeClass = 'time_error'

  }
  else {
    timeErrorClass = 'not_error'
    timeClass = 'time'

  }

  if (dateErrorClass == 'not_error' && timeErrorClass == 'not_error') {
    disableSubmit = false
    buttonClass = 'submit_button'
  }
  else {
    disableSubmit = true
    buttonClass = 'submit_button_disabled'

  }



  return (
    <section className={className}>
      <h1 className='booking_tittle'>{tittle}</h1>

      <form className='booking_form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="guests"><h3>Number of guests</h3></label>
          <select id="guests" name='guests' value={guests} onChange={(e) => setGuests(e.target.value)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div>


        <div className='form_group'>
          <div>
            <label htmlFor="res-date"><h3>Choose date</h3></label>
            <input type="date" id="res-date" className={dateClass} onChange={(e) => handleChange(e)} />

            <div className={dateErrorClass}>
              <img src={error_icon} className='error_icon' alt="Error icon" />
              <p className='error_message'>{DATE_ERROR_MESSAGE}</p>
            </div>

          </div>


          <div>
            <label htmlFor="res-time"><h3>Choose time</h3></label>
            <select id="res-time" className={timeClass} name='time' value={time} onChange={(e) => setTime(e.target.value)}>

              {
                times.map(ava_time => {
                  return (
                    <option key={ava_time} value={ava_time}>{ava_time}</option>
                  )
                })}

            </select>

            <div className={timeErrorClass}>
              <img src={error_icon} className='error_icon' alt="Error icon" />
              <p className='error_message'>{TIME_ERROR_MESSAGE}</p>
            </div>

          </div>


          <div>
            <label htmlFor="table"><h3>Table</h3></label>
            <select id="table" name='table' value={table} onChange={(e) => setTable(e.target.value)}>
              <option value="Indoor Table">Indoor Table</option>
              <option value="Outdoor Table">Outdoor Table</option>
            </select>
          </div>

          <div>
            <label htmlFor="occasion"><h3>Occasion</h3></label>
            <select id="occasion" name='occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)}>
              <option value="None">None</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>


        </div>


        <button type='submit' aria-label='On Click' className={buttonClass} disabled={disableSubmit}>Reserve</button>


      </form>
    </section>
  );
}

export default Booking;