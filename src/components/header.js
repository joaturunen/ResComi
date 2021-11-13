import React from 'react';
import rescomi from '../images/rescomi.png';

export default function Header() {


    return (
        <div class='container-fluid header'>
            <div class='row'>
                <div class='col'>
                    <img src={rescomi} alt='rescomi'/>
                </div>
            </div>
        </div>
    )
}