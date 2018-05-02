import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, CircularProgress } from 'react-md';
import "../css/GestionAdministrateurs.css";

class LoadingFontIcon extends Component {

    render() {
        return (this.props.loading !== true) 
            ? <Button icon primary onClick={ this.props.onClick }>{this.props.children}</Button>
            : <CircularProgress id={this.props.id} className="circular-float-icon" centered={false} /> 
    }
}

//définition de la propriété obligatoire
LoadingFontIcon.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default LoadingFontIcon;