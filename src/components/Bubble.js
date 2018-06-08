import React, { Component } from 'react';
import '../css/Bubble.css';
import { Avatar} from 'react-md';
import PropTypes from 'prop-types';

class Bubble extends Component {
    render() {
        return (
            <div>
                <div className={ "avatar_wrapper "+((this.props.right) ? "right" : "left") }>
                    <Avatar  src={this.props.avatarImage}>
                        {this.props.avatarInitials}
                    </Avatar>
                </div>  
                <div className={ "bubble " + ((this.props.right) ? "right" : "left") }>
                    <p className="content">
                        { this.props.content }
                    </p>
                    <p className="detail">
                        le { this.props.date }
                    </p>
                </div>
                <div className="bubble_clear"></div>
            </div>
        );
    }
}
Bubble.propTypes = {
    content: PropTypes.string.isRequired,
    right: PropTypes.bool,
    date: PropTypes.string.isRequired,
    avatarInitials: PropTypes.string.isRequired,
    avatarImage: PropTypes.string,
  };
export default Bubble;