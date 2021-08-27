import {call, put} from 'redux-saga/effects'
import {requestGetUser} from "../requests/users";
import {setUser} from "../../store/user";

export function* handleGetUser(){
    try{
        const response = yield call(requestGetUser)
        const {data} = response
        const index = Math.ceil(Math.random() * (data.length - 1))
        yield put(setUser(data[index]))
    } catch (err){
        console.log(err)
    }
}
