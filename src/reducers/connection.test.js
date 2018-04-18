import connection from "./connection";
import deepFreeze from 'deep-freeze';
import { SIGN_IN_REQUEST, SIGN_IN_ERROR, SIGN_IN_SUCESS }from '../actions/action.js'

test('Default state', () => {

    let stateAfter  = {
        loadingSignIn : false,
        firstName :     "",
        lastName :      "",
        message:        "",
    };
    expect(connection()).toEqual(stateAfter);
});

test('Connexion sucessfull', () => {
    //état du state avant une connexion réussie
    let stateBefore  = {
        loadingSignIn : true,
        firstName :     "",
        lastName :      "",
        message:        "",
    };
    
    //On fige stateBefore (un reducer ne doit pas modifier l'état en cours)
    deepFreeze(stateBefore);

    //Le nouveau state que l'on est censé obtenir
    let stateAfter  = {
        loadingSignIn : false,
        firstName :     "Hello",
        lastName :      "World",
        message:        "",
    };
    //le résultat de l'action à prendre en compte par le reducer
    let action = {
        type : SIGN_IN_SUCESS,
        firstName :     "Hello",
        lastName :      "World",
    };
    
    expect(connection(stateBefore, action)).toEqual(stateAfter);
});