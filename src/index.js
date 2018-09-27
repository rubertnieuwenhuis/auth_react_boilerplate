// Libraries
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import reduxThunk from 'redux-thunk'

// Helpers
import combineReducers from './reducers/index'

// Components
import App from './components/App'
import Welcome from './components/Welcome'
import SignupForm from './components/auth/SignupForm'
import Feature from './components/Feature'
import Signout from './components/auth/Signout';
import SigninForm from './components/auth/SigninForm';

const store = createStore(combineReducers, {
    auth: { authenticated: localStorage.getItem('token') }
}, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path='/' exact component={Welcome} />
                <Route path='/signup' component={SignupForm}/>
                <Route path='/signin' component={SigninForm}/>
                <Route path='/signout' component={Signout}/>
                <Route path='/feature' component={Feature}/>
            </App>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
