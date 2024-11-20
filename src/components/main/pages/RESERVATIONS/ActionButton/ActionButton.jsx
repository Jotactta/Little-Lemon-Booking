import './ActionButton.css'

function ActionButton ({ children, className, setState }) {
  function handleClick () { setState(false) }
  return (
    <div className={className} onClick={handleClick}>
      <button type='button' className='ActionButton'>{children}</button>
    </div>
  )
}

export default ActionButton
