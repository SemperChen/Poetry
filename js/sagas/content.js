import {REQUEST_CONTENT} from "../constants/ActionTypes";
import {call, cancel, fork, put, take} from "redux-saga/effects";
import {receiveContent} from '../actions/Content';
import {fetchNetData} from '../utils/HttpUtil';

export const fetchContent = function* fetchContent(contentUrl) {
    try {
        let contentData = yield call(fetchNetData, contentUrl);
        yield put(receiveContent(contentData))

    } catch (e) {
        console.log('fetchContent:' + e.message)
    }

};

/**
 * 当新发起请求时，取消未完成的旧请求
 */
export const watchLastContent = function* watchLastContent() {
    let lastTask;
    while (true) {
        const {contentUrl} = yield take(REQUEST_CONTENT);
        if (lastTask)
            yield cancel(lastTask);
        lastTask = yield fork(fetchContent, contentUrl)
    }
};
