import React,{useState, useEffect} from 'react';

export default function Search({url, setCarId, setCustomerId}) {
  const [searchRegister, setSearchRegister] = useState('');
  const [searchPhone, setSearchPhone] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('');
  const [result, setResult] = useState([]);

  /**
   * haetaan tietokannasta kaikkien asiakkaiden tiedot ja kaikkien autojen tiedot ! FRONT OK, BACK-KOODI PUUTTUU
   * verrataan hakukriteeriä puhelinnumeroihin ja rekisterinumeroihin ! BACKISSA, PUUTTUU
   * asetetaan kriteeriin sopiva asiakas-id usestateen ! 
   * varmaan pitää olla täsmälleen oikea tulos, ei sumeaa hakua? ! HAKU like-operaattorilla, ei tarvi olla täsmällinen
   * näytetään hakutulos linkkinä, siitä kun painaa niin avautuu asiakas-sivu ! 
   */

  
  // function findRegister() {
  //   useEffect(() => {
  //     let address = url + 'car/car_search.php/' + searchRegister;

  //     async function getRegisters() {
  //       try {
  //         const response = await fetch(address);
  //         const json = await response.json();
  //         if(response.ok) {
  //           setResult(json);
  //         } else {
  //           alert(json.error);
  //         }
  //       } catch (error) {
  //         alert(error);
  //       }
  //     }
  //     getRegisters();

  //   }, [searchRegister]);
  // }

  // function findPhone() {
  //   useEffect(() => {
  //     let address = url + 'customer/customer_search.php/' + searchPhone;

  //     async function getPhones() {
  //       try {
  //         const response = await fetch(address);
  //         const json = await response.json();
  //         if(response.ok) {
  //           setResult(json);
  //         } else {
  //           alert(json.error);
  //         }
  //       } catch (error) {
  //         alert(error);
  //       }
  //     }
  //     getPhones();
      
  //   }, [searchPhone]);
  // }

  return (
    <div >
      <div>
        <div>
          <h2>Etsi asiakas</h2>
        </div>
        <div className="row">
          <div className="col-4">
            <form onSubmit={findRegister}>
              <div className='mb-3'>
                <label className="form-label">Etsi ajoneuvon rekisterinumerolla.</label>
                <input type='text' 
                  value={searchRegister} placeholder='ABC-123' 
                  onChange={e => setSearchRegister(e.target.value)}/>
                <button className='btn btn-primary button'>Etsi</button>
              </div>
            </form>
          </div>
          <div className="col-4">
            <form onSubmit={findPhone}>
              <div className='mb-3'>
                <label className="form-label">Etsi asiakkaan puhelinnnumerolla.</label>
                <input type='text' 
                  value={searchPhone} placeholder='040-1234567' 
                  onChange={e => setSearchPhone(e.target.value)}/>
                <button className='btn btn-primary button'>Etsi</button>
              </div>
            </form>
          </div>
        </div>
        <div>
          {result} {/** tää pitää muotoilla jotenkin järkevästi */}
        </div>
      </div>
    </div>
  );
}
