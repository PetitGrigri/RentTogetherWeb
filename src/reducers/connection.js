import {SIGN_IN_REQUEST, SIGN_IN_ERROR, SIGN_IN_SUCESS }from '../actions/action.js'


//le state initial
const initialConnectionState = {
    loadingSignIn : false,
    isAuthenticated : false,
    firstName : "",
    lastName : "",
    message : "",
}

const connection = (state = initialConnectionState, action) => {

    switch(action.type) {
        //Connexion de l'utilisateur
        case SIGN_IN_REQUEST: 
            return Object.assign({}, state, {
                loadingSignIn : true
            });

        //validation de la connexion
        case  SIGN_IN_SUCESS: 
            return Object.assign({}, state, {
                loadingSignIn : false,
                isAuthenticated : true,
                firstName : action.firstName,
                lastName : action.lastName
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