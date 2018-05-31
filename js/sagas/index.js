import {fork} from "redux-saga/effects";
import {watchLastContent} from './content';
import {watchLastMy} from './my';

const rootSaga = function* root() {
    yield fork(watchLastContent);
    yield fork(watchLastMy);
};
export default rootSaga;