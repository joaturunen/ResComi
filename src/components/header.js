import React from 'react';
import logo1 from '../images/logo1.svg';

export default function Header() {


    return (
        <div class='container-fluid header'>
            <div class='row'>
                <div class='col'>
                    <img class='logo' src={logo1} alt='rescomi'/>
                </div>
            </div>
        </div>
    )
}