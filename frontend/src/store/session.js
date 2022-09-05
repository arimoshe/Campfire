import csrfFetch, { storeCSRFToken } from "./csrf"

const SET_SESSION_USER = 'session/SET_SESSION'
const REMOVE_SESSION_USER = 'session/REMOVE_SESSION'

export const setSessionUser = (user) => ({ type: SET_SESSION_USER, payload: user })

export const removeSessionUser = () => ({ type: REMOVE_SESSION_USER })

export const loginSessionUser = (email, password) => async dispatch => {
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })
    if (res.ok) {
        const data = await res.json()
        storeCurrentUser(data.user)
        dispatch(setSessionUser(data.user));
        return res;
    }
    else {
        throw res;
    }
}

export const signupUser = ( email, password) => async dispatch => {
    const res = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        })
    })
    if (res.ok) {
        const data = await res.json();
        storeCurrentUser(data.user);
        dispatch(setSessionUser(data.user));
        return res;
    } else {
        throw res
    }

}

export const logout = () => async dispatch => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE'
    })
    if (res.ok) {
        dispatch(removeSessionUser())
        storeCurrentUser(null)
        return res
    }
    else {
        throw res
    }

}

export const restoreSession = () => async dispatch => {
    const res = await csrfFetch('/api/session')
    if (res.ok) {
        storeCSRFToken(res);
        const data = await res.json();
        storeCurrentUser(data.user);
        dispatch(setSessionUser(data.user));
        return res
    }
}

const storeCurrentUser = (user) => {
    if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user))
    } else {
        sessionStorage.removeItem('currentUser')
    }
}

const initialState = { user: JSON.parse(sessionStorage.getItem('currentUser')) }

const sessionReducer = (state = initialState, action) => {
    Object.freeze(state);
    const nextState = { ...state };
    switch (action.type) {
        case SET_SESSION_USER:
            return { ...state, user: action.payload }
        case REMOVE_SESSION_USER:
            return { ...state, user: null }
        default:
            return nextState;
    }
}

export default sessionReducer 