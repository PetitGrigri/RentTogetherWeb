import PropTypes from 'prop-types';
import { MenuButton, Subheader, List, Avatar, FontIcon, ListItem } from 'react-md';

import React, { Component } from 'react';
import { Layover } from 'react-md/lib/Helpers';

class UserActionMenu extends Component {
    
    render() {
        return (
            <MenuButton
                id={this.props.id}
                icon
                className={this.props.className}
                menuItems={
                    [<ListItem primaryText="Mon Profil" rightIcon={<FontIcon>account_circle</FontIcon>}/>,
                    <ListItem primaryText="Déconnexion" rightIcon={<FontIcon>exit_to_app</FontIcon>}/>]
                }
                
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
