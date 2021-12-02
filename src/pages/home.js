import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaWarehouse, FaSearch, FaList } from 'react-icons/fa'; 
import {MdPersonAdd } from 'react-icons/md';
import {GiTireIron} from 'react-icons/gi';
import Print from '../printable/Print';
import {boxShadowStyle} from '../style/colors';

// tänne pitäs lisätä linkit noihin sivuihin samoin kuin navbarissa on

export default function Home() {

  return (
    <>
    <div className='mt-5'>
      <div className='row justify-content-md-center'>
      
        <Link to="./searchCar" className='col-3 button link' style={boxShadowStyle}>
          <FaSearch size={35} className= 'mt-4'/>
          <p>Hae</p>
        </Link>

        <Link to="./warehouse" className='col-4 button link' style={boxShadowStyle}>
          <FaWarehouse size={40} className= 'mt-4'/>
          <p>Varasto</p>
        </Link>

      </div>

      <div className='row justify-content-md-center'>
        
        <Link to="./services" className='col-4 button link'style={boxShadowStyle}>
          <FaList size={35} className= 'mt-4'/>
          <p>Palvelut</p>
        </Link>

        <Link to="./order" className='col-3 button link' style={boxShadowStyle}>
          <GiTireIron size={40} className= 'mt-4' />
          <p>Raportit väärä linkki</p>
        </Link>
        </div>



      <div className='row'>
        <Link to="../printable/Print" className='col-3 button'>
          <GiTireIron size={40} />
          <p>Printtisivutesti</p>
        </Link>

        <Link to="./onecustomer" className='col-3 button'>
         <MdPersonAdd size={40} /> 
          <p>oneCustomer</p>
        </Link>    
      </div>
      </div>
      </>
  );
}
