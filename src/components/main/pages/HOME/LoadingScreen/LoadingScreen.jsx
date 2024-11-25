import './LoadingScreen.css'
import loadingGif from './loadingLemon.svg'

function LoadingScreen ({ isLoading }) {
  document.body.style.overflow = 'hidden'
  if (isLoading === 'load') {
    document.body.style.overflow = 'auto'
    return (<></>)
  } else {
    return (
      <div className='loadingPage'>
        <img src={loadingGif} alt='Loading gif' />
      </div>
    )
  }
}

export default LoadingScreen
