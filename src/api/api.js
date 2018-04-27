import { empty } from '../utils/check.js';

const url = window.API_URL;

export default {
    connectionAPI :  (login, password, callBackOk, callBackError) => 
    {
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
    },
    createAdministrator: function(dataAdministrator,  callBackOk, callBackError) {
        
        
        //le header contiendra le token d'authentification plus tard
        var myHeaders = new Headers({
            'Content-Type':'application/json'
        });

        var object = {};
        dataAdministrator.forEach(function(value, key){
            object[key] = value;
        });
        var json = JSON.stringify(object);

        console.log(json);

        //les paramêtres de la requête
        var options = {
          method: 'POST',
          headers: myHeaders,
          mode: 'cors',
          cache: 'default',
          body: json
        };

        //fetch(url+ "/Users", options)
        //fetch('http://another.localhost.com/index.php/test-post', options)
        fetch('http://renttogetherapi-api.azurewebsites.net/api'+ "/Users", options)
            .then(response => {
                console.log(response)
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
}