import React from 'react';
import logo3 from '../images/logo3.svg';

export default function Header() {


    return (
        <div className='header'>
            
            <div className='col'>
                <img className='logo' src={logo3} alt='rescomi'/>
            
                <p className='user'>Kirjautunut käyttäjä, Toimipiste</p>
            </div>
        
        </div>
    )
}