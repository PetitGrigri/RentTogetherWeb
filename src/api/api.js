import { empty } from '../utils/check.js';

const url = window.API_URL; //URL json correct

export default {
    connectionAPI :  (login, password, callBackOk, callBackError) => 
    {
        var options = {
            headers : {
                'Authorization': 'Basic ' +  btoa(this.login+':'+this.password)
            }
        }

        fetch(url, options)
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
                setTimeout(()=>{
                    callBackError(error.message);
                },1000);
            });
    }
}