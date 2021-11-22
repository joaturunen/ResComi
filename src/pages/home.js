import React, {useState} from 'react';
import {FaWarehouse, FaSearch } from 'react-icons/fa'; 
import {MdPersonAdd } from 'react-icons/md';
import {GiTireIron} from 'react-icons/gi';


export default function Home() {
  const [search, setSearch]= useState('');
  const [lookFor, setLookFor]= useState('');

  return (
    <div class='container-fluid'>
      <div class='row'>
        <div class='col'>
        </div>

        <div class='col-4 nappi'>
<<<<<<< HEAD:src/sivut/koti.js
          
          <div>
            <input class="form-control search" name='haku'
              value= {haku} placeholder='Rekisteri tai puh' />
            <button class='btn'><FaSearch size={20} /></button>
          </div>
          <label>Haku</label>
=======
          <p>Hae
          <input class="form-control" name='haku'
            value= {lookFor} placeholder='Rekisteri tai puh'/>
            <FaSearch size={20}/></p>
>>>>>>> 57fae423975b17eb6814c5abdbd83676f3a3e535:src/pages/home.js
        </div>

        <button class='col-4 nappi'>
          <FaWarehouse size={40}/>
          <p>Varasto</p>
        </button>

        <div class='col'>
        </div>
      </div>

      <div class='row'>
        <div class='col'>
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
