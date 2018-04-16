import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import WebFontLoader from 'webfontloader';
import './css/index.css';
import App from './components/App';
import rootReducer from './reducers/rootReducer';


WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons'],
    },
});

const store = createStore(rootReducer);

console.log('Index : ',store);


ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
