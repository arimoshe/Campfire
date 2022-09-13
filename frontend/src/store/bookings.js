import csrfFetch from "./csrf"

const CREATE_BOOKING = 'reviews/CREATE_BOOKING'

export const createBooking = (booking) => ({
    type: CREATE_BOOKING, payload: booking
})

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


const bookingReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = {...state};

    switch (action.type) {
        case CREATE_BOOKING:
            return {...nextState, [action.payload.id]: action.payload}
        default:
            return nextState
    }
}

export default bookingReducer