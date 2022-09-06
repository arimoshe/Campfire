const TOGGLE_LOGIN_MODAL = 'ui/TOGGLE_LOGIN_MODAL'

export const toggleLoginModal = (value) => ({
    type: TOGGLE_LOGIN_MODAL, payload:value
})



const uiReducer = (state = {loginModal: false} , action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch (action.type) {
        case TOGGLE_LOGIN_MODAL:
            nextState['loginModal'] = action.payload
            return nextState
        default: 
            return nextState
    }
}

export default uiReducer;