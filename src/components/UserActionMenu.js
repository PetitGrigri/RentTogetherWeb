import PropTypes from 'prop-types';
import { MenuButton } from 'react-md';
import NavLink from './NavLink';
import React, { Component } from 'react';
import { Layover } from 'react-md/lib/Helpers';

const userActions = [
    {
        label: 'Mon profil',
        title: 'Mon profil',
        to: '/profil',
        icon: 'account_circle',
        iconPosition: 'right',
    },     
    {
        label: 'Déconnexion',
        title: 'Déconnexion',
        to: '/logout',
        icon: 'exit_to_app',
        iconPosition: 'right',
    }
];

class UserActionMenu extends Component {
    
    render() {
        return (
            <MenuButton
                id={this.props.id}
                icon
                className={this.props.className}
                menuItems={userActions.map(item => <NavLink key={item.to} {...item}/>)}
                position={Layover.Positions.BOTTOM_RIGHT}
            >
                more_vert
           </MenuButton>
        );
    }
}

export default UserActionMenu;

UserActionMenu.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  menuItems: PropTypes.array,
};

UserActionMenu.defaultProps = {
  menuItems: ['Mon profil', 'Déconnexion'],
  id: 'user-menu-button'
};
