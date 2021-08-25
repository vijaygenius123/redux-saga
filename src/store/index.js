import {combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import counter from './counter'
import user from './user'
const reducers = combineReducers({
    counter: counter,
    user: user
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(reducers, {}, applyMiddleware(...middleware))

export default store
