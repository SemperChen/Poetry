import {call, put} from "redux-saga/effects";
import {receiveContent} from '../actions/content';
import {fetchNetData} from '../utils/HttpUtil';

export function* fetchContent(params) {
    try {
        const {contentUrl} = params;
        let contentData = yield call(fetchNetData, contentUrl);
        yield put(receiveContent(contentData))

    } catch (e) {
        console.error('fetchContent:' + e.message)
    }

}

