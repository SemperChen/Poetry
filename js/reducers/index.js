import nav from './navReducers';
import {combineReducers} from "redux";
import content from './content';

const AppReducer = combineReducers({
    nav,
    content
});
export default AppReducer