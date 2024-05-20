import { expect, test, describe } from 'vitest'
import { initialState, updateTimes } from './App.jsx';

import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Booking from './components/main/pages/Booking';

describe("booking", () => {

    test('return the same state', () => {
        expect(updateTimes([], {type: new Date()})).not.toEqual([])
        expect(updateTimes([], {type: new Date()})).toBeInstanceOf(Array)

    })


    test('return the initial state', () => {
        expect(initialState()).not.toEqual([])
        expect(initialState()).toBeInstanceOf(Array)

    })


    test('Renders the BookingForm heading', () => {
        render(
            <BrowserRouter>
                <Booking className="booking_card" tittle="Make a reservation" times={['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']} dispatch={updateTimes} />
            </BrowserRouter>
        )
        const headingElement = screen.getByText("Make a reservation");
        expect(headingElement).toBeInTheDocument();
    })


})
