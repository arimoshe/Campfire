const TOGGLE_LOGIN_MODAL = 'ui/TOGGLE_LOGIN_MODAL'
const TOGGLE_HAMBURGER_MENU_MODAL = 'ui/TOGGLE_HAMBURGER_MENU_MODAL'
const TOGGLE_SPOT_SHOW_MODAL = 'ui/TOGGLE_SPOT_SHOW_MODAL'

export const toggleLoginModal = (value) => ({
    type: TOGGLE_LOGIN_MODAL, payload:value
})

export const toggleHamburgerMenuModal = (value) => ({
    type: TOGGLE_HAMBURGER_MENU_MODAL, payload: value
})

export const toggleSpowShowModal = (value) => ({
    type: TOGGLE_SPOT_SHOW_MODAL, payload: value
})

const uiReducer = (state = { loginModal: false, hamburgerMenuModal: false, showShowModal: false } , action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch (action.type) {
        case TOGGLE_LOGIN_MODAL:
            nextState['loginModal'] = action.payload
            return nextState
        case TOGGLE_HAMBURGER_MENU_MODAL:
            nextState['hamburgerMenuModal'] = action.payload
            return nextState
        case TOGGLE_SPOT_SHOW_MODAL:
            nextState['showShowModal'] = action.payload
            return nextState
        default: 
            return nextState
    }
}

export default uiReducer;