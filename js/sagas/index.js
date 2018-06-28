import {takeLatest} from "redux-saga/effects";
import {fetchContent} from './content';
import {fetchMy} from './my';
import {REQUEST_CONTENT, REQUEST_MY} from '../constants/ActionTypes';

const rootSaga = function* root() {
    yield takeLatest(REQUEST_CONTENT,fetchContent,[]);
    yield takeLatest(REQUEST_MY,fetchMy);
};
export default rootSaga;