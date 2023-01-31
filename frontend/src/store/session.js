import csrfFetch, { storeCSRFToken } from "./csrf";
import { getBookings } from "./bookings";

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

export const signupUser = ( email, password, firstName, lastName) => async dispatch => {
    const res = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            first_name:firstName,
            last_name: lastName
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

export const updateUser = (id,firstName, lastName, email) => async dispatch => {
    const res = await csrfFetch(`/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            email,
            first_name: firstName,
            last_name: lastName
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

export const deleteUser = (id) => async dispatch => {
    const res = await csrfFetch(`/api/users/${id}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(removeSessionUser())
        storeCurrentUser(null)
    } else {
        throw res
    }

}


export const logout = () => async dispatch => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE'
    })
    if (res.ok) {
        dispatch(removeSessionUser());
        dispatch(getBookings({}))
        storeCurrentUser(null);
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