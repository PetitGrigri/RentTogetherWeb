import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                    <ul class="left hide-on-med-and-down">
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;