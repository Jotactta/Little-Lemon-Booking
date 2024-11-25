import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import LinkButton from './LinkButton/LinkButton.jsx'
import ActionButton from './ActionButton/ActionButton.jsx'

import image6 from '../../../../assets/images/image6.png'
import checkIcon from '../../../../assets/images/icons/check_icon.svg'
import calendarIcon from '../../../../assets/images/icons/calendar_icon.png'
import timeIcon from '../../../../assets/images/icons/time_icon.png'
import peopleIcon from '../../../../assets/images/icons/people_icon.png'
import tableIcon from '../../../../assets/images/icons/table_icon.png'
import occasionIcon from '../../../../assets/images/icons/occasion_icon.png'
import loadingGif from '../../../../assets/images/icons/loading.svg'

import './ConfirmedBooking.css'

function ConfirmedBooking ({ submitDispatch }) {
  useEffect(() => {
    submitDispatch({ isSubmitted: false, submitData: false })
    setTimeout(() => {
      setIsLoading(false)
    }, '5000')
  }, [])

  const [isLoading, setIsLoading] = useState(true)
  const [infoChanger, setInfoChanger] = useState(true)

  const reserveData = useLocation()

  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const day = reserveData.state.date.getDay()

  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const month = reserveData.state.date.getMonth()

  const dayNumber = reserveData.state.date.getDate()

  let personPeople = 'people'

  if (reserveData.state.guests === 1) {
    personPeople = 'person'
  }
  return (
    <main className='conf_booking'>
      <img src={image6} alt='Restaurant table image' />
      <section className='cb_card'>
        {isLoading === true
          ? <div className='loadingScreen'>
            <img src={loadingGif} className='loading_gif' alt='loading animation' />
            <h3>Cooking, please wait...</h3>

          </div>
          : infoChanger === true
            ? <article className='cb_message'>
              <div className='confirmMessage'>
                <img src={checkIcon} className='confirmMessageIcon' alt='check icon' />
                <h1>Booking Confirmed!</h1>
              </div>

              <ActionButton className='cb_button' setState={setInfoChanger}>Show dinner details
              </ActionButton>
            </article>

            : <article className='dinner_details'>
              <h1>Dinner Details</h1>

              <div className='reserve_info'>
                <div>
                  <div className='reserve-info-item'>
                    <img src={calendarIcon} />
                    <h3>{DAYS[day]}, {MONTHS[month]} {dayNumber}</h3>

                  </div>

                  <div className='reserve-info-item'>
                    <img src={peopleIcon} />
                    <h3>{reserveData.state.guests} {personPeople}</h3>

                  </div>

                  <div className='reserve-info-item'>
                    <img src={occasionIcon} />
                    <h3>{reserveData.state.occasion}</h3>

                  </div>

                </div>

                <div>

                  <div className='reserve-info-item'>
                    <img src={timeIcon} />
                    <h3>{reserveData.state.time}</h3>

                  </div>

                  <div className='reserve-info-item'>
                    <img src={tableIcon} />
                    <h3>{reserveData.state.table}</h3>

                  </div>

                </div>

              </div>

              <LinkButton className='back_button' link='/'>Go Back Home</LinkButton>

            </article>}

      </section>

    </main>

  )
}

export default ConfirmedBooking
