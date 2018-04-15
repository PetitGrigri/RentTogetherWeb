import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import '../css/App.css'
import Locataires from './Locataires';
import Proprietaires from './Proprietaires';
import Locations from './Locations';
import PrivateRoute from './PrivateRoute';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Route
                render={({ location }) => (
                    <Switch key={location.key}>
                        <Route exact path="/" location={location} component={Login} />
                        <PrivateRoute path="/dashboard" location={location} component={Dashboard}  />
                        <PrivateRoute path="/locataires" location={location} component={Locataires}  />
                        <PrivateRoute path="/proprietaires" location={location} component={Proprietaires}  />
                        <PrivateRoute path="/locations" location={location} component={Locations}  />
                    </Switch>
                )}
            />
        );
    }
}

export default App;