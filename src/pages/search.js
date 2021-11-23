import React,{useState} from 'react';

export default function Search() {
  const [search, setSearch] = useState('');

  /**
   * haetaan tietokannasta kaikkien asiakkaiden tiedot ja kaikkien autojen tiedot
   * verrataan hakukriteeriä puhelinnumeroihin ja rekisterinumeroihin
   * asetetaan kriteeriin sopiva asiakas-id usestateen
   * varmaan pitää olla täsmälleen oikea tulos, ei sumeaa hakua? 
   * näytetään hakutulos linkkinä, siitä kun painaa niin avautuu asiakas-sivu
   */

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
