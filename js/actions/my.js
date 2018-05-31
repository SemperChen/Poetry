/**
 * @author Semper
 */
import {RECEIVE_MY, REQUEST_MY} from "../constants/ActionTypes";

export function requestMy(myUrl) {
    return {
        type: REQUEST_MY,
        myUrl
    };
}

export function receiveMy(myData) {
    return {
        type: RECEIVE_MY,
        myData,
    };
}
