import {Nav} from './components/navigation-bar/Nav.jsx';
import {Footer} from './components/footer/Footer.jsx';
import { useReducer } from 'react';

import './App.css'


function reducer(state, date) {
  console.log(date);
  return state;
}


function App() {

  const initialState = ['17:00' , '18:00' , '19:00' , '20:00' , '21:00' , '22:00'];

  const [availableTimes, dispatch] = useReducer (reducer, initialState);



  return (
    <div>
      <Nav times={availableTimes} dispatch={dispatch}/>
      <Footer/>
    </div>
  )
}

export default App
