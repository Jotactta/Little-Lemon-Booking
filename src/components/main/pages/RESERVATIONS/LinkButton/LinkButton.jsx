import { Link } from 'react-router-dom'

import './LinkButton.css'

function LinkButton ({ children, className, link }) {
  return (

    <Link to={link} className={className} style={{ textDecoration: 'none' }}>
      <button type='button' className='linkButton' aria-label='On Click'>
        {children}
      </button>
    </Link>

  )
}

export default LinkButton
