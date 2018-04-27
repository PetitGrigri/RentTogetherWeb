import { combineReducers } from "redux";
import connection from "./connection";
import administrateurs from "./administrateurs";

const mainReducer = combineReducers({
    connection,
    administrateurs
});

export default mainReducer;