// eslint-disable-next-line 
import React, { Component } from 'react';
import { Route , Redirect} from 'react-router-dom';
import fakeAuth from '../fakeAuth';


//TODO Déplacer dans un container

const PrivateRoute = ({ component: Component, ...rest }) => {


    console.log(
        'PrivateRoute', 
        rest
    );

    return <Route {...rest}
        render={ props =>
            //pour le moment on empêche la génération d'un composant pour être redirigé sur login 
            fakeAuth.isAuthenticated 
                ?   <Component {...props} />
                :   <Redirect 
                        to={{
                            pathname: "/",
                            state: { from: props.location }
                        }}
                    />
        }
    />
};

export default PrivateRoute;