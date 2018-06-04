import * as api from '../api/api.js';

//Types d'actions destinées à l'ajout d'un administrateur
export const
    // Récupération de la liste des utilisateurs
    USER_GET_OWNERS_REQUEST = 'USER_GET_OWNERS',
    USER_GET_OWNERS_SUCCESS = 'USER_GET_OWNERS_SUCCESS',
    USER_GET_OWNERS_ERROR = 'USER_GET_OWNERS_ERROR',
    // Ajout d'un administrateur
    USER_ADD_OWNER_REQUEST = 'USER_ADD_OWNER',
    USER_ADD_OWNER_SUCCESS= 'USER_ADD_OWNER_SUCCESS',
    USER_ADD_OWNER_ERROR= 'USER_ADD_OWNER_ERROR',
    // Suppression d'un administrateur
    USER_DELETE_OWNER_REQUEST = 'USER_DELETE_OWNER_REQUEST',
    USER_DELETE_OWNER_SUCCESS= 'USER_DELETE_OWNER_SUCCESS',
    USER_DELETE_OWNER_ERROR= 'USER_DELETE_OWNER_ERROR',
    // Modification d'un administrateur
    USER_UPDATE_OWNER_REQUEST = 'USER_UPDATE_OWNER_REQUEST',
    USER_UPDATE_OWNER_SUCCESS= 'USER_UPDATE_OWNER_SUCCESS',
    USER_UPDATE_OWNER_ERROR= 'USER_UPDATE_OWNER_ERROR',
    // Suppression des messages d'erreurs ou de réussite
    USER_OWNER_HIDE_MESSAGES= 'USER_OWNER_HIDE_MESSAGES',
    USER_OWNER_HIDE_POPUP_MESSAGES = 'USER_OWNER_HIDE_POPUP_MESSAGES'
    ;

/**
 * Fonction destinée à la création d'un administrateur en utilisant l'objet user passé en paramètre 
 * Plusieurs actions seront emises pour informer redux de l'état en cours
 * 
 * @param {object} user  
 */
export const handleCreateOwner = (user) => {
    return function (dispatch) {

        dispatch({
            type: USER_ADD_OWNER_REQUEST, 
        });

        api.createUtilisateur(
            user,
            (dataUser) => { dispatch(handleCreateOwnerSuccess(dataUser)) },
            (error) => { dispatch(handleCreateOwnerError(error)) }
        )
    }
}

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte du succés de la création d'un utilisateur
 */
export const handleCreateOwnerSuccess = (dataUser) => {
    return {
        type: USER_ADD_OWNER_SUCCESS,
        message: "L'utilisateur a été crée",
        user: dataUser
    }
};

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte l'échec de la création d'un utilisateur
 * 
 * @param {string} error le message d'erreur
 */
export const handleCreateOwnerError = (error) => {
    return {
        type: USER_ADD_OWNER_ERROR,
        message: error
    }
}

/**
 * Fonction destinée à la récupération de la liste des administrateurs
 * Plusieurs actions seront emises pour informer redux de l'état en cours ou pour transmettre les administrateurs récupérés
 * 
 * @param {object} data 
 */
export const handleGetOwners = () => {

    console.log('handleGetOwners');

    return function (dispatch, getState) {
        dispatch({
            type: USER_GET_OWNERS_REQUEST, 
        });

        //TODO check la vérification du token de l'utilisateur connecté

        api.getUtilisateurs(
            getState().connection.user.token,
            {
                isOwner:   1
            },
            (data) => { dispatch(handleGetOwnerSuccess(data)) },
            (error) => { dispatch(handleGetOwnerError(error)) }
        )
    }
}

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte du succés de la récupération des administrateurs
 * 
 * @param {object} data La liste des administrateurs
 */
export const handleGetOwnerSuccess = (data) => {
    return {
        type: USER_GET_OWNERS_SUCCESS,
        users: data
    } 
};

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte de l'échec de la récupération des administrateurs
 * 
 * @param {string} error l'erreur remontée
 */
export const handleGetOwnerError = (error) => {
    return {
        type: USER_GET_OWNERS_ERROR,
        message: error
    } 
};

/**
 * Fonction destinée à la suppression d'un administrateur en utilisant l'objet passé en paramètre
 * Plusieurs actions seront emises pour informer redux de l'état en cours
 * 
 * @param {int} id l'identifiant de l'utilisateur à supprimer 
 */
export const handleDeleteOwner = (id) => {

    console.log('handleDeleteOwner');

    return function (dispatch, getState) {
        dispatch({
            type: USER_DELETE_OWNER_REQUEST, 
            ownerId: id,
        });

        api.deleteUser(
            id,
            getState().connection.user.token,
            (id) => { dispatch(handleRemoveOwnerSuccess(id)) },
            (error) => { dispatch(handleRemoveOwnerError(error)) }
        )
    }
}

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte du succés de la suppression d'un administrateur
 * 
 * @param {int} id l'identifiant de l'utilisateur à supprimer 
 */
export const handleRemoveOwnerSuccess = (id) => {
    return {
        type: USER_DELETE_OWNER_SUCCESS,
        ownerId: id,
        message: "Utilisateur Supprimé"
    }
}

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte de l'échec de la suppression d'un administrateur
 * 
 * @param {string} error l'erreur remontée
 */
export const handleRemoveOwnerError = (error) => {
    return {
        type: USER_DELETE_OWNER_ERROR,
        message: error
    }
}


/**
 * Fonction permettant de retourner l'action nécessaire pour vider les messages
 */
export const handleHideMessages = () => {
    return {
        type: USER_OWNER_HIDE_MESSAGES
    } 
};

/**
 * Fonction permettant de retourner l'action nécessaire pour vider les messages contenus dans la popup
 */
export const handleHideMessagesPopup = () => {
    return {
        type: USER_OWNER_HIDE_POPUP_MESSAGES
    } 
};

/**
 * Fonction destinée à la création d'un administrateur en utilisant l'objet user passé en paramètre 
 * Plusieurs actions seront emises pour informer redux de l'état en cours
 * 
 * @param {object} user  
 */
export const handleUpdateOwner = (user) => {
    return function (dispatch, getState) {

        dispatch({
            type: USER_UPDATE_OWNER_REQUEST, 
            userId: user.userId
        });

        api.putUser(
            user,
            getState().connection.user.token,
            (dataUser) => { dispatch(handleUpdateOwnerSuccess(dataUser)) },
            (error) => { dispatch(handleUpdateOwnerError(error)) }
        )
    }
}

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte du succés de la création d'un utilisateur
 */
export const handleUpdateOwnerSuccess = (user) => {
    return {
        type: USER_UPDATE_OWNER_SUCCESS,
        message: "L'utilisateur a été modifié",
        user: user
    }
};

/**
 * Fonction permettant de retourner l'action nécessaire à la prise en compte l'échec de la création d'un utilisateur
 * 
 * @param {string} error le message d'erreur
 */
export const handleUpdateOwnerError = (error) => {
    return {
        type: USER_UPDATE_OWNER_ERROR,
        message: error
    }
}



