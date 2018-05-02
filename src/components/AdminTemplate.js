import React, { Component } from 'react';
import { NavigationDrawer } from 'react-md';
import NavLink from './NavLink';
import UserActionMenu from './UserActionMenu';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'


const navItems = [
{
    label: '',
    title: '',
    to: '/',
    exact: true,
    icon: '',
}, 
{
    label: 'Dashboard',
    title: 'Récapitulatif de l\'application',
    to: '/dashboard',
    exact: true,
    icon: 'insert_chart',
}, 
{
    label: 'Locataires',
    title: 'Gestion des Locataires',
    to: '/locataires',
    exact: true,
    icon: 'group',
}, 
{
    label: 'Propriétaires',
    title: 'Gestion des Propriétaire',
    to: '/proprietaires',
    exact: true,
    icon: 'person',
},
{
    label: 'Locations',
    title: 'Gestion des Locations',
    to: '/locations',
    exact: true,
    icon: 'business',
},
{
    label: 'Administrateurs',
    title: 'Gestions des administrateurs',
    to: '/administrateurs',
    exact: true,
    icon: 'build',
},
{
    label: 'Chat',
    title: 'Chat',
    to: '/chat',
    exact: true,
    icon: 'chat',
}];

class AdminTemplate extends Component {
    constructor(props){
        super(props);
        this.currentItem = navItems.filter(item => item.to === this.props.location.pathname ? true : false)[0];
    }

    componentDidMount() {
        document.title = this.currentItem.title;
    }


    render() {
        return (
            <NavigationDrawer
                drawerTitle="Menu"
                toolbarTitle={<h1>{this.currentItem.title}</h1>}
                defaultVisible={false}
                navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
                desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                toolbarActions={<UserActionMenu />}
                >
                {this.props.children?this.props.children:null}
            </NavigationDrawer>
        );
    }
}
const mapStateToProps = state => ({
    user: state.connection.user
});

export default connect(
    mapStateToProps
)(withRouter(AdminTemplate));
