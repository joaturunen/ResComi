import React from 'react';
import logo3 from '../images/logo3.svg';
import {headerColor, userStyle} from '../style/colors';
import {FaSignOutAlt } from 'react-icons/fa'; 
import {  useLocation} from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <div className='row' style={headerColor}>
      <div class='col-2'>
        <a href='/'> <img className='logo' src={logo3} alt='rescomi'/> </a>
        </div>
        <div>
        { (pathname !== "/login") &&  <p style={userStyle}>Kirjautunut käyttäjä, Toimipiste <FaSignOutAlt /></p>}
        </div>
    </div>
  )
}