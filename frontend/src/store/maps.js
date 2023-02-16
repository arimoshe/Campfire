const SET_MAP = 'map/SET_MAP'
const CLEAR_MAP = 'filters/CLEAR_MAP'

export const updateStoreMap = (map) => ({
    type: SET_MAP,
    payload: map
})

export const clearMap = () => ({
    type: CLEAR_MAP
})


const mapReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch (action.type) {
        case SET_MAP:
            return { ...state, ...action.payload }
        case CLEAR_MAP:
            return {}
        default:
            return nextState
    }
}

export default mapReducer;