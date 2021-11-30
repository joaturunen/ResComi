import React from 'react';
import logo3 from '../images/logo3.svg';
import {headerColor} from '../style/colors';

export default function Header() {
  return (
    <div className='row header' style={headerColor}>
      <div className='col'>
        <a href='/'> <img className='logo' src={logo3} alt='rescomi'/> </a>
        <p className='user'>Kirjautunut käyttäjä, Toimipiste</p>
      </div>
    </div>
  )
}