import React, { Component } from 'react';
import AdminTemplate from './AdminTemplate';
import { Button, Grid, Cell, DataTable, TableHeader, TableColumn, TableBody, TableRow, Card, TextField, CardTitle, FontIcon, SelectionControl, Divider, CardText, CircularProgress } from 'react-md';
import { handleCreateAdministrator, handleHideCreateAdministratorError, handleCreateAdministratorError } from "../actions/administrateurs";
import { connect } from 'react-redux'
import AlertMaterialize from './AlertMaterialize';

class GestionAdministrateurs extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(props);
    }

    /**
     * 
     * @param {event} event 
     */
    handleSubmit (event) {
        event.preventDefault();
        
        
        var dataFormulaire = new FormData(event.target);

        console.log(dataFormulaire);



        dataFormulaire.set('isAdmin', parseInt(dataFormulaire.get('isAdmin')));
        dataFormulaire.set('phoneNumber', parseInt(dataFormulaire.get('phoneNumber')));

        for (var pair of dataFormulaire.entries()) {
            console.log(pair[0]+ ' : ' + pair[1]); 
        }

        this.props.handleCreateAdministrator(dataFormulaire);
    }

    render() {
        return (
            <AdminTemplate>
                <Grid>
                    <Cell size={12} desktopSize={6}>
                        <Card>
                            <CardTitle title="Liste des administrateurs" subtitle="Faites pas les cons !" />
                            
                            <CardText>
                                <DataTable baseId="simple-selectable-table">
                                    <TableHeader>
                                        <TableRow>
                                            <TableColumn>Nom</TableColumn>
                                            <TableColumn>Prénom</TableColumn>
                                            <TableColumn>Date Création</TableColumn>
                                            <TableColumn>Actions</TableColumn>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableColumn>Sharp</TableColumn>
                                            <TableColumn>Helene</TableColumn>
                                            <TableColumn>01/02/2018</TableColumn>
                                            <TableColumn>
                                                <Button icon primary>delete</Button>
                                                <Button icon primary>refresh</Button>
                                                <Button icon primary>mode_edit</Button>
                                                <Button icon primary>save</Button>
                                            </TableColumn>
                                        </TableRow>
                                    </TableBody>
                                </DataTable>
                            </CardText>
                            
                        </Card>
                    </Cell>
                    <Cell size={12} desktopSize={6}>
                        <Card>
                            <CardTitle title="Ajouter un nouvel utilisateur" subtitle="" />
                            
                            <CardText>
                            <Divider />
                                { this.props.message 
                                    ? <AlertMaterialize message={this.props.message} handleClose={this.props.handleHideError}>test</AlertMaterialize>
                                    : null }
                                <form className="md-grid text-fields__application" onSubmit={this.handleSubmit}>
                                    <TextField
                                        id="email"
                                        name="email"
                                        label="Email"
                                        type="text"
                                        lineDirection="center"
                                        placeholder="Email du nouvel administrateur"
                                        leftIcon={<FontIcon>person</FontIcon>}
                                        className="md-cell md-cell--12"
                                    />

                                    <TextField
                                        id="lastname"
                                        name="lastName"
                                        type="text"
                                        label="Nom"
                                        placeholder="Nom du nouvel administrateur"
                                        leftIcon={<FontIcon>lock</FontIcon>}
                                        className="md-cell md-cell--12"
                                    />

                                    <TextField
                                        id="firstname"
                                        name="firstName"
                                        type="text"
                                        label="Prénom"
                                        placeholder="Prénom du nouvel administrateur"
                                        leftIcon={<FontIcon>lock</FontIcon>}
                                        className="md-cell md-cell--12"
                                    />

                                    <TextField
                                        id="phone"
                                        name="phoneNumber"
                                        type="number"
                                        label="Téléphone"
                                        placeholder="Téléphone du nouvel administrateur"
                                        leftIcon={<FontIcon>lock</FontIcon>}
                                        className="md-cell md-cell--12"
                                    />

                                    <TextField
                                        id="password"
                                        name="password"
                                        type="password"
                                        label="Mot de passe"
                                        placeholder="Mot de passe du nouvel administrateur"
                                        leftIcon={<FontIcon>lock</FontIcon>}
                                        className="md-cell md-cell--12"
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
                                        
                                        <Cell size={4} desktopSize={6}>
                                            { (!this.props.loadingAdd) 
                                                ? <Button raised primary swapTheming>Réinitialiser le formulaire</Button> 
                                                : <CircularProgress id="circular_login" />}
                                            
                                        </Cell>

                                        <Cell size={4} desktopSize={6} className="md-text-right">
                                            <Button raised primary type="submit" >Enregistrer</Button>
                                        </Cell>
                                    </Grid>
                                </form>
                            </CardText>
                        </Card>
                    </Cell>

                </Grid>
            </AdminTemplate>
        );
    }
}

const mapStateToProps = state => ({
    loadingAdd: state.administrateurs.loadingAdd, 
    message: state.administrateurs.message,
})

const mapDispatchToProps = dispatch => ({
    handleCreateAdministrator: (dataFormulaire) => dispatch(handleCreateAdministrator(dataFormulaire)),
    handleHideError: () => dispatch(handleHideCreateAdministratorError())
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GestionAdministrateurs)

