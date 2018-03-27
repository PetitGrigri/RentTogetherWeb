import React, { Component } from 'react';
import Password from './Password';
import InputText from './InputText';
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleSignIn   = this.handleSignIn.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    //Méthode destinée à la gestion de la connexion
    handleSignIn(event) {
        event.preventDefault();
        alert('//TODO')
    }

    //Méthode destinée à la gestion de l'enregistrement d'un nouvel utilisateur
    handleRegister(event) {
        event.preventDefault();
        alert('//TODO')
    }

    handleChange(event) {
        console.log(event);

        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            [event.target.name] : value
        });
    }

    render() {
        return (
            <div>
                <nav>
                    <div class="nav-wrapper">
                        <ul class="left hide-on-med-and-down">
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/">Login</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div className="col s12 m6 l4 offset-m3 offset-l4">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="img/banniere.jpg" />
                                <span className="card-title">RentTogether</span>
                            </div>
                            <div className="card-tabs">
                                <ul className="tabs tabs-fixed-width">
                                    <li className="tab"><a  className="active" href="#connexion_tab">Connexion</a></li>
                                    <li className="tab"><a href="#enregistrer_tab">S'enregistrer</a></li>
                                </ul>
                            </div>

                            <div className="card-content">
                            
                                <div className="row" id="connexion_tab">
                                    <form onSubmit={this.handleSignIn}>
                                        <InputText name="name_login" icon="icon-male-user-1" label="Identifiant" onChange={this.handleChange}/>
                                        <Password name="password_login" onChange={this.handleChange}/>

                                        <button className="col s12 btn waves-effect waves-light" type="submit" name="action">Se connecter
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </form> 
                                </div>   
                                <div className="row" id="enregistrer_tab">
                                    <form onSubmit={this.handleRegister}>
                                        <InputText name="name_register" label="Nom" onChange={this.handleChange}/>
                                        <InputText name="first_name_register" label="Prénom"onChange={this.handleChange}/>
                                        <InputText name="mail_register" iconMaterial="mail" label="Mail" onChange={this.handleChange}/>
                                        <Password name="password_register" onChange={this.handleChange}/>

                                        <button className="col s12 btn waves-effect waves-light" type="submit" name="action" >S'enregistrer
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </form>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
