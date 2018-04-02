import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import './App.css';

class App extends Component {
    render() {
        return (
            <Route
                render={({ location }) => (
                    <Switch key={location.key}>
                        <Route exact path="/" location={location} component={Login} />
                        <Route path="/dashboard" location={location} component={Dashboard} />
                    </Switch>
                )}
            />
        );
    }
}

export default App;