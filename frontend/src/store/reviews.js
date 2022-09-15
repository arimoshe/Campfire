import csrfFetch from "./csrf";

const CREATE_REVIEW = 'reviews/CREATE_REVIEW'



export const createReview = (review) => ({
    type: CREATE_REVIEW, payload: review
})


export const submitReview = (review) => async dispatch => {
    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(review)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(createReview(data))
    } else {
        throw res;
    }
}

const reviewReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch (action.type) {
        case CREATE_REVIEW:
            return { ...nextState, [action.payload.id]: action.payload }
        default:
            return nextState;
    }
}

export default reviewReducer