import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import './App.css';
import Locataires from './Locataires';
import Proprietaires from './Proprietaires';
import Locations from './Locations';

//TODO Créer un composant à la place
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

class App extends Component {
    constructor(props) {
        super(props);
        this.checkAuthentication = this.checkAuthentication.bind(this);
    }

    checkAuthentication() {
        alert('todo');
        return false;
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