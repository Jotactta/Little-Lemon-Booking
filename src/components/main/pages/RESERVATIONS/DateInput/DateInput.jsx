import { useEffect } from 'react'
import './DateInput.css'
import validIcon from './validIcon.jpg'
import errorIcon from './errorIcon.jpg'

function DateInput ({ className, state, setState, dispatch, name, label, min = null, max = null, errorMessage }) {
  let minDate = min
  if (minDate === 'today') { minDate = formatDate(new Date()) }

  let maxDate = max
  if (maxDate === 'today') { maxDate = formatDate(new Date()) }

  // Fuction to trasform date from 'new Date()' to the format admitted by date input
  function formatDate (date) {
    if (date === '') {
      return date
    }
    let month = ''

    if (1 + date.getMonth() > 9) {
      month = `${1 + date.getMonth()}`
    } else { month = `0${1 + date.getMonth()}` }

    let day = ''

    if (date.getDate() > 9) {
      day = `${date.getDate()}`
    } else { day = `0${date.getDate()}` }

    return `${date.getFullYear()}-${month}-${day}`
  }

  function handleChange (e) {
    if (isNaN(new Date(e.target.value.replace(/-/g, '/')).getFullYear())) {
      setState({ value: '', isValid: false })
    } else {
      setState({ value: new Date(e.target.value.replace(/-/g, '/')), isValid: true })
      dispatch({ type: new Date(e.target.value.replace(/-/g, '/')) })
    }
  }

  useEffect(() => { setState({ value: state.value, isValid: true }) }, [])
  return (
    <div className={className}>
      <label htmlFor={name} className='dateInputLabel'><h3>{label}</h3></label>

      <div className='dateInputContainer'>
        <input
          className={state.isValid === false ? 'invalidDate' : ''}
          type='date'
          id={name}
          name={name}
          value={formatDate(state.value)}
          min={minDate}
          max={maxDate}
          onChange={handleChange}
        />

        {(state.isValid === null)
          ? <></>
          : state.isValid ? <img src={validIcon} alt='Valid icon' /> : <img src={errorIcon} alt='Error icon' />}
      </div>

      {state.isValid === false && <p className='errorMessage'>{errorMessage}</p>}

    </div>
  )
}

export default DateInput
