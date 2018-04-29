import React, { Component } from 'react';
import AdminTemplate from './AdminTemplate';
import { Button, Grid, Cell, DataTable, TableHeader, TableColumn, TableBody, TableRow, Card, TextField, CardTitle, FontIcon, SelectionControl, CardText, CircularProgress, DialogContainer } from 'react-md';
import { 
    handleCreateAdministrator, 
    handleCreateAdministratorError, 
    handleHideCreateAdministratorError, 
    handleHideCreateAdministratorSuccess, 
    handleGetAdministrators } from "../actions/administrateurs";

import { connect } from 'react-redux'
import AlertMaterialize from './AlertMaterialize';

class GestionAdministrateurs extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);

        this.state={
            openDialog: false
        }
    }

    /**
     * Méthode destinée à gérer l'envoie des données nécessaires à la création d'un administrateur
     * @param {event} event 
     */
    handleSubmit (event) {
        // blocage de l'envoie du formulaire
        event.preventDefault();
        //récupération des données du formulaire
        var dataFormulaire = new FormData(event.target);
        //envoie des données 
        this.props.handleCreateAdministrator(dataFormulaire);
    }

    componentDidMount() {
        console.log('componentDidMount');
        console.log(this.props.handleGetAdministrators);
        this.props.handleGetAdministrators();
    }

    /**
     * Méthode permettant d'afficher une popup permettant d'ajouter un administrateur
     */
    openDialog() {
        this.setState({
            openDialog: true
        })
    }

    /**
     * Méthode permettant de cacher la popup permettant d'ajouter un administrateur
     */
    closeDialog() {
        this.setState({
            openDialog: false
        })
    }

    render() {

        let usersRows = null;
        const optionsDateTimeFormat = {
            year: "numeric", 
            month: "numeric", 
            day: "numeric",
            hour: "numeric", 
            minute: "numeric", 
            second: "numeric",
            hour12: false
        };


        if (this.props.users) {
            usersRows = (this.props.users).map((user) => {
                let date = Date.parse(user.createDate);
                let dateFormat = Intl.DateTimeFormat('fr-FR', optionsDateTimeFormat).format(date);

                return (
                    <TableRow key={user.userId}>
                        <TableColumn>{user.userId}</TableColumn>
                        <TableColumn>{user.firstName}</TableColumn>
                        <TableColumn>{user.lastName}</TableColumn>
                        <TableColumn>{user.phoneNumber}</TableColumn>
                        <TableColumn>{user.email}</TableColumn>
                        <TableColumn>{dateFormat}</TableColumn>
                        <TableColumn>
                            <Button icon primary>delete</Button>
                            <Button icon primary>refresh</Button>
                            <Button icon primary>mode_edit</Button>
                        </TableColumn>
                    </TableRow>)
            });
        } else{
            usersRows = 
                <TableRow>
                    <TableColumn colSpan={7} style={{"height":"100px"}}>
                    <CircularProgress id="loading_users" /></TableColumn>
                </TableRow>
        } 

        return (
            <AdminTemplate>
                
                <Button floating primary fixed fixedPosition="br" onClick={this.openDialog}>add</Button>

                <Grid>
                    <Cell size={12}>
                        <Card>
                            <CardTitle title="Liste des administrateurs" subtitle="Faites pas les cons !" />
                            
                            <CardText>
                                <DataTable baseId="simple-selectable-table">
                                    <TableHeader>
                                        <TableRow>
                                            <TableColumn>#</TableColumn>
                                            <TableColumn>Nom</TableColumn>
                                            <TableColumn>Prénom</TableColumn>
                                            <TableColumn>Téléphone</TableColumn>
                                            <TableColumn>Email</TableColumn>
                                            <TableColumn>Date Création</TableColumn>
                                            <TableColumn>Actions</TableColumn>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {usersRows}
                                    </TableBody>
                                </DataTable>
                            </CardText>
                        </Card>
                    </Cell>
                </Grid>


                

                <DialogContainer
                    id="simple-list-dialog"
                    visible={this.state.openDialog}
                    width={800}
                    title="Ajouter un administrateur"
                    onHide={this.closeDialog}
                    >

                    { this.props.messageError
                        ? <AlertMaterialize message={this.props.messageError} handleClose={this.props.handleHideError} error />
                        : null }
                    { this.props.messageSuccess
                        ? <AlertMaterialize message={this.props.messageSuccess} handleClose={this.props.handleHideSuccess} success />
                        : null }
                    <form className="md-grid text-fields__application" onSubmit={this.handleSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            placeholder="Email du nouvel administrateur"
                            leftIcon={<FontIcon>person</FontIcon>}
                            fullWidth
                        />

                        <TextField
                            id="lastname"
                            name="lastName"
                            type="text"
                            label="Nom"
                            placeholder="Nom du nouvel administrateur"
                            leftIcon={<FontIcon>lock</FontIcon>}
                            fullWidth
                        />

                        <TextField
                            id="firstname"
                            name="firstName"
                            type="text"
                            label="Prénom"
                            placeholder="Prénom du nouvel administrateur"
                            leftIcon={<FontIcon>lock</FontIcon>}
                            fullWidth
                        />

                        <TextField
                            id="phone"
                            name="phoneNumber"
                            type="number"
                            label="Téléphone"
                            placeholder="Téléphone du nouvel administrateur"
                            leftIcon={<FontIcon>lock</FontIcon>}
                            fullWidth
                        />

                        <TextField
                            id="password"
                            name="password"
                            type="password"
                            label="Mot de passe"
                            placeholder="Mot de passe du nouvel administrateur"
                            leftIcon={<FontIcon>lock</FontIcon>}
                            fullWidth
                        />

                        <Grid>
                            <Cell size={12} desktopSize={4}>
                                <SelectionControl
                                    id="is-admin"
                                    type="switch"
                                    label="Administrateur"
                                    name="isAdmin"
                                    value={1}
                                    defaultChecked
                                    />
                            </Cell>
                            <Cell size={12} desktopSize={4}>
                                <SelectionControl
                                    id="is-roomer"
                                    type="switch"
                                    label="Locataires"
                                    name="isRoomer"
                                    value={1}
                                    />
                            </Cell>
                            <Cell size={12} desktopSize={4}>
                                <SelectionControl
                                    id="is-owner"
                                    type="switch"
                                    label="Propriétaires"
                                    name="isOwner"
                                    value={1}
                                    />
                            </Cell>

                            <Cell size={12} className="md-text-center" style={{"margin-top":"30px"}}>
                                { (!this.props.loadingAdd) 
                                    ? <Button raised primary type="submit" >Enregistrer</Button>
                                    : <CircularProgress id="circular_login" /> }
                            </Cell>
                        </Grid>
                    </form>
                </DialogContainer>

            </AdminTemplate>
        );
    }
}

const mapStateToProps = state => ({
    loadingAdd:     state.administrateurs.loadingAdd, 
    messageError:   state.administrateurs.message_error,
    messageSuccess: state.administrateurs.message_success,
    users:          state.administrateurs.users,
})

const mapDispatchToProps = dispatch => ({
    handleCreateAdministrator: (dataFormulaire) => dispatch(handleCreateAdministrator(dataFormulaire)),
    handleHideError: () => dispatch(handleHideCreateAdministratorError()),
    handleHideSuccess: () => dispatch(handleHideCreateAdministratorSuccess()),
    handleGetAdministrators: () => dispatch(handleGetAdministrators()),
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GestionAdministrateurs)

