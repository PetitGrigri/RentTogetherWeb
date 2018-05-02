import React, { Component } from 'react';
import { TableColumn, TableRow, FontIcon, Button, EditDialogColumn } from 'react-md';
import LoadingFontIcon from './LoadingFontIcon';


class UserTableRow extends Component {

    constructor(props) {
        super(props);

        //binding des méthodes
        this.editUser = this.editUser.bind(this);
        this.stopEditUser = this.stopEditUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.saveEdit = this.saveEdit.bind(this);
        this.changeValue = this.changeValue.bind(this);

        //initialisation du state
        this.state = {
            edit: false,
        }

        // On set les variables pouvant être modifiées
        this.firstName  = this.props.user.firstName;
        this.lastName = this.props.user.lastName;
        this.phoneNumber = this.props.user.phoneNumber;
        this.email = this.props.user.email;
    }

    /**
     * Méthode permettant d'indiquer que l'on modifie l'utilisateur lié à ce composant (ce qui modifiera l'affichage)
     */
    editUser () {
        this.setState({
            edit: true,
        });
        
    }

    /**
     * Méthode permettant de sauvegarder les modifications faites sur l'utilisateur
     */
    saveEdit () {
        // Modification du state : on n'édite plus
        this.setState({
            edit: false,
        });

        // On met à jour l'objet utilisateur avec les nouvelles données
        let userUpdated = Object.assign({}, this.props.user, {
            firstName: this.firstName,
            lastName: this.lastName,
            phoneNumber: this.phoneNumber,
            email: this.email
        });
        
        // On transmet l'utilisateur à modifier
        this.props.handleEdit(userUpdated);
    }

    /**
     * Méthode permettant d'indiquer que l'on n'édite plus l'utilisateur
     */
    stopEditUser () {
        this.setState({
            edit: false,
        });
    }

    /**
     * Méthode permettant d'indiquer que l'on supprime l'user
     */
    deleteUser() {
        // On transmet l'id de l'utilisateur à supprimer
        this.props.handleDelete(this.props.user.userId);
    }

    /**
     * Méthode permettant de prendre en compte chaque modification de l'utilisateur (dans les variables temporaires)
     * @param {*} value La nouvelle valeur 
     * @param {*} name  Le nom de la propriété modifiée
     */
    changeValue (value, name) {
        this[name]= value;
    }


    render() {
        // Objet contenant la configuration de la date de création qui sera utilisé lors de l'affichage
        const optionsDateTimeFormat = {
            year: "numeric", 
            month: "numeric", 
            day: "numeric",
            hour: "numeric", 
            minute: "numeric", 
            second: "numeric",
            hour12: false
        };

        //parsing de la date de créaton et formatage
        let date = Date.parse(this.props.user.createDate);
        let dateFormat = Intl.DateTimeFormat('fr-FR', optionsDateTimeFormat).format(date);

        let loadingDeleteId = "loading-delete-"+this.props.user.userId;
        let loadingUpdateId = "loading-edit-"+this.props.user.userId;

        if (this.state.edit === false) {
            return (
                <TableRow key={this.props.user.userId}>
                    <TableColumn>{this.props.user.userId}</TableColumn>
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
                        <LoadingFontIcon id={loadingUpdateId} onClick={this.editUser} loading={this.props.updateInProgress}>edit</LoadingFontIcon>
                    </TableColumn>
                </TableRow>)
        } else {
            return (
                <TableRow key={this.props.userId}>
                    <TableColumn>{this.props.user.userId}</TableColumn>
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