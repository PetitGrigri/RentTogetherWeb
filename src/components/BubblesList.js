import React, { Component } from 'react';
import Bubble from './Bubble';
import PropTypes from 'prop-types';



class BubblesList extends Component {
    static propTypes = {
        messages: PropTypes.arrayOf(Object).isRequired,
    }

    render() {
        return (
            <div>
                { this.props.messages.map( message =>
                    <Bubble
                        key= {message.messageId}
                        content = {message.content}
                        date= {message.date}
                        avatarImage= {message.avatarImage}
                        avatarInitials= {message.avatarInitials}
                        right= {message.right}
                    /> )
                }
                
            </div>
        );
    }
}


export default BubblesList;