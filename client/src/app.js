import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import mainReducer from './reducers'
import Flights from './components/Flights.jsx'

import "antd/dist/antd.css"

let store = createStore(mainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware
    )
)

ReactDOM.render(
    <Provider store={store}>
        <Flights/>
    </Provider>,
 document.getElementById('container')
);
