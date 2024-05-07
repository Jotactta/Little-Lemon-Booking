import './Button.css'

function Button({children, link, className}) {
    return (
      <div className={className}>
        <div className='button'>
        <a href={link} target='_blank'>{children}</a>
        </div>
      </div>
    );
  }

export default Button;