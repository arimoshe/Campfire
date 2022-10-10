import { destroyBookingReview } from "./bookings";
import csrfFetch from "./csrf";

export const CREATE_REVIEW = 'reviews/CREATE_REVIEW'
export const EDIT_REVIEW = 'reviews/EDIT_REVIEW'

export const createReview = (review, bookingId) => ({
    type: CREATE_REVIEW, payload: {review, bookingId}
})

export const editReview = (review, bookingId) => ({
    type: EDIT_REVIEW, payload: { review, bookingId }
})



export const updateReview = (review, bookingId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PUT',
        body: JSON.stringify(review)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(editReview(data, bookingId))
    } else {
        throw res;
    }
}

export const deleteReview = (reviewId, bookingId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
    })
    if (res.ok) {
        dispatch(destroyBookingReview(bookingId))
    } else {
        throw res;
    }
}

export const submitReview = (review, bookingId) => async dispatch => {
    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(review)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(createReview(data, bookingId))
    } else {
        throw res;
    }
}

const reviewReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch (action.type) {
        case CREATE_REVIEW:
            return { ...nextState, [action.payload.review.id]: action.payload.review }
        case EDIT_REVIEW:
            return { ...nextState, [action.payload.review.id]: action.payload.review }
        default:
            return nextState;
    }
}

export default reviewReducer