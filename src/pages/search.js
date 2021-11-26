import React,{useState /*, useEffect*/} from 'react';
import { Navigate } from 'react-router-dom';

export default function Search({url, setCarId, setCustomerId}) {
  const [searchRegister, setSearchRegister] = useState('');
  const [searchPhone, setSearchPhone] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('');
  const [result, setResult] = useState([]);
  const [showCustomerSite, setShowCustomerSite] = useState(false);

  /**
   * haetaan tietokannasta kaikkien asiakkaiden tiedot ja kaikkien autojen tiedot ! BACK TOIMII, FRONT EI
   * verrataan hakukriteeriä puhelinnumeroihin ja rekisterinumeroihin ! OK
   * asetetaan kriteeriin sopiva asiakas-id usestateen ! 
   * varmaan pitää olla täsmälleen oikea tulos, ei sumeaa hakua? ! HAKU like-operaattorilla, ei tarvi olla täsmällinen
   * näytetään hakutulos linkkinä, siitä kun painaa niin avautuu asiakas-sivu ! 
   */



  function findRegister(e) {
    setSearchCriteria(searchRegister);
    e.preventDefault();
    let status = 0;
    fetch(url + 'car/car_search.php/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        searchCriteria: searchCriteria
      })
    })
    .then(res => {
      status = parseInt(res.status);
      return res.json();
    })
    .then(
      (res) => {
        if (status === 200) {
          setResult(res);
          setCarId(res.id);
        } else {
          alert(res.error);
        }
      }, (error) => {
        alert(error);
      }
    );
  }

  function findPhone(e) {
    setSearchCriteria(searchPhone);
    console.log(searchCriteria);
    e.preventDefault();
    let status = 0;
    fetch(url + 'customer/customer_search.php/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        searchCriteria: searchCriteria
      })
    })
    .then(res => {
      return res.json();
    })
    .then(
      (res) => {
        if (status === 200) {
          setResult(res);
          console.log(res);
          setCustomerId(res.customer.id);
        } else {
          alert(res.error);
        }
      }, (error) => {
        alert(error);
      }
    );
  }

  function goCustomerSite(customerId) {
    setCustomerId(customerId);
    //setCarId(carId); tämä pitää pohtia vielä
    setShowCustomerSite(true);
  }
  
  if (showCustomerSite === true) {
    return (
      <Navigate to="/customer" />
      
    );
  }

  return (
   
      <div class='container-fluid'>
        <div>
          <h1>Etsi asiakas</h1>
        </div>
        <div className="row">
          <div className="col-4">
            <form onSubmit={findRegister}>
              <div className='mb-3'>
                <label className="form-label">Etsi ajoneuvon rekisterinumerolla.</label>
                <input type='text' 
                  value={searchRegister} placeholder='ABC-123' maxLength="7"
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
                  value={searchPhone} placeholder='0401234567' maxLength="10"
                  onChange={e => setSearchPhone(e.target.value)}/>
                <button className='btn btn-primary button'>Etsi</button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <h4>Hakutulokset</h4>
          <table>
            <tbody>
              {result.map(customer => (
                <tr key={customer.id}>
                  <td>{customer.firstname}</td>
                  <td>{customer.lastname}</td>
                  <td><a onClick={() => goCustomerSite(customer.id)} href="/">Näytä asiakassivu</a></td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      </div>
    
  );
}
