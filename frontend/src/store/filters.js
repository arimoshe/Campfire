const UPDATE_FILTER = 'filters/UPDATE_FILTER'
const CLEAR_FILTER = 'filters/CLEAR_FILTER'

export const updateStoreFilter = (filterObject) =>({
    type: UPDATE_FILTER, 
    payload: filterObject
})

export const clearFilter = () => ({
    type: CLEAR_FILTER
})


const filterReducer = (state = {adults:0, children:0}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch (action.type) {
        case UPDATE_FILTER:
            return { ...state, ...action.payload }
        case CLEAR_FILTER: 
            return { adults: 0, children: 0 }
        default:
            return nextState
    }
}

export default filterReducer;