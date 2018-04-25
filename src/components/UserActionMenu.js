import PropTypes from 'prop-types';
import { MenuButton } from 'react-md';

import React, { Component } from 'react';
import { Layover } from 'react-md/lib/Helpers';

class UserActionMenu extends Component {
    
    render() {
        return (
            <MenuButton
                id={this.props.id}
                icon
                className={this.props.className}
                menuItems={this.props.menuItems}
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
