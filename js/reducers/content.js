/**
 * @author Semper
 */
import {RECEIVE_CONTENT, REQUEST_CONTENT} from "../constants/ActionTypes";

const initialState = {
    isFetching: false
};
export default function content(state = initialState, action) {
    switch (action.type) {
        case REQUEST_CONTENT:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_CONTENT:
            return {
                ...state,
                contentData: action.contentData,
                isFetching: false
            };
        default:
            return state;
    }
}
