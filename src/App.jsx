import { Nav } from './components/navigation-bar/Nav.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { useReducer } from 'react';

import './App.css'

function fetchAPI(date) {
  let probChanger = 0.25;

  const allTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const result = [];

  if (date.getDay() == 5 || date.getDay() == 6) {
    probChanger = -0.3;
  }

  for (var time of allTimes) {
    if (Math.random() < 0.5 + probChanger) {
      result.push(time);
    }
  }

  if (result.length == 0) {
    result.push("Not Available")
  }

  console.log(date)

  return result
}

export function initialState() {
  return fetchAPI(new Date());
}

export function reducer(state, date) {
  return fetchAPI(date);
}


function App() {

  const [availableTimes, dispatch] = useReducer(reducer, initialState());



  return (
    <div>
      <Nav times={availableTimes} dispatch={dispatch} />
      <Footer />
    </div>
  )
}

export default App
