import React, { Component } from 'react';
import { Card, CardTitle, Button, CardText, Media, MediaOverlay, TextField, FontIcon, CircularProgress }from 'react-md';
import $ from 'jquery';
import fakeAuth from '../fakeAuth';

class Login extends Component {
    //variables destinées à recevoir le contenu du login et du password
    login =     null;
    password =  null;

    constructor(props) {
        console.log(props);
        super(props);
        this.history = props.history;

        this.state = {loading:false};
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    //Méthode destinée à la gestion de la connexion
    handleSignIn(event) {
        event.preventDefault();
        
        this.setState({
            loading:true
        });

        console.log('login ',this.login.getField().value||'vide');
        console.log('password ',this.password.getField().value||'vide');

        
        
        var basicAuth = btoa(this.login+':'+this.password);

        console.log(basicAuth);

        var history = this.history;
        
        //TODO à gérer par redux
        //remplacer /json/login.json par : http://renttogetherapi-api.azurewebsites.net/api/Login'
        $.ajax({
            type: 'GET',
            url: '/json/login.json',
            //url :'http://renttogetherapi-api.azurewebsites.net/api/Login',
            headers: {
                'Authorization': 'Basic ' + basicAuth
            },
            success : function(data) {
                console.log('connecté');
                console.log(data);
                fakeAuth.authenticate(() => history.push('/dashboard'));
                
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('erreur');
                console.log('//TODO',jqXHR, textStatus, errorThrown );
            }
        });
    }

    render(history) {
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
                                <Button raised primary iconBefore={false} 
                                    iconEl={!this.state.loading?<FontIcon>send</FontIcon>:<CircularProgress id="circular_login"/>} 
                                    type="submit">Se connecter</Button>
                                
                            </div>

                        </form>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default Login;
