import React, {useState} from 'react';
import {FaWarehouse, FaSearch } from 'react-icons/fa'; 
import {MdPersonAdd } from 'react-icons/md';
import {GiTireIron} from 'react-icons/gi';

// tänne pitäs lisätä linkit noihin sivuihin samoin kuin navbarissa on

export default function Home() {
  const [search, setSearch]= useState('');
  const [lookFor, setLookFor]= useState('');

  return (
    <div className='container-fluid' >
      
      <div className='row'>
        <div className='col'>
        </div>

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

        <div class='col'>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
        </div>

        <button class='col-4 nappi'>
          <MdPersonAdd size={40} />
          <p>Uusi Asiakas</p>
        </button>

        <button class='col-4 nappi'>
          <GiTireIron size={40} />
          <p>Valmiit työt</p>
        </button>

        <div class='col'>
        </div>
      </div>
    </div>
  );
}
