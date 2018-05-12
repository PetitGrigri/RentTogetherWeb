import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FontIcon, ListItem } from 'react-md';


const NavLink = ({ label, to, active, icon, iconPosition }) => {
    // Création du FontIcon à gauche si nécessaire
    let leftIcon = ((icon != null) && (iconPosition === 'left'))
        ? <FontIcon>{icon}</FontIcon>
        : null;

    // Création du FontIcon à droite si nécessaore
    let rightIcon = ((icon != null) && (iconPosition === 'right'))
        ? <FontIcon>{icon}</FontIcon>
        : null;

    // Retour
    return (<ListItem
        component={RouterLink}
        to={to}
        active={active}
        primaryText={label}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
    />);
}

export default NavLink;