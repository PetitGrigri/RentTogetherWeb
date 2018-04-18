// eslint-disable-next-line 
import React, { Component } from 'react';
import { Route , Redirect} from 'react-router-dom';
import { connect } from 'react-redux'

/**
 * Containers permettant de rendre 
 * @param {object} param0 
 */
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return <Route {...rest}
        render={ props =>
            isAuthenticated
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

const mapStateToProps = state => ({
    isAuthenticated : state.connection.isAuthenticated
})

 export default  connect(mapStateToProps)(PrivateRoute);