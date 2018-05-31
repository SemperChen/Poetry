/**
 * @author Semper
 */
import {RECEIVE_MY, REQUEST_MY} from "../constants/ActionTypes";

const initialState = {
    isFetching: false
};
export default function my(state = initialState, action) {
    switch (action.type) {
        case REQUEST_MY:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_MY:
            return {
                ...state,
                myData: action.myData,
                isFetching: false
            };
        default:
            return state;
    }
}
