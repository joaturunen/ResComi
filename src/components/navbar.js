import {Link} from 'react-router-dom';
import React from 'react';

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            
            <a className="navbar-brand mr-auto p-2" href="/">Rengasvarasto</a>
            
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="koti" to="/sivut/koti">Koti</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="uusiAsiakas" to="/sivut/uusiAsiakas">Uusi asiakas</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="varasto" to="/sivut/varasto">Varastotilanne</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="varasto" to="/sivut/haku">Haku</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="asiakas" to="/sivut/asiakas">Asiakas</Link>
                </li>
            </ul>
        </nav>
    );
}