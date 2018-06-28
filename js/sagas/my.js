import {call, put} from "redux-saga/effects";
import {fetchMyPoems} from '../utils/HttpUtil';
import {receiveMy} from '../actions/my';

export function* fetchMy(myUrl) {
    try {
        let myData = yield call(fetchMyPoems, myUrl);
        yield put(receiveMy(myData))

    } catch (e) {
        console.log('fetchMy:' + e.message)
    }

}

