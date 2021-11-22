import {Link} from 'react-router-dom';
import React from 'react';

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            
            <a className="navbar-brand mr-auto p-2" href="/">Rengasvarasto</a>
            
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="home" to="/home">Koti</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="newCustomer" to="/newCustomer">Uusi asiakas</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="warehouse" to="/warehouse">Varastotilanne</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="search" to="/search">Haku</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="customers" to="/customers">Asiakkaat</Link>
                </li>
            </ul>
        </nav>
    );
}