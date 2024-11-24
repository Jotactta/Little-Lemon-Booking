import { useState } from 'react'

import LoadingScreen from './LoadingScreen/LoadingScreen'
import Booking from './Booking.jsx'

import image6 from '../../../../assets/images/image6.png'

import './Reservations.css'

function Reservations ({ times, dispatch, successfulSubmit, submitDispatch }) {
  const [isLoading, setIsLoading] = useState('notLoad')

  function handleLoad () {
    setTimeout(() => {
      setIsLoading('load')
    }, 800)
  }

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <main className='booking'>
        <img src={image6} className={`backgroundImage ${isLoading}`} alt='Restaurant table image' onLoad={handleLoad} />
        <Booking className={`booking_card ${isLoading}`} tittle='Make a reservation' times={times} dispatch={dispatch} successfulSubmit={successfulSubmit} submitDispatch={submitDispatch} />
      </main>

    </>

  )
}

export default Reservations
