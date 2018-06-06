import React, { Component } from 'react';
import { NavigationDrawer } from 'react-md';
import NavLink from './NavLink';
import UserActionMenu from './UserActionMenu';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import '../css/AdminTemplate.css'


const navItems = [
{
    label: '',
    title: '',
    to: '/',
    icon: '',
    iconPosition: 'left',
}, 
{
    label: 'Dashboard',
    title: 'Récapitulatif de l\'application',
    to: '/dashboard',
    icon: 'insert_chart',
    iconPosition: 'left',
}, 
{
    label: 'Locataires',
    title: 'Gestion des Locataires',
    to: '/locataires',
    icon: 'group',
    iconPosition: 'left',
}, 
{
    label: 'Propriétaires',
    title: 'Gestion des Propriétaire',
    to: '/proprietaires',
    icon: 'person',
    iconPosition: 'left',
},
{
    label: 'Locations',
    title: 'Gestion des Locations',
    to: '/locations',
    icon: 'business',
    iconPosition: 'left',
},
{
    label: 'Administrateurs',
    title: 'Gestions des administrateurs',
    to: '/administrateurs',
    icon: 'build',
    iconPosition: 'left',
},
{
    label: 'Chat',
    title: 'Chat',
    to: '/chat',
    exact: true,
    icon: 'chat',
    iconPosition: 'left',
}];

class AdminTemplate extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentItem : navItems.filter(item => item.to === this.props.location.pathname ? true : false)[0] || ''
        }
    }

    componentDidMount() {
        document.title = this.state.currentItem.title;
    }

    render() {
        return (
            <NavigationDrawer
                drawerTitle="Menu"
                toolbarTitle={<h1>{this.state.currentItem.title}</h1>}
                defaultVisible={false}
                navItems={navItems.map(item => 
                    <NavLink key={item.to} active={this.state.currentItem.to===item.to} {...item}/>
                )}
                desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                toolbarActions={<UserActionMenu />}
                className="admin_template"
                >
                { this.props.children 
                    ? this.props.children
                    : null }
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
