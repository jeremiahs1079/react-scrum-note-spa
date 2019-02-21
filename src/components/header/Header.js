import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
    return (
        <div className="nav-bar-container">
            <nav>
                <Link className="nav-list-item" to="/">Home</Link>
                <Link className="nav-list-item" to="/">Projects</Link>
                <Link className="nav-list-item" to="/">Notes</Link>
                <Link className="nav-list-item" to="/">Tags</Link>
            </nav>
        </div>
);
}

export default Header;