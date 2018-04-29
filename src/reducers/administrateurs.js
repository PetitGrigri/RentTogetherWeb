import { 
    USER_ADD_ADMINISTRATOR_REQUEST, 
    USER_ADD_ADMINISTRATOR_SUCCESS, 
    USER_ADD_ADMINISTRATOR_ERROR, 
    USER_ADD_ADMINISTRATOR_HIDE_ERROR, 
    USER_ADD_ADMINISTRATOR_HIDE_SUCCESS, 
    USER_GET_ADMINISTORS_REQUEST,
    USER_GET_ADMINISTORS_ERROR,
    USER_GET_ADMINISTORS_SUCCESS} from '../actions/administrateurs'


//le state initial
const initialConnectionState = {
    loadingAdd : false,
    loadingGet: false,
    message_success: "",
    message_error: "",
    message_get_success: "",
    message_get_error: "",
    users: []
}

const administrateurs = (state = initialConnectionState, action) => {

    switch(action.type) {
        // Gestion d'une demande d'ajout d'un utilisateur
        case USER_ADD_ADMINISTRATOR_REQUEST: 
            return Object.assign({}, state, {
                loadingAdd : true
            });

        // Gestion de la réussite de l'ajout d'un administrateur
        case  USER_ADD_ADMINISTRATOR_SUCCESS: 
            return Object.assign({}, state, {
                loadingAdd : false,
                message_success: action.message
            });

        // Gestion d'une erreur lors de l'ajout d'un administrateur
        case  USER_ADD_ADMINISTRATOR_ERROR : 
            return Object.assign({}, state, {
                loadingAdd : false,
                message_error: action.message
            });

        // Cacher le message d'erreur
        case  USER_ADD_ADMINISTRATOR_HIDE_ERROR : 
            return Object.assign({}, {
                message_error: ""
            });

        // Cacher le message de réussite
        case  USER_ADD_ADMINISTRATOR_HIDE_SUCCESS : 
            return Object.assign({}, {
                message_success: ""
            });
            


        case USER_GET_ADMINISTORS_REQUEST : 
            return Object.assign({}, {
                loadingGet: true,
                message_get_error: "",
                message_get_success: ""
            })


        case USER_GET_ADMINISTORS_ERROR :
            return Object.assign({}, {
                loadingGet: false,
                message_get_error: "",
                message_get_success: ""
            })

        case USER_GET_ADMINISTORS_SUCCESS :
            return Object.assign({}, {
                loadingGet: false,
                users: action.users,
                message_get_error: "",
                message_get_success: ""
            })





        //autres 
        default : 
            return state;
    }
}

export default administrateurs;