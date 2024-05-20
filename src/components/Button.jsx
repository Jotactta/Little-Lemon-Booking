import { Link } from "react-router-dom"


import './Button.css'

function Button({children, link, className}) {
    return (
      <div className={className}>
        <Link to={link} className="button">{children}</Link>
      </div>
    );
  }

export default Button;