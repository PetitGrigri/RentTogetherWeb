import connection from "./connection";
import deepFreeze from 'deep-freeze';
import { SIGN_IN_REQUEST, SIGN_IN_ERROR, SIGN_IN_SUCESS } from '../actions/connection.js'

test('Default state', () => {
    //état du state après un accès au state sans aucune action
    let stateAfter  = {
        loadingSignIn : false,
        isAuthenticated : false,
        user: {},
        message : "",
    };

    //On fige : un reducer ne doit rien modifier
    deepFreeze(stateAfter);

    //test
    expect(
        connection(undefined, {action:undefined})
    ).toEqual(stateAfter);
});


test('Connexion sucessfull', () => {
    let userResponse= {
        "userId": 1,
        "firstName": "Super",
        "lastName": "Admin",
        "email": "super.admin@renttogether.com",
        "password": "#I@mF@mous",
        "phoneNumber": "0102030405",
        "isOwner": 0,
        "isRoomer": 0,
        "isAdmin": 1,
        "createDate": "2018-04-01T11:22:08.1901804",
        "token": "another_token_in_the_world",
        "tokenExpirationDate": "2018-04-01T11:22:08.190109"
    };

    let userState = {
        "userId": 1,
        "firstName": "Super",
        "lastName": "Admin",
        "email": "super.admin@renttogether.com",
        //no password
        "phoneNumber": "0102030405",
        "isOwner": 0,
        "isRoomer": 0,
        "isAdmin": 1,
        "createDate": "2018-04-01T11:22:08.1901804",
        "token": "another_token_in_the_world",
        "tokenExpirationDate": "2018-04-01T11:22:08.190109"
    }


    //état du state avant une connexion réussie
    let stateBefore  = {
        loadingSignIn : true,
        isAuthenticated : false,
        user: {},
        message : "",
    };

    //Le nouveau state que l'on est censé obtenir
    let stateAfter  = {
        loadingSignIn : false,
        isAuthenticated : true,
        user: userState,
        message : "",
    };

    ///On fige : un reducer ne doit rien modifier
    deepFreeze(stateBefore);
    deepFreeze(stateAfter);
    deepFreeze(userResponse);
    deepFreeze(userState);

    //le résultat de l'action à prendre en compte par le reducer
    let action = {
        type : SIGN_IN_SUCESS,
        user: userResponse
    };

    expect(
        connection(stateBefore, action)
    ).toEqual(stateAfter);
});