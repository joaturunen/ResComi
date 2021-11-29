import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaWarehouse, FaSearch } from 'react-icons/fa'; 
import {MdPersonAdd } from 'react-icons/md';
import {GiTireIron} from 'react-icons/gi';
import Print from '../printable/Print';

// tänne pitäs lisätä linkit noihin sivuihin samoin kuin navbarissa on

export default function Home() {
  const [search, setSearch]= useState('');
  const [lookFor, setLookFor]= useState('');

  return (
    <div className='container-fluid' >
      <div className='row'>
        <h1>DashBoard</h1>
      </div>
      <div className='row'>

        <div className='col-4 nappi'>
          <p>Hae
          <input className="form-control" name='haku'
            value= {lookFor} placeholder='Rekisteri tai puh'/>
            <FaSearch size={20}/></p>
        </div>

        <button class='col-4 nappi'>
          <FaWarehouse size={40}/>
          <p>Varasto</p>
        </button>

        
      </div>

      <div className='row'>
        

        <button class='col-4 nappi'>
          <MdPersonAdd size={40} />
          <p>Uusi Asiakas</p>
        </button>

        <button class='col-4 nappi'>
          <GiTireIron size={40} />
          <p>Valmiit työt</p>
        </button>

        <Link to="../printable/Print" class='col-4 nappi'>
          <GiTireIron size={40} />
          <p>Printtisivutesti</p>
        </Link>        
      </div>
    </div>
  );
}
