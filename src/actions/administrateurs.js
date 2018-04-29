import * as api from '../api/api.js';

//Types d'actions destinées à l'ajout d'un administrateur
export const
    // Récupération de la liste des utilisateurs
    USER_GET_ADMINISTORS_REQUEST = 'USER_GET_ADMINISTORS',
    USER_GET_ADMINISTORS_SUCCESS = 'USER_GET_ADMINISTORS_SUCCESS',
    USER_GET_ADMINISTORS_ERROR = 'USER_GET_ADMINISTORS_ERROR',
    //Ajout d'un administrateur
    USER_ADD_ADMINISTRATOR_REQUEST = 'USER_ADD_ADMINISTRATOR',
    USER_ADD_ADMINISTRATOR_SUCCESS= 'USER_ADD_ADMINISTRATOR_SUCCESS',
    USER_ADD_ADMINISTRATOR_ERROR= 'USER_ADD_ADMINISTRATOR_ERROR',
    USER_ADD_ADMINISTRATOR_HIDE_ERROR = 'USER_ADD_ADMINISTRATOR_HIDE_ERROR',
    USER_ADD_ADMINISTRATOR_HIDE_SUCCESS = 'USER_ADD_ADMINISTRATOR_HIDE_SUCCESS';

/**
 * Fonction destinée à la création d'un administrateur en utilisant l'objet passé en paramêtre
 * @param {object} data 
 */
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

/**
 * Fonction permettant de retourner l'action nécessaire à redux pour savoir que l'utilisateur est crée
 */
export const handleCreateAdministratorSuccess = () => {
    return {
        type: USER_ADD_ADMINISTRATOR_SUCCESS,
        message: "L'utilisateur a été crée"
    }
};

/**
 * Fonction permettant de retourner l'action nécessaire à redux pour gérer une erreur d'authentification
 * @param {string} error le message d'erreur
 */
export const handleCreateAdministratorError = (error) => {
    return {
        type: USER_ADD_ADMINISTRATOR_ERROR,
        message: error
    }
}

/**
 * Fonction permettant de retourner l'action nécessaire à redux pour informer que le message d'erreur ne doit plus être affiché
 * @param {string} error le message d'erreur
 */
export const handleHideCreateAdministratorError = () => {
    return {
        type: USER_ADD_ADMINISTRATOR_HIDE_ERROR
    } 
};

/**
 * Fonction permettant de retourner l'action nécessaire à redux pour informer que le message de succés ne doit plus être affiché
 * @param {string} error le message d'erreur
 */
export const handleHideCreateAdministratorSuccess = () => {
    return {
        type: USER_ADD_ADMINISTRATOR_HIDE_SUCCESS
    } 
};




/**
 * Fonction destinée récupérer la liste des administrateurs
 * @param {object} data 
 */
export const handleGetAdministrators = () => {

    console.log('handleGetAdministrators');

    return function (dispatch, getState) {
        dispatch({
            type: USER_GET_ADMINISTORS_REQUEST, 
        });

//TODO check la vérification du token de l'utilisateur connecté

        api.getAdministrators(
            //getState().connection.user.token,
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmZ3Jpc2VsbGVzQGhvdG1haWwuZnIiLCJqdGkiOiIxZjU0NWIzMS1mN2I3LTQzOTktYjVhNy1hODQ4Y2M5NmEzNjciLCJuYmYiOjE1MjQ5OTc0MDMsImV4cCI6MTUyNTA4MzgwM30.oYU7aOl23hlGvkZJ6tteDBnnrQs4htPpQOCHKvz15Oc',
            (data) => { dispatch(handleGetAdministratorSuccess(data)) },
            (error) => { dispatch(handleGetAdministratorError(error)) }
        )
    }
}

export const handleGetAdministratorSuccess = (data) => {
    return {
        type: USER_GET_ADMINISTORS_SUCCESS,
        users: data
    } 
};

export const handleGetAdministratorError = (error) => {
    return {
        type: USER_GET_ADMINISTORS_ERROR,
        message: error
    } 
};

