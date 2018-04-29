import api from '../api/api.js';

//Types d'actions destinées à l'ajout d'un administrateur
export const
    USER_ADD_ADMINISTRATOR_REQUEST = 'USER_ADD_ADMINISTRATOR',
    USER_ADD_ADMINISTRATOR_SUCCESS= 'USER_ADD_ADMINISTRATOR_SUCCESS',
    USER_ADD_ADMINISTRATOR_ERROR= 'USER_ADD_ADMINISTRATOR_ERROR',
    USER_ADD_ADMINISTRATOR_HIDE_ERROR = 'USER_ADD_ADMINISTRATOR_HIDE_ERROR';

/**
 * Méthode destinée à la création d'un administrateur en utilisant l'objet passé en paramêtre
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
 * Méthode permettant de retourner l'action nécessaire à redux pour savoir que l'utilisateur est crée
 */
export const handleCreateAdministratorSuccess = () => {
    return {
        type: USER_ADD_ADMINISTRATOR_SUCCESS,
        message_sucess: "L'utilisateur a été crée"
    }
};

/**
 * Méthode permettant de retourner l'action nécessaire à redux pour gérer une erreur d'authentification
 * @param {string} error le message d'erreur
 */
export const handleCreateAdministratorError = (error) => {
    return {
        type: USER_ADD_ADMINISTRATOR_ERROR,
        message_error: error
    }
}

/**
 * Méthode permettant de retourner l'action nécessaire à redux pour informer qu'il n'y a plus de chargement en cours
 * @param {string} error le message d'erreur
 */
export const handleHideCreateAdministratorError = () => {
    return {
        type: USER_ADD_ADMINISTRATOR_HIDE_ERROR
    } 
};