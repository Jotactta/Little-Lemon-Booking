import { useState, useEffect } from 'react'

import LoadingScreen from '../HOME/LoadingScreen/LoadingScreen'
import Booking from './Booking.jsx'

import image6 from '../../../../assets/images/image6.png'

import './Reservations.css'

function Reservations ({ times, dispatch, successfulSubmit, submitDispatch }) {
  const [isLoading, setIsLoading] = useState('notLoad')

  useEffect(() => {
    setTimeout(() => {
      setIsLoading('load')
    }, '1500')
  }, [])
  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <main className='booking'>
        <img src={image6} alt='Restaurant table image' />
        <Booking className='booking_card' tittle='Make a reservation' times={times} dispatch={dispatch} successfulSubmit={successfulSubmit} submitDispatch={submitDispatch} />
      </main>

    </>

  )
}

export default Reservations
