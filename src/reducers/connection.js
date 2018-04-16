import {REQUEST_SIGN_IN, SIGN_IN_ERROR, SIGN_IN_SUCESS }from '../actions/index.js'

//le state initial
const initialConnectionState = {
    loadingSignIn :     false,
    isAuthenticated :   false,
    firstName :         "",
    lastName :          "",
    message:            "",
}

const connection = (state = initialConnectionState, action) => {

    switch(action.type) {
        //Connexion de l'utilisateur
        case REQUEST_SIGN_IN: 
            return Object.assign({}, state, {
                loadingSignIn : true
            });

        //validation de la connexion
        case  SIGN_IN_SUCESS: 
            return Object.assign({}, state, {
                loadingSignIn : false,
                connected:      true,
                firstName :     action.firstName,
                lastName :      action.lastName
            });

        //erreur lors de la connexion
        case  SIGN_IN_ERROR : 
            return Object.assign({}, {
                loadingSignIn : false,
                connected:      false,
                message:        action.message,
        });

        //autres 
        default : 
            return state;
    }
}

export default connection;