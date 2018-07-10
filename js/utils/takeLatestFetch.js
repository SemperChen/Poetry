/**
 * @author Semper
 */
import {cancel, fork, take} from "redux-saga/effects"

/*export const takeLatestFetch = (pattern, saga, ...args) => fork(function*() {
    let lastTask
    while (true) {
        const action = yield take(pattern)
        if (lastTask) {
            yield cancel(lastTask)
        }
        lastTask = yield fork(saga, Object.assign(...args, action))
    }
})*/
/**
 * 当发起新请求时，取消未完成旧请求
 * @param pattern
 * @param saga
 * @param params
 * @returns {*|ForkEffect}
 */
export const takeLatestFetch = (pattern, saga, params={}) => fork(function*() {
    let lastTask
    while (true) {
        const action = yield take(pattern)
        if (lastTask) {
            yield cancel(lastTask)
        }
        lastTask = yield fork(saga, Object.assign(params, action))
    }
})