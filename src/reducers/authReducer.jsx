import { AUTH_USER, AUTH_ERR } from '../actions/types'

const initialState = {
    authenticated: '',
    user: {},
    errorMessage: ''
}

export default function(state = initialState, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, authenticated: action.payload.token, user: action.payload.user }
        case AUTH_ERR:
            return { ...state, errorMessage: action.payload }
        default: return state;
    }
}