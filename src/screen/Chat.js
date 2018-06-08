import React, { Component } from 'react';
import AdminTemplate from '../components/AdminTemplate';
import { TextField, Button } from 'react-md';
import '../css/Chat.css';
import BubblesList from '../components/BubblesList';
import ConversationsList from '../components/ConversationsList';
import PropTypes from 'prop-types';

//fake data message
const messages= [{
    messageId:          9876578,
    content :           "Un message de test",
    date :              "05/08/2017 à 10h35",
    avatarImage :       "https://randomuser.me/api/portraits/thumb/men/76.jpg",
    avatarInitials :    "FG",
},{
    messageId:          4567890,
    content :           "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte",
    date :              "05/08/2017 à 10h36",
    avatarImage :       "https://randomuser.me/api/portraits/thumb/women/10.jpg",
    avatarInitials :    "BP",
    right:              true,
},
{
    messageId:          9599,
    content :           "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
    date :              "05/08/2017 à 10h37",
    avatarImage :       "https://randomuser.me/api/portraits/thumb/women/10.jpg",
    avatarInitials :    "BP",
    right:              true,
},
{
    messageId:          98765,
    content :           "Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte",
    date :              "05/08/2017 à 10h38",
    avatarImage :       "https://randomuser.me/api/portraits/thumb/women/10.jpg",
    avatarInitials :    "BP",
    right:              true,
},
{
    messageId:          6789,
    content :           "Un autre message de test",
    date :              "05/08/2017 à 10h39",
    avatarImage :       "https://randomuser.me/api/portraits/thumb/men/76.jpg",
    avatarInitials :    "CC",
},
];

const conversations =[{
    conversationId :    9876789,
    lastMessageContent: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant ",
    lastMessageDate:    "20/05/2017",
    allRead:            false,
    userFirstName:      "Bella",
    userLastname:       "PAULA",
    avatarInitials:     "BP",
    avatarImage:        "https://randomuser.me/api/portraits/thumb/women/10.jpg",
    active:             true,
},
{
    conversationId :    9876789,
    lastMessageContent: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant ",
    lastMessageDate:    "20/05/2015",
    allRead:            true,
    userFirstName:      "Pierre",
    userLastname:       "DUPONT",
    avatarInitials:     "PD",
    avatarImage:        "https://randomuser.me/api/portraits/thumb/men/73.jpg",
    active:             false,
},
];

class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            messageBoxHeight: 80
        };
        this.messageWrapper = React.createRef();
    }

    onChangeMessage = (value, event) => {
        this.setState({
            message: value,
            messageBoxHeight: this.messageWrapper.current.clientHeight
        });
    }

    render() {
        let divInputHeight= "calc(100% - "+this.state.messageBoxHeight+"px)";
        let messageBoxHeight = this.state.messageBoxHeight+"px";

        console.log(divInputHeight, messageBoxHeight);

        return (
            <AdminTemplate>
                <div  className="full_height">
                    <div className="conversations md-paper md-paper--2 ">
                        <ConversationsList conversations={conversations} />
                    </div>
                    <div className="conversation_messages">
                        <div style={{"height":divInputHeight, "overflow":"auto"}}>
                            <BubblesList messages={messages} />
                        </div>
                        <div className="message_box" style={{"height":messageBoxHeight}}>
                            <div className="input" ref={this.messageWrapper}>
                                <TextField 
                                    id="input-new-message"
                                    placeholder="Message"
                                    rows={2}
                                    maxRows={15}
                                    onChange={this.onChangeMessage}
                                    value={this.state.message}
                                />
                            </div>
                            <div className="button">
                                <Button floating primary >send</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminTemplate>
        );
    }
}

export default Chat;