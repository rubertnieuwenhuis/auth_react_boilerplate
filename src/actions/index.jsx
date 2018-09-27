import { AUTH_USER, AUTH_ERR } from './types'
import axios from 'axios'

export const signup = (formProps, callback) => async dispatch => {  
    try {
        const response = await axios.post('http://localhost:3090/signup', formProps)
        dispatch({ type: AUTH_USER, payload: response.data })
        localStorage.setItem('token', JSON.stringify(response.data.token))
        localStorage.setItem('user', JSON.stringify(response.data.user))
        callback();
    } catch(e) {
        dispatch({ type: AUTH_ERR, payload: 'Email in use'})
    }
};

export const signin = (formProps, callback) => async dispatch => {  
    try {
        const response = await axios.post('http://localhost:3090/signin', formProps)
        dispatch({ type: AUTH_USER, payload: response.data })
        localStorage.setItem('token', JSON.stringify(response.data.token))
        localStorage.setItem('user', JSON.stringify(response.data.user))
        callback();
    } catch(e) {
        dispatch({ type: AUTH_ERR, payload: 'Invalid login credentials'})
    }
};

export const signout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    return {
        type: AUTH_USER,
        payload: ''
    }
}
