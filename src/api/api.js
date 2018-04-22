import { empty } from '../utils/check.js';

const url = '/json/login.json'; //URL json correct
//var url =  '/json/login.jsonte'; //URL json ERREUR
//var url = 'http://renttogetherapi-api.azurewebsites.net/api/Login'; //URL de l'api

export default {
    connectionAPI :  (login, password, callBackOk, callBackError) => 
    {
        console.log(callBackOk);
        console.log(callBackError);
        var options = {
            headers : {
                'Authorization': 'Basic ' +  btoa(this.login+':'+this.password)
            }
        }

        fetch(url, options)
            .then(response => {
                console.log(response);
                if (response.ok) {
                    return response.json().catch(error => {
                        throw Error("Erreur de l'API.");
                    });
                } else {
                    throw Error(response.statusText);
                }
            })
            .then(dataUser => {
                console.log(dataUser);
                //tentative de connexion d'un administrateur :
                if (!empty(dataUser.token) && !empty(dataUser.email) && !empty(dataUser.firstName) && !empty(dataUser.lastName) && !empty(dataUser.isAdmin)) {
                    console.log("test 2");
                    if (dataUser.isAdmin === 1) {
                        console.log("test 3");
                        setTimeout(()=>{
                            callBackOk(dataUser);
                        },1000);
                    } else {
                        console.log("test 4");
                        throw Error("Vous n'êtes pas autorisez à accéder à l'application.");
                    }
                } else {
                    console.log("test 5");
                    throw Error("Erreur de l'API");
                }
            })
            .catch(error => {

                console.log(error)

                setTimeout(()=>{
                    callBackError(error.message);
                },1000);
            });
    }
}