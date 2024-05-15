import Booking from "./Booking.jsx";

import image6 from "../../../assets/images/image6.png";

import './Reservations.css';


function Reservations({times, dispatch}) {
  return (
    <section className="booking">
      <img src={image6} alt="Restaurant table image" />

      <Booking className="booking_card" tittle="Make a reservation" times={times} dispatch={dispatch}/>
    </section>
  );
}

export default Reservations;