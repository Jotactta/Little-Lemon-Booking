import { Link } from "react-router-dom"


import './Button.css'

function Button({children, link, className}) {
    return (
      <div className={className}>
        <Link to={link} className="button" aria-label="On Click">{children}</Link>
      </div>
    );
  }

export default Button;