import { expect, test, describe } from 'vitest'
import { reducer, initialState } from './App.jsx';

import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import Booking from './components/main/pages/Booking';

describe("booking", () => {

    test('return the same state', () => {
        expect(reducer(1, 2)).toBe(1)
    })


    test('return the initial state', () => {
        expect(initialState()).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
    })


    test('Renders the BookingForm heading', () => {
        render(<Booking className="booking_card" tittle="Make a reservation" times={['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']} dispatch={reducer} />)
        const headingElement = screen.getByText("Make a reservation");
        expect(headingElement).toBeInTheDocument();
    })


})
