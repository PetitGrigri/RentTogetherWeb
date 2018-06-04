import React, { Component } from 'react';
import { Card, CardTitle, Button, CardText, Media, MediaOverlay, TextField, FontIcon, CircularProgress }from 'react-md';
import { connect } from 'react-redux'
import { handleSignIn, handleHideError } from '../actions/connection.js'
import AlertMaterialize from '../components/AlertMaterialize.js';


class Login extends Component {
    //variables destinées à recevoir le contenu du login et du password
    login =     null;
    password =  null;

    constructor(props) {
        super(props);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleHideError = this.handleHideError.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }
    
    //Méthode destinée à la gestion de la connexion
    handleSignIn(event) {
        event.preventDefault();
        this.props.hangleSignIn(this.login.getField().value, this.password.getField().value);
    }

    handleHideError () {
        this.props.handleHideError();
    }

    render() {
        return (
            <div className="md-grid">

                <Card className="cards__example md-block-centered" style={{width:"400px"}}>
                    <Media>
                        <img src="img/banniere.jpg" alt="RentTogether"/>
                        <MediaOverlay>
                            <CardTitle title="RentTogether" subtitle="Connexion" />
                        </MediaOverlay>
                    </Media>
                    <CardText>
                        <form id="conection_form" onSubmit={this.handleSignIn}>
                            { this.props.message?<AlertMaterialize message={this.props.message} handleClose={this.handleHideError} error />:null}

                            <TextField
                                id="login"
                                name="login"
                                label="Login"
                                lineDirection="center"
                                placeholder="Saisissez votre login"
                                leftIcon={<FontIcon>person</FontIcon>}
                                className="md-cell md-cell--12"
                                ref={l => this.login = l}
                            />

                            <TextField
                                id="password"
                                name="password"
                                type="password"
                                label="Mot de passe"
                                placeholder="Saisissez votre mot de passe"
                                leftIcon={<FontIcon>lock</FontIcon>}
                                className="md-cell md-cell--12"
                                ref={p => this.password = p}
                            />
            
                            <div className="md-text-center">
                                { this.props.loadingSignIn
                                    ? <CircularProgress id="circular_login" />
                                    : <Button raised primary iconBefore={false} 
                                        iconEl={<FontIcon>input</FontIcon>}
                                        type="submit" >
                                        Se connecter
                                    </Button> }
                            </div>

                        </form>
                    </CardText>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loadingSignIn: state.connection.loadingSignIn, 
    isAuthenticated: state.connection.isAuthenticated, 
    message: state.connection.message,
})

const mapDispatchToProps = dispatch => ({
    hangleSignIn: (login, password) => dispatch(handleSignIn(login, password)),
    handleHideError: () => dispatch(handleHideError())
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
