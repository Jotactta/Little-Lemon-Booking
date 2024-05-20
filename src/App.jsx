import { Nav } from './components/navigation-bar/Nav.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { useReducer } from 'react';


import './App.css'

function fetchAPI(date) {
  let probChanger = 0.25;
  const allTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const result = [];

  if (date.getDay() == 6 || date.getDay() == 0) {
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
  return result
}

export function initialState() {
  const initialTimes = fetchAPI(new Date());
  return initialTimes
}

export function updateTimes(state, action) {
  return fetchAPI(action.type);
}


function App() {

  const [availableTimes, dispatch] = useReducer(updateTimes, initialState());
  const [successfulSubmit, submitDispatch] = useReducer(submitForm, false);

  function submitAPI(formData) {
    console.log(formData)
    return true
  }

  function submitForm(state, action) {

    if (!action.submitData) return false;

    const isReserved = submitAPI(action.submitData);
    if (isReserved && action.isSubmitted) {
      return true;
    }
    else return false;
  }


  return (
    <div>
      <Nav times={availableTimes} dispatch={dispatch} successfulSubmit={successfulSubmit} submitDispatch={submitDispatch} />
      <Footer />
    </div>
  )
}

export default App
