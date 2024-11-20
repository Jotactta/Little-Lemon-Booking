import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import DateInput from './DateInput/DateInput.jsx'
import SelectInput from './SelectInput/SelectInput.jsx'
import SelectInput2 from './SelectInput2/SelectInput2.jsx'

import './Booking.css'

export let disableSubmit = false

export let buttonClass = ''

export const DATE_ERROR_MESSAGE = 'Please select a date.'
export const TIME_ERROR_MESSAGE = 'No tables available this day.'

export function Booking ({ className, tittle, times, dispatch, successfulSubmit, submitDispatch }) {
  const [guests, setGuests] = useState(1)
  const [date, setDate] = useState({ value: new Date(), isValid: null })
  const [time, setTime] = useState({ value: times[0], isValid: null })

  const [table, setTable] = useState('Indoor Table')
  const [occasion, setOccasion] = useState('None')

  const guestsOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const tableOptions = ['Indoor Table', 'Outdoor Table']
  const occasionOptions = ['None', 'Birthday', 'Anniversary']

  const reserveData = {
    guests,
    date: date.value,
    time: time.value,
    table,
    occasion
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submitDispatch({ isSubmitted: true, submitData: reserveData })
  }

  const navigate = useNavigate()

  useEffect(() => {
    if (successfulSubmit) {
      navigate('/confirmed_booking', { state: reserveData })
    }
  }, [successfulSubmit])

  if (date.isValid === true && time.isValid === true) {
    disableSubmit = false
    buttonClass = ''
  } else {
    disableSubmit = true
    buttonClass = 'disabled'
  }

  return (
    <section className={className}>
      <h1 className='booking_tittle'>{tittle}</h1>

      <form className='booking_form' onSubmit={handleSubmit}>

        <SelectInput2
          className='guestsInput'
          state={guests}
          setState={setGuests}
          name='guests'
          label='Number of guests'
          options={guestsOptions}
        />

        <div className='form_group'>
          <div>
            <DateInput
              className='dateInput'
              state={date}
              setState={setDate}
              dispatch={dispatch}
              name='dateInput'
              label='Choose date'
              min='today'
              max={null}
              errorMessage={DATE_ERROR_MESSAGE}
            />

            <SelectInput
              className='reserveTimeInput'
              state={time}
              date={date}
              setState={setTime}
              name='reserve-time'
              label='Choose time'
              options={times}
              errorMessage={TIME_ERROR_MESSAGE}
            />

          </div>

          <div>
            <SelectInput2
              className='tableInput'
              state={table}
              setState={setTable}
              name='table'
              label='Table'
              options={tableOptions}
            />

            <SelectInput2
              className='occasionInput'
              state={occasion}
              setState={setOccasion}
              name='occasion'
              label='Occasion'
              options={occasionOptions}
            />

          </div>
        </div>

        <button type='submit' aria-label='On Click' className={`reserveButton ${buttonClass}`} disabled={disableSubmit}>Reserve</button>

      </form>
    </section>
  )
}

export default Booking
