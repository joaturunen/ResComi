import React, {useState} from 'react';
import {FaWarehouse, FaSearch } from 'react-icons/fa'; 
import {MdPersonAdd } from 'react-icons/md';
import {GiTireIron} from 'react-icons/gi';


export default function Koti() {
  const [haku, setHaku]= useState('');

  return (
    <div class='container-fluid'>
      <div class='row'>
        <div class='col'>
        </div>

        <div class='col-4 nappi'>
          <p>Hae
          <input class="form-control" name='haku'
            value= {haku} placeholder='Rekisteri tai puh'/>
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
