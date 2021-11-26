import React, {useState} from 'react';
import {FaWarehouse, FaSearch } from 'react-icons/fa'; 
import {MdPersonAdd } from 'react-icons/md';
import {GiTireIron} from 'react-icons/gi';

// tänne pitäs lisätä linkit noihin sivuihin samoin kuin navbarissa on

export default function Home() {
  const [search, setSearch]= useState('');
  const [lookFor, setLookFor]= useState('');

  return (
    <>
    <div className='row justify-content-center'>
        <h1>DashBoard</h1>
      <div className='row'>
        <div className='col-3 button'>
          <p>Hae
          <input className="form-control" name='haku'
            value= {lookFor} placeholder='Rekisteri tai puh'/>
            <FaSearch size={20}/></p>
        </div>
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

      </div>
      </div>
      </>
  );
}
