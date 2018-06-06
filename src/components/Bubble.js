import React, { Component } from 'react';
import '../css/Bubble.css';
import { FontIcon } from 'react-md';
import PropTypes from 'prop-types';

class Bubble extends Component {
    render() {
        return (
            <div className={ "bubble " + ((this.props.right) ? "right" : "left") }>
                <p className="content">
                    { this.props.content }
                </p>
                <p className="detail">
                    { this.props.read ? 'Lu' : 'Envoyé le' } le 05/08/2017
                </p>
            </div>
        );
    }
}
Bubble.propTypes = {
    content: PropTypes.string.isRequired,
    right: PropTypes.bool,
    read: PropTypes.bool,
    date: PropTypes.instanceOf(Date).isRequired
  };
export default Bubble;