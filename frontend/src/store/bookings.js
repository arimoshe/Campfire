import csrfFetch from "./csrf"
import { CREATE_REVIEW, EDIT_REVIEW } from "./reviews";

const CREATE_BOOKING = 'bookings/CREATE_BOOKING';
const GET_BOOKINGS = 'bookings/GET_BOOKINGS';
const DESTROY_BOOKING = 'bookings/DESTROY_BOOKING';
const EDIT_BOOKING = 'bookings/EDIT_BOOKING';
const DESTROY_BOOKING_REVIEW = "bookings/DESTROY_BOOKING_REVIEW"

export const getBookings = (bookings) => ({
    type: GET_BOOKINGS, payload: bookings
})

export const createBooking = (booking) => ({
    type: CREATE_BOOKING, payload: booking
})

export const destroyBooking = (bookingId) => ({
    type: DESTROY_BOOKING, payload: bookingId
})

export const editBooking = (booking) => ({
    type: EDIT_BOOKING, payload: booking
})

export const destroyBookingReview = (bookingId) => ({
    type: DESTROY_BOOKING_REVIEW, payload: bookingId
})

export const updateBooking = (booking, bookingId) => async dispatch => {
    const res = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'PUT',
        body: JSON.stringify(booking)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(editBooking(data))
    } else {
        throw res;
    }
}

export const cancelBooking = (bookingId) => async dispatch => {
    const res = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        dispatch(destroyBooking(bookingId))
    } else {
        throw res;
    }
}

export const submitBooking = (booking) => async dispatch => {
    const res = await csrfFetch('/api/bookings', {
        method: 'POST',
        body: JSON.stringify(booking)
    })
    if (res.ok) 
    {
        const data = await res.json();
        dispatch(createBooking(data))
    } else {
        throw res;
    }
}


export const fetchBookings = () => async dispatch => {
    const res = await csrfFetch('/api/bookings')
    if (res.ok) {
        const data = await res.json();
        dispatch(getBookings(data.bookings))
    } else {
        throw res;
    }
}



const bookingReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = {...state};

    switch (action.type) {
        case CREATE_REVIEW:
            nextState[action.payload.bookingId].spotReview = Object.values(action.payload.review);
            return nextState;
        case EDIT_REVIEW:
            nextState[action.payload.bookingId].spotReview = Object.values(action.payload.review);
            return nextState;
        case DESTROY_BOOKING:
            delete nextState[action.payload];
            return nextState;
        case DESTROY_BOOKING_REVIEW:
            nextState[action.payload].spotReview = {};
            return nextState
        case CREATE_BOOKING:
            return {...nextState, [action.payload.id]: action.payload}
        case GET_BOOKINGS:
            return { ...nextState, ...action.payload}
        case EDIT_BOOKING:
            return { ...nextState, [action.payload.id]: action.payload }
        default:
            return nextState
    }
}

export default bookingReducer