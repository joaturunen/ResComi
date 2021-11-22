import React, {useState} from 'react';
import {FaWarehouse, FaSearch } from 'react-icons/fa'; 
import {MdPersonAdd } from 'react-icons/md';
import {GiTireIron} from 'react-icons/gi';

// tänne pitäs lisätä linkit noihin sivuihin samoin kuin navbarissa on

export default function Home() {
  const [search, setSearch]= useState('');
  const [lookFor, setLookFor]= useState('');

  return (
    <div class='container-fluid'>
      <div class='row'>
        <div class='col'>
        </div>

        <div class='col-4 nappi'>
          <p>Hae
          <input class="form-control" name='haku'
            value= {lookFor} placeholder='Rekisteri tai puh'/>
            <FaSearch size={20}/></p>
        </div>
        <div class='col-4 nappi'>
          <FaWarehouse size={40}/>
          <p>Varasto</p>
        </div>

        <div class='col'>
        </div>
      </div>

      <div class='row'>
        <div class='col'>
        </div>

        <div class='col-4 nappi'>
          <MdPersonAdd size={40} />
          <p>Uusi Asiakas</p>
        </div>

        <div class='col-4 nappi'>
          <GiTireIron size={40} />
          <p>Valmiit työt</p>
        </div>
        <div class='col'>
        </div>
      </div>
    </div>
  );
}
