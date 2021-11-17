import React from 'react';
import logo3 from '../images/logo3.svg';

export default function Header() {


    return (
        <div class='container-fluid header'>
            <div class='row'>
                <div class='col'>
                    <img class='logo' src={logo3} alt='rescomi'/>
                </div>
            </div>
        </div>
    )
}