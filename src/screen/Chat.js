import React, { Component } from 'react';
import AdminTemplate from '../components/AdminTemplate';
import { TextField, Button } from 'react-md';
import '../css/Chat.css';
import BubblesList from '../components/BubblesList';
import ConversationsList from '../components/ConversationsList';

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
{
    messageId:          2,
    content :           "Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte",
    date :              "05/08/2017 à 10h38",
    avatarImage :       "https://randomuser.me/api/portraits/thumb/women/10.jpg",
    avatarInitials :    "BP",
    right:              true,
},
{
    messageId:          3,
    content :           "Un autre message de test",
    date :              "05/08/2017 à 10h39",
    avatarImage :       "https://randomuser.me/api/portraits/thumb/men/76.jpg",
    avatarInitials :    "CC",
},
{
    messageId:          4,
    content :           "Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte",
    date :              "05/08/2017 à 10h38",
    avatarImage :       "https://randomuser.me/api/portraits/thumb/women/10.jpg",
    avatarInitials :    "BP",
    right:              true,
},
{
    messageId:          5,
    content :           "Un autre message de test",
    date :              "05/08/2017 à 10h39",
    avatarImage :       "https://randomuser.me/api/portraits/thumb/men/76.jpg",
    avatarInitials :    "CC",
},
{
    messageId:          6,
    content :           "Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte",
    date :              "05/08/2017 à 10h38",
    avatarImage :       "https://randomuser.me/api/portraits/thumb/women/10.jpg",
    avatarInitials :    "BP",
    right:              true,
},
{
    messageId:          7,
    content :           "Un autre message de test",
    date :              "05/08/2017 à 10h39",
    avatarImage :       "https://randomuser.me/api/portraits/thumb/men/76.jpg",
    avatarInitials :    "CC",
},
];

//fake data conversation
const conversations =[{
    conversationId :    1,
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
    conversationId :    2,
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
            messageBoxHeight: 80,
            loading: false,
        };
        this.messageWrapper = React.createRef();
        this.bubblesWrapper = React.createRef();
    }

    onChangeMessageContent = (value, event) => {
        this.setState({
            message: value,
            messageBoxHeight: this.messageWrapper.current.clientHeight
        });
    }

    onScrollConversationBubbles = (event) => {
        /*console.log(this.bubblesWrapper.current);

        console.log("scrollTop", this.bubblesWrapper.current.scrollTop);
        console.log("clientHeight",this.bubblesWrapper.current.clientHeight);
        console.log("scrollHeight", this.bubblesWrapper.current.scrollHeight);*/

        if ((this.bubblesWrapper.current.scrollTop === 0) && (!this.state.loading)) {
            this.setState({
                loading : true
            });
            console.log("loading in progress");
        }
    }

    componentDidMount () {

        this.bubblesWrapper.current.scrollTop= this.bubblesWrapper.current.scrollHeight -this.bubblesWrapper.current.clientHeight;
    }


    render() {
        let divInputHeight= "calc(100% - "+this.state.messageBoxHeight+"px)";
        let messageBoxHeight = this.state.messageBoxHeight+"px";

        return (
            <AdminTemplate>
                <div  className="full_height">
                    <div className="conversations md-paper md-paper--2 ">
                        <ConversationsList conversations={conversations} load={false}/>
                    </div>
                    <div className="conversation_messages">
                        <div style={{ "height":divInputHeight }} className="conversation_bubbles"  ref={this.bubblesWrapper} onScroll={this.onScrollConversationBubbles}>
                            <BubblesList messages={messages} loading={this.state.loading}/>
                        </div>
                        <div className="message_box" style={{"height":messageBoxHeight}}>
                            <div className="input" ref={this.messageWrapper}>
                                <TextField 
                                    id="input-new-message"
                                    placeholder="Message"
                                    rows={2}
                                    maxRows={15}
                                    onChange={this.onChangeMessageContent}
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