import React, { Component } from 'react';

import {BrowserRouter, Route, DefaultRoute, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';

class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    <Switch>
                        
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/" component={Login} />    
                    </Switch>
                </BrowserRouter>
        );
    }
}

export default App;