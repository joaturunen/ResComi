import React from 'react';
import logo3 from '../images/logo3.svg';

export default function Header() {
  return (
    <div className='row justify-content-center header'>
      <div className='col'>
        <a href='/'> <img className='logo' src={logo3} alt='rescomi'/> </a>
        <p className='user'>Kirjautunut käyttäjä, Toimipiste</p>
      </div>
    </div>
  )
}