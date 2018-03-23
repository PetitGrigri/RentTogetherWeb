import React, { Component } from 'react';

class Password extends Component {
    constructor(props) {
        super(props);
        this.changeVisibility = this.changeVisibility.bind(this);
        this.checkContent = this.checkContent.bind(this);
        this.state  = { 
            showPassword : false,
            characters : 0
        };
    }

    changeVisibility() {
        this.setState((previousState, props) => ({
            showPassword : !previousState.showPassword
        }));
    }

    checkContent(event) {
        this.setState({characters:this.textInput.value.length})

        if (this.props.onChange !== null) {
            this.props.onChange(event)
        }
    }
    
    render() {
        let padlockPasswordClassName = 'prefix ';
        padlockPasswordClassName += (this.state.showPassword ? ' icon-unlock' : ' icon-lock');
      
        let showPasswordText = this.state.characters > 0 ? 'visible':'hidden';

        return (
            <div className="input-field row">
                <i className={padlockPasswordClassName} onClick={this.changeVisibility}></i>

                <input id={this.props.name}
                    name={this.props.name}
                    type={this.state.showPassword ? 'text' : 'password' } 
                    ref={(input) => { this.textInput = input; }}
                    onChange={this.checkContent} 
                    className="password" />

                <label htmlFor={this.props.password}>Mot de passe</label>

                <p className="right-align">
                    <a className="leaf-text text-darken-2" 
                        href="#" 
                        style={{visibility:showPasswordText}} 
                        onClick={this.changeVisibility}>
                        {this.state.showPassword?'Masquer':'Afficher'} le mot de passe
                    </a>
                </p>
            </div>
        );
    }
}
Password.defaultProps = {
    name : 'password',
    onChange : null
};

export default Password;