import { useState, useEffect } from 'react'
import LoadingScreen from '../HOME/LoadingScreen/LoadingScreen'

function Menu () {
  const [isLoading, setIsLoading] = useState('notLoad')

  useEffect(() => {
    setTimeout(() => {
      setIsLoading('load')
    }, '1000')
  }, [])
  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <main>
        <h1>MENU</h1>
      </main>

    </>

  )
}

export default Menu
