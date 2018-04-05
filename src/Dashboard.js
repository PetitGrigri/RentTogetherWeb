import React, { Component } from 'react';
import { FontIcon, Card, CardTitle, CardText } from 'react-md';
import { NavigationDrawer } from 'react-md';
import NavLink from './NavLink';


const navItems = [{
    label: 'Login',
    exact: true,
    to: '/',
    icon: 'person',
}, 
{
    label: 'Dashboard',
    to: '/dashboard',
    exact: true,
    icon: 'web',
}, 
{
    label: 'Locataires',
    to: '/locataires',
    exact: true,
    icon: 'web',
}, 
{
    label: 'Propriétaires',
    to: '/proprietaires',
    exact: true,
    icon: 'web',
},
{
    label: 'Locations',
    to: '/locations',
    exact: true,
    icon: 'web',
}];

export default class Page1 extends Component {
    render() {
        return (
            
            <NavigationDrawer
                drawerTitle="react-md with CRA"
                //toolbarTitle={location.key}
                navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
                >
                <div className="md-grid ">
                    <h2 className="md-cell md-cell--12">
                        Recapitulatif de l'application
                    </h2>
                    <Card className="md-cell">
                        <CardText className="md-grid ">
                            <div className="md-cell md-cell--6">
                                 <FontIcon>home</FontIcon>
                            </div>
                            <div className="md-cell md-cell--6 md-text-right">
                                764
                            </div>
                        </CardText>
                        <CardTitle title="Locataires" />
                    </Card>
                    <Card className="md-cell">
                        <CardTitle title="Nombres de propriétaires" />
                        <CardText>
                            <p>797</p>
                        </CardText>
                    </Card>
                    <Card className="md-cell">
                        <CardTitle title="Nombre de loations" />
                        <CardText>
                            <p>1287</p>
                        </CardText>
                    </Card>
                </div>
            </NavigationDrawer>
        );
    }
}
