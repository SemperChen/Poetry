/**
 * @author Semper
 */
import {RECEIVE_CONTENT, REQUEST_CONTENT} from "../constants/ActionTypes";

export function requestContent(contentUrl) {
    return {
        type: REQUEST_CONTENT,
        contentUrl
    };
}

export function receiveContent(contentData) {
    return {
        type: RECEIVE_CONTENT,
        contentData,
    };
}
