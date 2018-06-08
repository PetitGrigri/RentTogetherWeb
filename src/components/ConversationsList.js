import React, { Component } from 'react';
import { List, Subheader, ListItem, FontIcon, Avatar} from 'react-md';
import PropTypes from 'prop-types';

const Read = () => <FontIcon>done</FontIcon>;
const New = () => <FontIcon>new_releases</FontIcon>;

class ConversationsList extends Component {

    static propTypes = {
        conversations: PropTypes.arrayOf(Object).isRequired,
    }


    render() {
        return (
            <List>
                <Subheader primaryText="Liste de vos conversations" primary />
                { this.props.conversations.map ( conversation => 
                    <ListItem
                        key= {conversation.conversationId}
                        leftAvatar={<Avatar suffix="deep-purple" src={conversation.avatarImage}> {conversation.avatarInitials} </Avatar>}
                        rightIcon={ (conversation.allRead) ? <Read /> : <New /> }
                        primaryText= {
                            <div>
                                {conversation.userFirstName} {conversation.userLastname}
                                <span 
                                    style={{"float":"right", "marginRight":"10px"}} 
                                    className="md-text--secondary">
                                    {conversation.lastMessageDate}  
                                </span>
                            </div>}
                        secondaryText= {conversation.lastMessageContent}
                        
                        className={ (conversation.active) ? "active" : ""}
                    />
                ) }
                
            </List>
        );
    }
}

export default ConversationsList;