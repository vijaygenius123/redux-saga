import {combineReducers, createStore} from "redux";
import counter from './counter/counter'
const reducers = combineReducers({
    counter: counter
})

const store = createStore(reducers)

export default store
