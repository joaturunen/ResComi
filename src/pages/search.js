import React,{useState} from 'react';

export default function Search() {
  const [search, setSearch] = useState('');

  function findInfo(){

  }

  return (
    <div class='container-fluid login'>
        <div>
          <div>
            <h2>Etsi Asiakas</h2>
          </div>
          <div>
            <form onSubmit={findInfo}>

              <div class='mb-3'>
                <label class="form-label">Etsi ajoneuvon rekisterillä tai asiakkaan puhelinnumerolla.</label>
                <input type='text' class="form-control" name='search'
                value= {search} placeholder='Rekisteri tai puh' 
                onChange={e => setSearch(e.target.value)}/>
              </div>

              <button class='btn btn-primary button'>Etsi</button>
            </form>
        </div>
      </div>
    </div>
  );
}
