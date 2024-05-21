import { expect, test, describe, afterEach, vi } from 'vitest'
import { initialState, updateTimes } from './App.jsx';

import { screen, render, fireEvent, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom'


import Booking from './components/main/pages/Booking';
import { timeErrorClass, disableSubmit, buttonClass,  timeClass} from './components/main/pages/Booking';


describe("booking", () => {

    afterEach(cleanup)

    test('return array with aailable times', () => {
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

    test('submit button disabled when there are not available times', () => {

        const submitForm = vi.fn();
        render(
            <BrowserRouter>
                <Booking className="booking_card" tittle="Make a reservation" times={["Not Available"]} submitDispatch={submitForm}/>
            </BrowserRouter>
        )

        const submitButton = screen.getByRole('button')

        expect (timeErrorClass).toBe('error')
        expect (disableSubmit).toBeTruthy()
        expect (timeClass).toBe('time_error')
        expect (buttonClass).toBe('submit_button_disabled')
        expect(submitButton).toHaveAttribute('disabled')

        fireEvent.click(submitButton)
        expect(submitForm).not.toHaveBeenCalled()


    })

})
