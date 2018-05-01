import React, { Component } from 'react';
import '../css/AlertMaterialize.css';
import PropTypes from 'prop-types';
import { FontIcon } from 'react-md';

class AlertMaterialize extends Component {

    handleClose = () => {
        this.props.handleClose();
    }
    render() {
        let className = "alert " + (this.props.success ? "success" : "error");
        return (
            <div className={className}>
                {this.props.message}
                {this.props.children}
                <button type="button" className="close" onClick={this.handleClose}>
                    <FontIcon inherit>close</FontIcon>
                </button>
            </div>
        );
    }
}

//définition de la propriété obligatoire
AlertMaterialize.propTypes = {
    message: PropTypes.string.isRequired
};


export default AlertMaterialize;