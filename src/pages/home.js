import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaWarehouse, FaSearch } from 'react-icons/fa'; 
import {MdPersonAdd } from 'react-icons/md';
import {GiTireIron} from 'react-icons/gi';
import Print from '../printable/Print';

// tänne pitäs lisätä linkit noihin sivuihin samoin kuin navbarissa on

export default function Home() {

  return (
    <>
        <h1>DashBoard</h1>
      <div className='row marginHome'>
        <button className='col-3 button'>
          <FaSearch size={30}/>
          <p>Hae</p>
        </button>
        <button class='col-3 button'>
          <FaWarehouse size={40}/>
          <p>Varasto</p>
        </button>
        </div>
        <div className='row'>
        <button class='col-3 button'>
          <MdPersonAdd size={40} />
          <p>Uusi Asiakas</p>
        </button>

        <button class='col-3 button'>
          <GiTireIron size={40} />
          <p>Valmiit työt</p>
        </button>

        <Link to="../printable/Print" class='col-3 button'>
          <GiTireIron size={40} />
          <p>Printtisivutesti</p>
        </Link>

        <Link to="./customer" class='col-3 button'>
         <MdPersonAdd size={40} /> 
          <p>Asiakas</p>
        </Link>    
      </div>

      </>
  );
}
