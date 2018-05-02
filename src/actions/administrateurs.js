import * as api from '../api/api.js';

//Types d'actions destinées à l'ajout d'un administrateur
export const
    // Récupération de la liste des utilisateurs
    USER_GET_ADMINISTORS_REQUEST = 'USER_GET_ADMINISTORS',
    USER_GET_ADMINISTORS_SUCCESS = 'USER_GET_ADMINISTORS_SUCCESS',
    USER_GET_ADMINISTORS_ERROR = 'USER_GET_ADMINISTORS_ERROR',
    // Ajout d'un administrateur
    USER_ADD_ADMINISTRATOR_REQUEST = 'USER_ADD_ADMINISTRATOR',
    USER_ADD_ADMINISTRATOR_SUCCESS= 'USER_ADD_ADMINISTRATOR_SUCCESS',
    USER_ADD_ADMINISTRATOR_ERROR= 'USER_ADD_ADMINISTRATOR_ERROR',
    // Suppression d'un administrateur
    USER_DELETE_ADMINISTRATOR_REQUEST = 'USER_DELETE_ADMINISTRATOR_REQUEST',
    USER_DELETE_ADMINISTRATOR_SUCCESS= 'USER_DELETE_ADMINISTRATOR_SUCCESS',
    USER_DELETE_ADMINISTRATOR_ERROR= 'USER_DELETE_ADMINISTRATOR_ERROR',
    // Suppression des messages d'erreurs ou de réussite
    USER_ADMINISTRATOR_HIDE_MESSAGES= 'USER_ADMINISTRATOR_HIDE_MESSAGES',
    USER_ADMINISTRATOR_HIDE_POPUP_MESSAGES = 'USER_ADMINISTRATOR_HIDE_POPUP_MESSAGES'
    //Edition d'un administrateur
    ////TODO EDIT 
    ;

/**
 * Fonction destinée à la création d'un administrateur en utilisant l'objet passé en paramètre
 * Plusieurs actions seront emises pour informer redux de l'état en cours
 * 
 * @param {object} data 
 */
export const handleCreateAdministrator = (data) => {
    return function (dispatch) {

        dispatch({
            type: USER_ADD_ADMINISTRATOR_REQUEST, 
        });

        api.createUtilisateur(
            data,
            (dataUser) => { dispatch(handleCreateAdministratorSuccess(dataUser)) },
            (error) => { dispatch(handleCreateAdministratorError(error)) }
        )
    }
}

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte du succés de la création d'un utilisateur
 */
export const handleCreateAdministratorSuccess = (dataUser) => {
    return {
        type: USER_ADD_ADMINISTRATOR_SUCCESS,
        message: "L'utilisateur a été crée",
        user: dataUser
    }
};

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte l'échec de la création d'un utilisateur
 * 
 * @param {string} error le message d'erreur
 */
export const handleCreateAdministratorError = (error) => {
    return {
        type: USER_ADD_ADMINISTRATOR_ERROR,
        message: error
    }
}

/**
 * Fonction destinée à la récupération de la liste des administrateurs
 * Plusieurs actions seront emises pour informer redux de l'état en cours ou pour transmettre les administrateurs récupérés
 * 
 * @param {object} data 
 */
export const handleGetAdministrators = () => {

    console.log('handleGetAdministrators');

    return function (dispatch, getState) {
        dispatch({
            type: USER_GET_ADMINISTORS_REQUEST, 
        });

        //TODO check la vérification du token de l'utilisateur connecté

        api.getUtilisateurs(
            getState().connection.user.token,
            (data) => { dispatch(handleGetAdministratorSuccess(data)) },
            (error) => { dispatch(handleGetAdministratorError(error)) }
        )
    }
}

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte du succés de la récupération des administrateurs
 * 
 * @param {object} data La liste des administrateurs
 */
export const handleGetAdministratorSuccess = (data) => {
    return {
        type: USER_GET_ADMINISTORS_SUCCESS,
        users: data
    } 
};

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte de l'échec de la récupération des administrateurs
 * 
 * @param {string} error l'erreur remontée
 */
export const handleGetAdministratorError = (error) => {
    return {
        type: USER_GET_ADMINISTORS_ERROR,
        message: error
    } 
};

/**
 * Fonction destinée à la suppression d'un administrateur en utilisant l'objet passé en paramètre
 * Plusieurs actions seront emises pour informer redux de l'état en cours
 * 
 * @param {int} id l'identifiant de l'utilisateur à supprimer 
 */
export const handleDeleteAdministrator = (id) => {

    console.log('handleDeleteAdministrator');

    return function (dispatch, getState) {
        dispatch({
            type: USER_DELETE_ADMINISTRATOR_REQUEST, 
            administratorId: id,
        });

        api.deleteUser(
            id,
            getState().connection.user.token,
            (id) => { dispatch(handleRemoveAdministratorSuccess(id)) },
            (error) => { dispatch(handleRemoveAdministratorError(error)) }
        )
    }
}

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte du succés de la suppression d'un administrateur
 * 
 * @param {int} id l'identifiant de l'utilisateur à supprimer 
 */
export const handleRemoveAdministratorSuccess = (id) => {
    return {
        type: USER_DELETE_ADMINISTRATOR_SUCCESS,
        administratorId: id,
        message: "Utilisateur Supprimé"
    }
}

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte de l'échec de la suppression d'un administrateur
 * 
 * @param {string} error l'erreur remontée
 */
export const handleRemoveAdministratorError = (error) => {
    return {
        type: USER_DELETE_ADMINISTRATOR_ERROR,
        message: error
    }
}


/**
 * Fonction permettant de retourner l'action nécessaire pour vider les messages
 */
export const handleHideMessages = () => {
    return {
        type: USER_ADMINISTRATOR_HIDE_MESSAGES
    } 
};

/**
 * Fonction permettant de retourner l'action nécessaire pour vider les messages contenus dans la popup
 */
export const handleHideMessagesPopup = () => {
    return {
        type: USER_ADMINISTRATOR_HIDE_POPUP_MESSAGES
    } 
};

//TODO EDIT 