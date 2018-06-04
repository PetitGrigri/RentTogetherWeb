import React, { Component } from 'react';
import AdminTemplate from '../components/AdminTemplate';
import { Grid, Cell, FontIcon, List, Subheader, ListItem, Avatar } from 'react-md';

const StarIcon = () => <FontIcon>star</FontIcon>;

class Chat extends Component {
    render() {
        return (
            <AdminTemplate>
                <Grid>
                    <Cell size={4}  style={{"backgroundColor":"#fff", "margin":0,"padding":0}}>
                        
                    </Cell>
                    <Cell size={8}  style={{"backgroundColor":"#f06"}}>
                        <p> Des messages</p>
                    </Cell>
                </Grid>
            </AdminTemplate>
        );
    }
}

export default Chat;