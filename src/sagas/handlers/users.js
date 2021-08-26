import {call, put} from 'redux-saga/effects'
import {requestGetUser} from "../requests/users";
import {setUser} from "../../store/user";

export function* handleGetUser(){
    try{
        const response = yield call(requestGetUser)
        const {data} = response
        yield put(setUser(data[0]))
    } catch (err){
        console.log(err)
    }
}
