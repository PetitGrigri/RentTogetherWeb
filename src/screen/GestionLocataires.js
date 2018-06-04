import React, { Component } from 'react';
import { formDataToObject } from '../utils/convert.js'
import { Button, Grid, Cell, DataTable, TableHeader, TableColumn, TableBody, TableRow, Card, TextField, CardTitle, FontIcon, CardText, CircularProgress, DialogContainer } from 'react-md';
import { 
    handleCreateRenter, 
    handleHideMessages,
    handleHideMessagesPopup,
    handleGetRenters, 
    handleDeleteRenter,
    handleUpdateRenter
} from "../actions/locataires";
import { connect } from 'react-redux'
import AdminTemplate from '../components/AdminTemplate'
import AlertMaterialize from '../components/AlertMaterialize';
import UserTableRow from '../components//UserTableRow';

class GestionLocataires extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.deleteRenter = this.deleteRenter.bind(this);

        this.state={
            openDialog: false,
        }
    }


    /**
     * Méthode destinée à gérer l'envoie des données nécessaires à la création d'un locataire
     * @param {event} event 
     */
    handleSubmit (event) {
        // blocage de l'envoie du formulaire
        event.preventDefault();
        //récupération des données du formulaire et conversion en objet
        var dataFormulaire = new FormData(event.target);
        var user = Object.assign(formDataToObject(dataFormulaire), {
            isAdmin: 0,
            isRoomer: 1,
            isOwner: 0,
        });
        
        console.log(user);
        //envoie des données 
        this.props.handleCreateRenter(user);
    }

    componentDidMount() {
        if (this.props.users.length <= 0) {
            this.props.handleGetRenters();
        }

    }

    /**
     * Méthode permettant d'afficher une popup permettant d'ajouter un locataire
     */
    openDialog() {
        this.setState({
            openDialog: true
        })
    }

    /**
     * Méthode permettant de cacher la popup permettant d'ajouter un locataire
     */
    closeDialog() {
        this.setState({
            openDialog: false
        });
        this.props.handleHideMessagesPopup();
    }

    deleteRenter(id) {

        this.props.handleDeleteRenter(id);
    }

    updateRenter(user) {
        console.log(user);
        this.props.handleUpdateRenter(user);
    }

    render() {

        return (
            <AdminTemplate>
                { this.props.messageError
                    ? <AlertMaterialize message={this.props.messageError} handleClose={this.props.handleHideMessages} error />
                    : null }
                { this.props.messageSuccess
                    ? <AlertMaterialize message={this.props.messageSuccess} handleClose={this.props.handleHideMessages} success />
                    : null }
                <Button floating primary fixed fixedPosition="br" onClick={this.openDialog}>add</Button>

                <Grid>
                    <Cell size={12}>
                        <Card>
                            <CardTitle title="Liste des locataires" subtitle="Faites pas les cons !" />
                            
                            <CardText>
                                { this.props.loadingGet === true
                                    ?   <CircularProgress id="#loading_user_data"/>
                                    :   <DataTable baseId="simple-selectable-table">
                                            <TableHeader>
                                                <TableRow>
                                                    <TableColumn>#</TableColumn>
                                                    <TableColumn>Nom</TableColumn>
                                                    <TableColumn>Prénom</TableColumn>
                                                    <TableColumn>Téléphone</TableColumn>
                                                    <TableColumn>Email</TableColumn>
                                                    <TableColumn>Date Création</TableColumn>
                                                    <TableColumn>Types</TableColumn>
                                                    <TableColumn>Actions</TableColumn>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {   (this.props.users).map((user) => 
                                                        <UserTableRow 
                                                            user={user}
                                                            key={user.userId}
                                                            deleteInProgress = {this.props.loadingDeleteId === user.userId }
                                                            updateInProgress = {this.props.loadingUpdateId === user.userId }
                                                            handleDelete={(id) => this.deleteRenter(id)} 
                                                            handleEdit={(user) => this.updateRenter(user)} />
                                                    ) 
                                                }
                                            </TableBody>
                                        </DataTable>
                                }
                            </CardText>
                        </Card>
                    </Cell>
                </Grid>

                <DialogContainer
                    id="simple-list-dialog"
                    visible={this.state.openDialog}
                    width={800}
                    title="Ajouter un locataire"
                    onHide={this.closeDialog}
                    >

                    { this.props.messagePopupError
                        ? <AlertMaterialize message={this.props.messagePopupError} handleClose={this.props.handleHideMessagesPopup} error />
                        : null }
                    { this.props.messagePopupSuccess
                        ? <AlertMaterialize message={this.props.messagePopupSuccess} handleClose={this.props.handleHideMessagesPopup} success />
                        : null }
                    <form className="md-grid text-fields__application" onSubmit={this.handleSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            placeholder="Email du nouvel locataire"
                            leftIcon={<FontIcon>mail</FontIcon>}
                            fullWidth
                        />

                        <TextField
                            id="lastname"
                            name="lastName"
                            type="text"
                            label="Nom"
                            placeholder="Nom du nouvel locataire"
                            leftIcon={<FontIcon>edit</FontIcon>}
                            fullWidth
                        />

                        <TextField
                            id="firstname"
                            name="firstName"
                            type="text"
                            label="Prénom"
                            placeholder="Prénom du nouvel locataire"
                            leftIcon={<FontIcon>edit</FontIcon>}
                            fullWidth
                        />

                        <TextField
                            id="phone"
                            name="phoneNumber"
                            type="number"
                            label="Téléphone"
                            placeholder="Téléphone du nouvel locataire"
                            leftIcon={<FontIcon>phone</FontIcon>}
                            fullWidth
                        />

                        <TextField
                            id="password"
                            name="password"
                            type="password"
                            label="Mot de passe"
                            placeholder="Mot de passe du nouvel locataire"
                            leftIcon={<FontIcon>lock</FontIcon>}
                            fullWidth
                        />

                        <Grid>
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
    loadingAdd:             state.locataires.loadingAdd, 
    loadingGet:             state.locataires.loadingGet, 
    loadingDeleteId:        state.locataires.loadingDeleteId,
    loadingUpdateId:        state.locataires.loadingUpdateId,
    messageError:           state.locataires.message_error,
    messageSuccess:         state.locataires.message_success,
    messagePopupError:      state.locataires.message_popup_error,
    messagePopupSuccess:    state.locataires.message_popup_success,
    users:                  state.locataires.users,
})

const mapDispatchToProps = dispatch => ({
    handleGetRenters:           () => dispatch(handleGetRenters()),
    handleCreateRenter:         (dataFormulaire) => dispatch(handleCreateRenter(dataFormulaire)),
    handleDeleteRenter:         (id) => dispatch(handleDeleteRenter(id)),
    handleUpdateRenter:         (user) => dispatch(handleUpdateRenter(user)),
    handleHideMessages:         () => dispatch(handleHideMessages()),
    handleHideMessagesPopup:    () => dispatch(handleHideMessagesPopup()),
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GestionLocataires)

