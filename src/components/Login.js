import React, { Component } from 'react';
import { Card, CardTitle, Button, CardText, Media, MediaOverlay, TextField, FontIcon, CircularProgress }from 'react-md';


class Login extends Component {

    
    constructor(props) {
        super(props);
        console.log(props);

        this.history = props.history;

        this.state = {loading:false};

        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    //Méthode destinée à la gestion de la connexion
    handleSignIn(event) {
        event.preventDefault();
        this.setState({
            loading:true
        });

        //this.history.push('/dashboard');
    }

    handleChange(value, target) {
        console.log(target);

        this.setState({
            [target.name]: value
        });
    }

    render(history) {
        return (
            <div className="md-grid">

                <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet md-cell--3-offset">
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
                                label="Login"
                                lineDirection="center"
                                placeholder="Saisissez votre login"
                                leftIcon={<FontIcon>person</FontIcon>}
                                className="md-cell md-cell--12"
                                onChange={this.handleChange}
                                />

                            <TextField
                                id="mail_register"
                                type="password"
                                label="Mot de passe"
                                placeholder="Saisissez votre mot de passe"
                                leftIcon={<FontIcon>lock</FontIcon>}
                                className="md-cell md-cell--12"
                                onChange={this.handleChange}/>
            
                            <div className="md-text-center">
                                <Button raised primary iconBefore={false} 
                                    iconEl={!this.state.loading?<FontIcon>send</FontIcon>:<CircularProgress />} 
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
