import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaWarehouse, FaSearch } from 'react-icons/fa'; 
import {MdPersonAdd } from 'react-icons/md';
import {GiTireIron} from 'react-icons/gi';
import Print from '../printable/Print';
import {boxShadowStyle} from '../style/colors';

// tänne pitäs lisätä linkit noihin sivuihin samoin kuin navbarissa on

export default function Home() {

  return (
    <>
   
        <h1>DashBoard</h1>
  
      <div className='row marginHome'>
      
        <Link to="./searchCar" className='col-3 button' style={boxShadowStyle}>
          <FaSearch size={30}/>
          <p>Hae</p>
        </Link>

        <Link to="./warehouse" class='col-3 button' style={boxShadowStyle}>
          <FaWarehouse size={40}/>
          <p>Varasto</p>
        </Link>

        </div>

        <div className='row'>

        <Link to="./services" class='col-3 button'style={boxShadowStyle}>
          <MdPersonAdd size={40} />
          <p>Palvelut</p>
        </Link>

        <Link to="./order" class='col-3 button' style={boxShadowStyle}>
          <GiTireIron size={40} />
          <p>Raportit väärä linkki</p>
        </Link>

        <Link to="../printable/Print" class='col-3 button' style={boxShadowStyle}>
          <GiTireIron size={40} />
          <p>Printtisivutesti</p>
        </Link>

        <Link to="./customer" class='col-3 button' style={boxShadowStyle}>
         <MdPersonAdd size={40} /> 
          <p>Asiakas</p>
        </Link>    
      </div>

      </>
  );
}
