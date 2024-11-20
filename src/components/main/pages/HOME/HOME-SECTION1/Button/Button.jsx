import { Link } from 'react-router-dom'

import './Button.css'

function Button ({ children, link, className, isLoaded }) {
  return (
    <div className={`${className} ${isLoaded}`}>
      <Link to={link} className='sec1Button' aria-label='On Click'>{children}</Link>
    </div>
  )
}

export default Button
