import api from '../api/api.js';

//Types d'actions destinées à la connexion
export const 
    SIGN_IN_REQUEST = 'SIGN_IN_REQUEST', 
    SIGN_IN_SUCESS = 'SIGN_IN_SUCESS',
    SIGN_IN_ERROR = 'SIGN_IN_ERROR',
    SIGN_IN_HIDE_ERROR = 'SIGN_IN_HIDE_ERROR';

//Types d'actions destinées à l'ajout d'un administrateur
export const
    USER_ADD_ADMINISTRATOR_REQUEST = 'USER_ADD_ADMINISTRATOR',
    USER_ADD_ADMINISTRATOR_SUCCESS= 'USER_ADD_ADMINISTRATOR_SUCCESS',
    USER_ADD_ADMINISTRATOR_ERROR= 'USER_ADD_ADMINISTRATOR_ERROR',
    USER_ADD_ADMINISTRATOR_HIDE_ERROR = 'USER_ADD_ADMINISTRATOR_HIDE_ERROR';

/**
 * Méthode permettant de se connecter et d'obtenir des informations sur l'utilisateur
 * 
 * @param {*} login 
 * @param {*} password 
 */
export const handleSignIn = (login, password) => {
    return function (dispatch) {
        
        dispatch({
            type: SIGN_IN_REQUEST
        })

        api.connectionAPI(
            login,
            password,
            (user) => { dispatch(handleSignInSuccess(user)) },
            (error) => { dispatch(handleSignInError(error)) }
        )
    }
};

export const handleSignInSuccess = (data) => {
    //création d'un objet user sans son mot de passe
    var dataUser = Object.assign({}, data);
    delete dataUser.password;
    return {
        type: SIGN_IN_SUCESS,
        user: dataUser
    } 
};

export const handleSignInError = (error) => {
    return {
        type: SIGN_IN_ERROR,
        message: error
    }
};

export const handleHideError = () => {
    return {
        type: SIGN_IN_HIDE_ERROR
    }
}








export const handleCreateAdministrator = (data) => {
    return function (dispatch) {

        dispatch({
            type: USER_ADD_ADMINISTRATOR_REQUEST, 
        });
        
        api.createAdministrator(
            data,
            () => { dispatch(handleCreateAdministratorSuccess()) },
            (error) => { dispatch(handleCreateAdministratorError(error)) }
        )
    }
}

export const handleCreateAdministratorSuccess = () => {
    return {
        type: USER_ADD_ADMINISTRATOR_SUCCESS,
    }
};

export const handleCreateAdministratorError = (error) => {
    return {
        type: USER_ADD_ADMINISTRATOR_ERROR,
        message: error
    }
}

export const handleHideCreateAdministratorError = () => {
    return {
        type: USER_ADD_ADMINISTRATOR_HIDE_ERROR
    } 
};