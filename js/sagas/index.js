import {all} from "redux-saga/effects";
import {fetchContent} from './content';
import {fetchMy} from './my';
import {REQUEST_CONTENT, REQUEST_MY} from '../constants/ActionTypes';
import {takeLatestFetch} from '../utils/takeLatestFetch';

const rootSaga = function* root() {
    yield all([
        takeLatestFetch(REQUEST_CONTENT,fetchContent),
        takeLatestFetch(REQUEST_MY,fetchMy)
    ])
};
export default rootSaga;