import React, { Component } from 'react';
import AdminTemplate from '../components/AdminTemplate';
import { Grid, Cell, FontIcon, List, Subheader, ListItem, Avatar, TextField, Button } from 'react-md';
import Bubble from '../components/Bubble';
import '../css/Chat.css';
import BubbleList from './BubbleList';

const Read = () => <FontIcon>done</FontIcon>;
const New = () => <FontIcon>new_releases</FontIcon>;

const messages= {};

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

        console.log(value, event.target.style.height, this.messageWrapper.current.clientHeight);
    }

    render() {
        let divInputHeight= "calc(100% - "+this.state.messageBoxHeight+"px)";
        let messageBoxHeight = this.state.messageBoxHeight+"px";

        console.log(divInputHeight, messageBoxHeight);

        return (
            <AdminTemplate>
                <div  className="full_height">
                    <div className="conversations md-paper md-paper--2 ">
                        <List>
                            <Subheader primaryText="Conversations" primary />
                            <ListItem
                                leftAvatar={<Avatar suffix="deep-purple" src="https://randomuser.me/api/portraits/thumb/men/83.jpg">B</Avatar>}
                                rightIcon={<Read />}
                                primaryText="Brunch this weekend?"
                                secondaryText={'Ali Coz dzqd qzd zqnnors\nI\'ll be in your neighborhood sometime this week'}
                                threeLines
                                active
                            />
                            <ListItem
                                leftAvatar={<Avatar suffix="green">Q</Avatar>}
                                rightIcon={<Read />}
                                primaryText="Summer BBQ"
                                secondaryText={'to Alex, Scott, Jennifer\nWish I could come, but I\'m out of town this weekend.'}
                                threeLines
                            />
                            <ListItem
                                leftAvatar={<Avatar suffix="orange">A</Avatar>}
                                rightIcon={<New />}
                                primaryText="Oui Oui"
                                secondaryText="Sandra Adams - Do you have Paris recommendations? Have you ever been?"
                                threeLines
                            />
                                                    <ListItem
                                leftAvatar={<Avatar suffix="deep-purple">B</Avatar>}
                                rightIcon={<New />}
                                primaryText="Brunch this weekend?"
                                secondaryText={'Ali Connors\nI\'ll be in your neighborhood sometime this week'}
                                threeLines
                            />
                            <ListItem
                                leftAvatar={<Avatar suffix="green">Q</Avatar>}
                                rightIcon={<Read />}
                                primaryText="Summer BBQ"
                                secondaryText={'to Alex, Scott, Jennifer\nWish I could come, but I\'m out of town this weekend.'}
                                threeLines
                            />
                           
                            <ListItem
                                leftAvatar={<Avatar suffix="orange">A</Avatar>}
                                rightIcon={<Read />}
                                primaryText="Oui Oui"
                                secondaryText="Sandra Adams - Do you have Paris recommendations? Have you ever been?"
                                threeLines
                            />
                                                    <ListItem
                                leftAvatar={<Avatar suffix="deep-purple">B</Avatar>}
                                rightIcon={<Read />}
                                primaryText="Brunch this weekend?"
                                secondaryText={'Ali Connors\nI\'ll be in your neighborhood sometime this week'}
                                threeLines
                            />
                            <ListItem
                                leftAvatar={<Avatar suffix="green">Q</Avatar>}
                                rightIcon={<Read />}
                                primaryText="Summer BBQ"
                                secondaryText={'to Alex, Scott, Jennifer\nWish I could come, but I\'m out of town this weekend.'}
                                threeLines
                            />
                        
                            <ListItem
                                leftAvatar={<Avatar suffix="orange">A</Avatar>}
                                rightIcon={<Read />}
                                primaryText="Oui Oui"
                                secondaryText="Sandra Adams - Do you have Paris recommendations? Have you ever been?"
                                threeLines
                            />
                        </List>
                    </div>
                    <div className="conversation_messages">
                        <div style={{"height":divInputHeight, "overflow":"auto"}}>
                            <BubbleList messages={messages}/>
                        </div>
                        <div className="message_box" style={{"height":messageBoxHeight}}>
                            <div className="input" ref={this.messageWrapper}>
                                <TextField 
                                    placeholder="Message"
                                    rows={2}
                                    onChange={this.onChangeMessage}
                                    value={this.state.message}
                                />
                            </div>
                            <div className="button">
                                <Button floating primary >home</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminTemplate>
        );
    }
}

export default Chat;