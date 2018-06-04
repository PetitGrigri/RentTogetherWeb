import { combineReducers } from "redux";
import connection from "./connection";
import administrateurs from "./administrateurs";
import locataires from "./locataires";
import proprietaires from "./proprietaires";

const mainReducer = combineReducers({
    connection,
    administrateurs,
    locataires,
    proprietaires,
});

export default mainReducer;