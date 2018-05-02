import React, { Component } from 'react';
import { TableColumn, TableRow, FontIcon, CircularProgress, Button, EditDialogColumn } from 'react-md';
import LoadingFontIcon from './LoadingFontIcon';


class UserTableRow extends Component {



    constructor(props) {
        super(props);

        this.editUser = this.editUser.bind(this);
        this.stopEditUser = this.stopEditUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.saveEdit = this.saveEdit.bind(this);
        this.changeValue = this.changeValue.bind(this);

        this.state = {
            edit: false,
            saveEdit: false,
        }

        this.firstName  = this.props.user.firstName;
        this.lastName = this.props.user.lastName;
        this.phoneNumber = this.props.user.phoneNumber;
        this.email = this.props.user.email;
    }

    editUser () {
        this.setState({
            edit: true,
        });
        
    }

    saveEdit () {
        this.setState({
            edit: false,
        });

        let userUpdated = Object.assign({}, this.props.user, {
            firstName: this.firstName,
            lastName: this.lastName,
            phoneNumber: this.phoneNumber,
            email: this.email
        });
        
        this.props.handleEdit(userUpdated);
    }

    stopEditUser () {
        this.setState({
            edit: false,
        });
    }

    deleteUser() {
        this.props.handleDelete(this.props.user.userId);
    }

    changeValue (value, name) {
        console.log(value, name);
        this[name]= value;
    }


    render() {
        const optionsDateTimeFormat = {
            year: "numeric", 
            month: "numeric", 
            day: "numeric",
            hour: "numeric", 
            minute: "numeric", 
            second: "numeric",
            hour12: false
        };

        let date = Date.parse(this.props.user.createDate);
        let dateFormat = Intl.DateTimeFormat('fr-FR', optionsDateTimeFormat).format(date);

        let loadingDeleteId = "loading-delete-"+this.props.user.userId;
        let loadingSaveId = "loading-edit-"+this.props.user.userId;

        if (this.state.edit === false) {
            return (
                <TableRow key={this.props.user.userId}>
                    <TableColumn>{this.props.userId}</TableColumn>
                    <TableColumn>{this.props.user.firstName}</TableColumn>
                    <TableColumn>{this.props.user.lastName}</TableColumn>
                    <TableColumn>{this.props.user.phoneNumber}</TableColumn>
                    <TableColumn>{this.props.user.email}</TableColumn>
                    <TableColumn>{dateFormat}</TableColumn>
                    <TableColumn>
                        { this.props.user.isRoomer
                            ? <FontIcon>people</FontIcon> 
                            : null }
                        { this.props.user.isOwner
                            ? <FontIcon>home</FontIcon> 
                            : null }
                        { this.props.user.isAdmin 
                            ? <FontIcon>build</FontIcon> 
                            : null }
                    </TableColumn>
                    <TableColumn >
                        <LoadingFontIcon id={loadingDeleteId} onClick={this.deleteUser} loading={this.props.deleteInProgress}>delete</LoadingFontIcon>
                        <Button icon primary>refresh</Button>
                        <LoadingFontIcon id={loadingSaveId} onClick={this.editUser} loading={this.state.saveEdit}>edit</LoadingFontIcon>
                    </TableColumn>
                </TableRow>)
        } else {
            return (
                <TableRow key={this.props.userId}>
                    <TableColumn>{this.props.userId}</TableColumn>
                    <EditDialogColumn placeholder="Nom de l'utilisateur" inline defaultValue={this.props.user.firstName}  
                        onChange={(value,event) => this.changeValue(value,"firstName")} />
                    <EditDialogColumn placeholder="Prénom de l'utilisateur" inline defaultValue={this.props.user.lastName} 
                        onChange={(value,event) => this.changeValue(value,"lastName")}  />
                    <EditDialogColumn placeholder="Numéro de téléphone" inline defaultValue={this.props.user.phoneNumber} 
                        inlineIcon={<FontIcon>phone</FontIcon>} 
                        onChange={(value,event) => this.changeValue(value,"phoneNumber")} />
                    <EditDialogColumn placeholder="Email" inline defaultValue={this.props.user.email}  inlineIcon={<FontIcon>mail</FontIcon>} 
                        onChange={(value,event) => this.changeValue(value,"email")} />
                    <TableColumn>{dateFormat}</TableColumn>
                    <TableColumn>
                        { this.props.user.isRoomer
                            ? <FontIcon>people</FontIcon> 
                            : null }
                        { this.props.user.isOwner
                            ? <FontIcon>home</FontIcon> 
                            : null }
                        { this.props.user.isAdmin 
                            ? <FontIcon>build</FontIcon> 
                            : null }
                    </TableColumn>
                    <TableColumn >
                        <LoadingFontIcon id={loadingDeleteId} onClick={this.deleteUser} loading={this.props.deleteInProgress}>delete</LoadingFontIcon>
                        <Button icon primary>refresh</Button>
                        <Button icon primary onClick={this.saveEdit}>save</Button>
                        <Button icon primary onClick={this.stopEditUser }>cancel</Button>
                    </TableColumn>
                </TableRow>)
        }
    }
}

export default UserTableRow;