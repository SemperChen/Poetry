import {fork} from "redux-saga/effects";
import {watchLastContent} from './content';

const rootSaga = function* root() {
    yield fork(watchLastContent);
};
export default rootSaga;