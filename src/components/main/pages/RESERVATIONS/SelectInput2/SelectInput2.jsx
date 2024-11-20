import './SelectInput2.css'

function SelectInput2 ({ className, state, setState, options, name, label }) {
  function handleChange (e) {
    setState(e.target.value)
  }

  return (
    <div className={className}>
      <label htmlFor={name} className='selectLabel2'><h3>{label}</h3></label>
      <select id={name} onChange={handleChange} className='selectInput2'>

        {options.map((option, index) => {
          return (
            <option key={index + option} value={option}>{option}</option>
          )
        })}
      </select>

    </div>
  )
}

export default SelectInput2
