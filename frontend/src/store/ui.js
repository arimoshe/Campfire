const TOGGLE_LOGIN_MODAL = 'ui/TOGGLE_LOGIN_MODAL'
const TOGGLE_HAMBURGER_MENU_MODAL = 'ui/TOGGLE_HAMBURGER_MENU_MODAL'
const TOGGLE_SPOT_DATES_MODAL = 'ui/TOGGLE_SPOT_DATES_MODAL'
const TOGGLE_SPOT_GUESTS_MODAL = 'ui/TOGGLE_SPOT_GUESTS_MODAL'

export const toggleLoginModal = (value) => ({
    type: TOGGLE_LOGIN_MODAL, payload:value
})

export const toggleHamburgerMenuModal = (value) => ({
    type: TOGGLE_HAMBURGER_MENU_MODAL, payload: value
})

export const toggleSpotDatesModal = (value) => ({
    type: TOGGLE_SPOT_DATES_MODAL, payload: value
})

export const toggleSpotGuestsModal = (value) => ({
    type: TOGGLE_SPOT_GUESTS_MODAL, payload: value
})

const uiReducer = (state = { loginModal: false, hamburgerMenuModal: false, showSpotDatesModal: false, showSpotGuestsModal :false} , action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch (action.type) {
        case TOGGLE_LOGIN_MODAL:
            nextState['loginModal'] = action.payload;
            return nextState;
        case TOGGLE_HAMBURGER_MENU_MODAL:
            nextState['hamburgerMenuModal'] = action.payload;
            return nextState;
        case TOGGLE_SPOT_DATES_MODAL:
            nextState['showSpotDatesModal'] = action.payload;
            return nextState;
        case TOGGLE_SPOT_GUESTS_MODAL:
            nextState['showSpotGuestsModal'] = action.payload;
            return nextState;
        default: 
            return nextState
    }
}

export default uiReducer;