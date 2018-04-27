import { 
    USER_ADD_ADMINISTRATOR_REQUEST, 
    USER_ADD_ADMINISTRATOR_SUCCESS, 
    USER_ADD_ADMINISTRATOR_ERROR, 
    USER_ADD_ADMINISTRATOR_HIDE_ERROR } from '../actions/action.js'


//le state initial
const initialConnectionState = {
    loadingAdd : false,
    message: "",
    users: {}
}

const administrateurs = (state = initialConnectionState, action) => {

    switch(action.type) {
        //Connexion de l'utilisateur
        
        case USER_ADD_ADMINISTRATOR_REQUEST: 
            return Object.assign({}, state, {
                loadingAdd : true
            });

        //validation de la connexion
        case  USER_ADD_ADMINISTRATOR_SUCCESS: 
            return Object.assign({}, state, {
                loadingAdd : false,
            });

        //erreur lors de la connexion
        case  USER_ADD_ADMINISTRATOR_ERROR : 
            return Object.assign({}, state, {
                loadingAdd : false,
                message: action.message
            });

        //erreur lors de la connexion
        case  USER_ADD_ADMINISTRATOR_HIDE_ERROR : 
            return Object.assign({}, {
                message: ""
            });

        //autres 
        default : 
            return state;
    }
}

export default administrateurs;