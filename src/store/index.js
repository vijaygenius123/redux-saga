import {combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import counter from './counter'
import user from './user'
import {watcherSaga} from "../sagas";
const reducers = combineReducers({
    counter: counter,
    user: user
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(reducers, {}, applyMiddleware(...middleware))

sagaMiddleware.run(watcherSaga)

export default store
