import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import WebFontLoader from 'webfontloader';
import './css/index.css';
import App from './components/App';
import mainReducer from './reducers/mainReducer';
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger';

WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons'],
    },
});

//création du store redux
const store = createStore(
    mainReducer,
    applyMiddleware(
        thunkMiddleware,    //permet d'avoir de propager de dispatcher des fonctions
        logger,             //permet d'avoir un reporting de ce qu'il se passe 
    )
);

//rendu de l'application
ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker(); //TODO : mis en place par le create-rect-app : voir à quoi ca sert
