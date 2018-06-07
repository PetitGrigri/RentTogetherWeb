import * as api from '../api/api.js';

//Types d'actions destinées à l'ajout d'un locataire
export const
    // Récupération de la liste des utilisateurs
    USER_GET_RENTERS_REQUEST = 'USER_GET_RENTERS',
    USER_GET_RENTERS_SUCCESS = 'USER_GET_RENTERS_SUCCESS',
    USER_GET_RENTERS_ERROR = 'USER_GET_RENTERS_ERROR',
    // Ajout d'un locataire
    USER_ADD_RENTER_REQUEST = 'USER_ADD_RENTER',
    USER_ADD_RENTER_SUCCESS= 'USER_ADD_RENTER_SUCCESS',
    USER_ADD_RENTER_ERROR= 'USER_ADD_RENTER_ERROR',
    // Suppression d'un locataire
    USER_DELETE_RENTER_REQUEST = 'USER_DELETE_RENTER_REQUEST',
    USER_DELETE_RENTER_SUCCESS= 'USER_DELETE_RENTER_SUCCESS',
    USER_DELETE_RENTER_ERROR= 'USER_DELETE_RENTER_ERROR',
    // Modification d'un locataire
    USER_UPDATE_RENTER_REQUEST = 'USER_UPDATE_RENTER_REQUEST',
    USER_UPDATE_RENTER_SUCCESS= 'USER_UPDATE_RENTER_SUCCESS',
    USER_UPDATE_RENTER_ERROR= 'USER_UPDATE_RENTER_ERROR',
    // Suppression des messages d'erreurs ou de réussite
    USER_RENTER_HIDE_MESSAGES= 'USER_RENTER_HIDE_MESSAGES',
    USER_RENTER_HIDE_POPUP_MESSAGES = 'USER_RENTER_HIDE_POPUP_MESSAGES'
    ;

/**
 * Fonction destinée à la création d'un locataire en utilisant l'objet user passé en paramètre 
 * Plusieurs actions seront emises pour informer redux de l'état en cours
 * 
 * @param {object} user  
 */
export const handleCreateRenter = (user) => {
    return function (dispatch) {

        dispatch({
            type: USER_ADD_RENTER_REQUEST, 
        });

        api.createUtilisateur(
            user,
            (dataUser) => { dispatch(handleCreateRenterSuccess(dataUser)) },
            (error) => { dispatch(handleCreateRenterError(error)) }
        )
    }
}

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte du succés de la création d'un utilisateur
 */
export const handleCreateRenterSuccess = (dataUser) => {
    return {
        type: USER_ADD_RENTER_SUCCESS,
        message: "L'utilisateur a été crée",
        user: dataUser
    }
};

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte l'échec de la création d'un utilisateur
 * 
 * @param {string} error le message d'erreur
 */
export const handleCreateRenterError = (error) => {
    return {
        type: USER_ADD_RENTER_ERROR,
        message: error
    }
}

/**
 * Fonction destinée à la récupération de la liste des locataires
 * Plusieurs actions seront emises pour informer redux de l'état en cours ou pour transmettre les locataires récupérés
 * 
 * @param {object} data 
 */
export const handleGetRenters = () => {

    console.log('handleGetRenters');

    return function (dispatch, getState) {
        dispatch({
            type: USER_GET_RENTERS_REQUEST, 
        });

        //TODO check la vérification du token de l'utilisateur connecté

        api.getUtilisateurs(
            getState().connection.user.token,
            {
                $filter:    "isRoomer eq 1"
            },
            (data) => { dispatch(handleGetRenterSuccess(data)) },
            (error) => { dispatch(handleGetRenterError(error)) }
        )
    }
}

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte du succés de la récupération des locataires
 * 
 * @param {object} data La liste des locataires
 */
export const handleGetRenterSuccess = (data) => {
    return {
        type: USER_GET_RENTERS_SUCCESS,
        users: data
    } 
};

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte de l'échec de la récupération des locataires
 * 
 * @param {string} error l'erreur remontée
 */
export const handleGetRenterError = (error) => {
    return {
        type: USER_GET_RENTERS_ERROR,
        message: error
    } 
};

/**
 * Fonction destinée à la suppression d'un locataire en utilisant l'objet passé en paramètre
 * Plusieurs actions seront emises pour informer redux de l'état en cours
 * 
 * @param {int} id l'identifiant de l'utilisateur à supprimer 
 */
export const handleDeleteRenter = (id) => {

    console.log('handleDeleteRenter');

    return function (dispatch, getState) {
        dispatch({
            type: USER_DELETE_RENTER_REQUEST, 
            renterId: id,
        });

        api.deleteUser(
            id,
            getState().connection.user.token,
            (id) => { dispatch(handleRemoveRenterSuccess(id)) },
            (error) => { dispatch(handleRemoveRenterError(error)) }
        )
    }
}

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte du succés de la suppression d'un locataire
 * 
 * @param {int} id l'identifiant de l'utilisateur à supprimer 
 */
export const handleRemoveRenterSuccess = (id) => {
    return {
        type: USER_DELETE_RENTER_SUCCESS,
        renterId: id,
        message: "Utilisateur Supprimé"
    }
}

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte de l'échec de la suppression d'un locataire
 * 
 * @param {string} error l'erreur remontée
 */
export const handleRemoveRenterError = (error) => {
    return {
        type: USER_DELETE_RENTER_ERROR,
        message: error
    }
}


/**
 * Fonction permettant de retourner l'action nécessaire pour vider les messages
 */
export const handleHideMessages = () => {
    return {
        type: USER_RENTER_HIDE_MESSAGES
    } 
};

/**
 * Fonction permettant de retourner l'action nécessaire pour vider les messages contenus dans la popup
 */
export const handleHideMessagesPopup = () => {
    return {
        type: USER_RENTER_HIDE_POPUP_MESSAGES
    } 
};

/**
 * Fonction destinée à la création d'un locataire en utilisant l'objet user passé en paramètre 
 * Plusieurs actions seront emises pour informer redux de l'état en cours
 * 
 * @param {object} user  
 */
export const handleUpdateRenter = (user) => {
    return function (dispatch, getState) {

        dispatch({
            type: USER_UPDATE_RENTER_REQUEST, 
            userId: user.userId
        });

        api.putUser(
            user,
            getState().connection.user.token,
            (dataUser) => { dispatch(handleUpdateRenterSuccess(dataUser)) },
            (error) => { dispatch(handleUpdateRenterError(error)) }
        )
    }
}

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte du succés de la création d'un utilisateur
 */
export const handleUpdateRenterSuccess = (user) => {
    return {
        type: USER_UPDATE_RENTER_SUCCESS,
        message: "L'utilisateur a été modifié",
        user: user
    }
};

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte l'échec de la création d'un utilisateur
 * 
 * @param {string} error le message d'erreur
 */
export const handleUpdateRenterError = (error) => {
    return {
        type: USER_UPDATE_RENTER_ERROR,
        message: error
    }
}



