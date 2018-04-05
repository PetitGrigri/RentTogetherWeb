// eslint-disable-next-line 
import React, { Component } from 'react';
import { Route , Redirect} from 'react-router-dom';

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

export default PrivateRoute;