import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import '../css/App.css'
import Locataires from './Locataires';
import Proprietaires from './Proprietaires';
import Locations from './Locations';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';
import { signIn } from '../actions';

const App = ( {store:store } ) => {

    //Test
    console.log('App : ',store.getState().connection);
    store.dispatch(signIn());
    console.log('App Dispatch done: ',store.getState().connection);

    //Render
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/locataires" component={Locataires}  />
                    <PrivateRoute path="/proprietaires"  component={Proprietaires}  />
                    <PrivateRoute path="/locations" component={Locations}  />
                </Switch>
            </BrowserRouter>
        </Provider>)
};

//définition de la propriété obligatoire
App.propTypes = {
    store: PropTypes.object.isRequired
};




export default App;