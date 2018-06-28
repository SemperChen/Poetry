import {call, put} from "redux-saga/effects";
import {receiveContent} from '../actions/content';
import {fetchNetData} from '../utils/HttpUtil';

export function* fetchContent(contentUrl) {
    try {
        let contentData = yield call(fetchNetData, contentUrl);
        yield put(receiveContent(contentData))

    } catch (e) {
        console.log('fetchContent:' + e.message)
    }

}

