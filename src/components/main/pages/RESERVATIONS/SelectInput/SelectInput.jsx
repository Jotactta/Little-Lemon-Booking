import { useEffect } from 'react'
import './SelectInput.css'
import validIcon from './validIcon.jpg'
import errorIcon from './errorIcon.jpg'

function SelectInput ({ className, state, date, setState, options, name, label, errorMessage }) {
  useEffect(() => {
    if (options[0] === 'Not Available') {
      setState({ value: options[0], isValid: false })
    } else { setState({ value: options[0], isValid: true }) }
  }, [date])

  function handleChange (e) {
    if (e.target.value === 'Not Available') {
      setState({ value: e.target.value, isValid: false })
    } else { setState({ value: e.target.value, isValid: true }) }
  }

  return (
    <div className={className}>
      <label htmlFor={name} className='selectLabel'><h3>{label}</h3></label>
      <div>

        <select
          id={name}
          onChange={(e) => { handleChange(e) }}
          className={state.isValid === false ? 'notAvailable' : ''}
          value={state.value}
        >

          {options.map((option, index) => {
            return (
              <option key={index + option} value={option}>{option}</option>
            )
          })}
        </select>

        {(state.isValid === null)
          ? <></>
          : state.isValid ? <img src={validIcon} alt='Valid icon' /> : <img src={errorIcon} alt='Error icon' />}
      </div>

      {state.isValid === false && <p className='errorMessage'>{errorMessage}</p>}

    </div>
  )
}

export default SelectInput
