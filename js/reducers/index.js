import nav from './navReducers';
import {combineReducers} from "redux";
import content from './content';
import my from './my';

const AppReducer = combineReducers({
    nav,
    content,
    my
});
export default AppReducer