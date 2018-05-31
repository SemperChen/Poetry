import {REQUEST_MY} from "../constants/ActionTypes";
import {call, cancel, fork, put, take} from "redux-saga/effects";
import {fetchMyPoems} from '../utils/HttpUtil';
import {receiveMy} from '../actions/my';

export const fetchMy = function* fetchContent(myUrl) {
    try {
        let myData = yield call(fetchMyPoems, myUrl);
        yield put(receiveMy(myData))

    } catch (e) {
        console.log('fetchMy:' + e.message)
    }

};

/**
 * 当新发起请求时，取消未完成的旧请求
 */
export const watchLastMy = function* watchLastMy() {
    let lastTask;
    while (true) {
        const {myUrl} = yield take(REQUEST_MY);
        if (lastTask)
            yield cancel(lastTask);
        lastTask = yield fork(fetchMy, myUrl)
    }
};
