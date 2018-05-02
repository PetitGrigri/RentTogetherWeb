import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import '../css/App.css'
import Locataires from './Locataires';
import Proprietaires from './Proprietaires';
import Locations from './Locations';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';
import PrivateRoute from '../containers/PrivateRoute';
import Chat from './Chat';
import GestionAdministrateurs from './GestionAdministrateurs';


const App = ( {store:store } ) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>

                    <Route exact path="/" component={Login} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/locataires" component={Locataires}  />
                    <PrivateRoute path="/proprietaires"  component={Proprietaires}  />
                    <PrivateRoute path="/locations" component={Locations}  />
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