import './NavLink.css'

function NavLink ({ children, hoverBackground }) {
  function MouseOverBackground (e) {
    e.target.style.background = hoverBackground
    e.target.style.transition = 'all 0.2s linear'
  }
  function MouseOutBackground (e) { e.target.style.background = '' }

  return (
    <button type='button' className='navLink' onMouseOver={MouseOverBackground} onMouseOut={MouseOutBackground}>
      {children}
    </button>
  )
}

export default NavLink
