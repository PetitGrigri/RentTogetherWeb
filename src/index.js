import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import WebFontLoader from 'webfontloader';
import './css/index.css';
import App from './components/App';
import mainReducer from './reducers/mainReducer';

import thunkMiddleware from 'redux-thunk'
//import { createLogger } from 'redux-logger'


WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons'],
    },
});

//création du store redux
const store = createStore(
    mainReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

 //Debug
 /*
    console.log('App : ',store.getState().connection);
    store.dispatch(signIn());
    console.log('App Dispatch done: ',store.getState().connection);
    store.dispatch(handleSignInSuccess());
    console.log('App handleSignInSuccess done: ',store.getState().connection);
*/

//rendu de l'application
ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
