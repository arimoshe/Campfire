const UPDATE_FILTER = 'filters/UPDATE_FILTER'

export const updateStoreFilter = (filterObject) =>({
    type: UPDATE_FILTER, 
    payload: filterObject
})


const filterReducer = (state = {adults:0, children:0}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch (action.type) {
        case UPDATE_FILTER:
            return { ...state, ...action.payload }
        default:
            return nextState
    }
}

export default filterReducer;