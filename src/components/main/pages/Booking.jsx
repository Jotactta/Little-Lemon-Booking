import { useState, useRef } from 'react';

import './Booking.css';


function Booking({ className, tittle }) {

  const [guests, setGuests] = useState(1);
  const date = useRef(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState("17:00");
  const [table, setTable] = useState("Indoor Table");
  const [occasion, setOccasion] = useState("None");



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`form submited
    guests= ${guests}
    date= ${date.current}
    time= ${time}
    table= ${table}
    occasio=${occasion}`);
  }

  return (
    <div className={className}>
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
            <input type="date" id="res-date" className='date' min={date.current} onChange={(e) => date.current = (e.target.value)} />
          </div>


          <div>
            <label htmlFor="res-time"><h3>Choose time</h3></label>
            <select id="res-time" name='time' value={time} onChange={(e) => setTime(e.target.value)}>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
            </select>
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
              <option value="Anniersary">Anniversary</option>
            </select>
          </div>


        </div>


        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}

export default Booking;