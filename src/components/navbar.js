import {Link} from 'react-router-dom';
import React from 'react';

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" 
                aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <a className="navbar-brand mr-auto p-2" href="/">Rengasvarasto</a>
            {/* <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-link">
                        <Link id="home" to="/pages/Home">Etusivu</Link>
                    </li>
                    <li className="nav-link">
                        <Link id="newCustomer" to="/pages/newCustomer">Uusi asiakas</Link>
                    </li>
                </ul>
            </div> */}
            
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="home" to="/pages/Home">Etusivu</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="newCustomer" to="/pages/newCustomer">Uusi asiakas</Link>
                </li>
            </ul>
            
        </nav>
    );
}