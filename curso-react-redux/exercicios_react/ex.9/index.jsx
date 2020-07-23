import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Providers, Provider } from 'react-redux'
import Field from './field.js'
import fieldReducer from './fieldReducer.js'

const reducers = combineReducers({
    field: fieldReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
    </Provider>
    , document.getElementById('app'))