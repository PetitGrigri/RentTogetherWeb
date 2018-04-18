import { combineReducers } from "redux";
import connection from "./connection";

const mainReducer = combineReducers({
    connection
});

export default mainReducer;