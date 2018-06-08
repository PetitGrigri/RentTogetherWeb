import React, { Component } from 'react';
import Bubble from './Bubble';
import PropTypes from 'prop-types';
import { CircularProgress } from 'react-md';



class BubblesList extends Component {
    static propTypes = {
        messages: PropTypes.arrayOf(Object).isRequired,
        loading: PropTypes.bool,
    }


    render() {
        return (
            <div>
                { this.props.loading ? <CircularProgress id="loading_more_message"/> : null }
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