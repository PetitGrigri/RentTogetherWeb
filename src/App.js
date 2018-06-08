import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import './css/App.css'

import GestionLocataires from './screen/GestionLocataires';
import GestionProprietaires from './screen/GestionProprietaires';
import GestionAdministrateurs from './screen/GestionAdministrateurs';
import Dashboard from './screen/Dashboard';
import Locations from './screen/Locations';
import Login from './screen/Login';

import Chat from './screen/Chat';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';
import PrivateRoute from './containers/PrivateRoute';




const App = ( {store, ...rest } ) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Chat} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/locataires" component={GestionLocataires}  />
                    <PrivateRoute path="/proprietaires"  component={GestionProprietaires}  />
                    <PrivateRoute path="/locations" component={Locations}    />
                    <PrivateRoute path="/chat" component={Chat}  />
                    <PrivateRoute path="/administrateurs" component={GestionAdministrateurs}  />
                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        </Provider>)
};

//définition de la propriété obligatoire
App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;