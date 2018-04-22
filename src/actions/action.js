import api from '../api/api.js';

export const 
    SIGN_IN_REQUEST = 'SIGN_IN_REQUEST', 
    SIGN_IN_SUCESS = 'SIGN_IN_SUCESS',
    SIGN_IN_ERROR = 'SIGN_IN_ERROR',
    SIGN_IN_HIDE_ERROR = 'SIGN_IN_HIDE_ERROR';


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
