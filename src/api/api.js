import { empty } from '../utils/check.js';

const url = window.API_URL;

/**
 * Méthode permettant de se connecter à l'API
 * 
 * @param {string} login Le login de l'utilisateur
 * @param {string} password Le mot de passe de l'utilisateur
 * @param {function} callBackOk Le callback à utiliser quand la connexion sera validée
 * @param {function} callBackError Le callback à utiliser en cas d'erreur
 */
export const connectionAPI =  (login, password, callBackOk, callBackError) => {
    var options = {
        mode: 'cors',
        headers : {
            'Authorization': 'Basic ' +  btoa(login+':'+password)
        }
    }

    fetch(url+ "/Login", options)
        .then(response => {
            if (response.ok) {
                return response.json().catch(error => {
                    throw Error("Erreur de l'API.");
                });
            } else {
                throw Error(response.statusText);
            }
        })
        .then(dataUser => {
            //tentative de connexion d'un administrateur :
            if (!empty(dataUser.token) && !empty(dataUser.email) && !empty(dataUser.firstName) && !empty(dataUser.lastName) && !empty(dataUser.isAdmin)) {
                if (dataUser.isAdmin === 1) {
                    callBackOk(dataUser);
                } else {
                    throw Error("Vous n'êtes pas autorisez à accéder à l'application.");
                }
            } else {
                throw Error("Erreur de l'API");
            }
        })
        .catch(error => {
            callBackError(error.message);
        });
};

/**
 * Fonction permettant de créer un utilisateur
 * 
 * @param {object} dataAdministrator 
 * @param {function} callBackOk 
 * @param {function} callBackError 
 */
export const createAdministrator = function(dataAdministrator,  callBackOk, callBackError) {

    // Le header contiendra le token d'authentification plus tard
    var myHeaders = new Headers({
        'Content-Type':'application/json'
    });

    // Création du json de la requête transmise
    var object = {};
    dataAdministrator.forEach(function(value, key){
        object[key] = value;
    });
    var json = JSON.stringify(object);

    //debug
    console.log(json);

    //les paramêtres de la requête
    var options = {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: json
    };

    fetch(url+ "/Users", options)
        .then(response => {
            if (response.ok) {
                callBackOk()
            } else {
                throw Error(response.statusText);
            }
        })
        .catch(error => {
            callBackError(error.message);
        });
}



export const getAdministrators = function(token, callBackOk, callBackError) {
    // Le header contiendra le token d'authentification plus tard
    var myHeaders = new Headers({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+token
    });
    
    //les paramêtres de la requête
    var options = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    fetch(url+ "/Users", options)
        .then(response => {
            if (response.ok) {
                return response.json().catch(error => {
                    throw Error("Erreur de l'API.");
                });
            } else {
                throw Error(response.statusText);
            }
        })
        .then(dataAdministrators => {
            callBackOk(dataAdministrators);
        })
        .catch(error => {
            callBackError(error.message);
        });
}


