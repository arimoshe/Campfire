import csrfFetch from "./csrf"

const RECEIVE_SPOTS = 'spots/RECEIVE_SPOTS'
const RECEIVE_SPOT = 'spots/RECEIVE_SPOT'
const CLEAR_SPOT_STORE = 'spots/CLEAR_SPOT_STORE'

export const addToStoreSpots = (spots)=> ({
    type: RECEIVE_SPOTS, payload:spots
})

export const addToStoreSpot = (spot) => ({
    type: RECEIVE_SPOT, payload: spot
})

export const clearSpotsStore = () => ({
    type: CLEAR_SPOT_STORE
})

export const fetchSpot = (spotId) => async dispatch => {
    const res = await csrfFetch(`/api/spots/${spotId}`)
    if (res.ok) {
        const data = await res.json();
        dispatch(addToStoreSpot(data))
    }
    else {
        throw res;
    }
}

export const fetchSpots = (page) => async dispatch => {
    const res = await csrfFetch(`/api/spots?page=${page}`)
    if (res.ok) {
        const data = await res.json();
        dispatch(addToStoreSpots(data))
    }
    else {
        throw res;
    }
}


const spotReducer = (state = { currentSpot:null , allSpots :null} , action) => {
    Object.freeze(state);
    const nextState = {...state};

    switch (action.type) {
        case RECEIVE_SPOTS:
            return {...state, allSpots: action.payload}
        case RECEIVE_SPOT:
            return { ...state, currentSpot: action.payload.currentSpot}
        case CLEAR_SPOT_STORE:
            return {};
        default:
            return nextState
    }
}

export default spotReducer;