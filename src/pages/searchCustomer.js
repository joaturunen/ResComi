import React, { useState /*, useEffect*/ } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { boxShadowStyle, buttonStyle } from '../style/colors';

export default function SearchCustomer({ url, setCustomer_id, customer_id }) {
  const [searchPhone, setSearchPhone] = useState('');
  const [result, setResult] = useState([]);
  const [showCustomerSite, setShowCustomerSite] = useState(false);
  const [showCustomerData, setShowCustomerData] = useState(false);

  function findPhone(e) {
    e.preventDefault();
    let status = 0;
    fetch(url + 'customer/customer_search.php/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        searchCriteria: searchPhone
      })
    })
      .then(res => {
        status = parseInt(res.status);
        return res.json();
      })
      .then(
        (res) => {
          if (status === 200) {
            setResult(result => [...result, res]);
          } else {
            alert(res.error);
          }
        }, (error) => {
          alert(error);
        }
      );
  }

  function openCustomerSite(customer) {
    setCustomer_id(customer.id);
    //setShowCustomerData(true); // tällä ei saa näkymään orderissa 
    setShowCustomerSite(true);
  }

  if (showCustomerSite === true) {
    return (
      <Navigate to="/oneCustomer" />

    );
  }

  return (
    <>
      <div>
        <div className='searchCar'>
          <h4>Etsi asiakas</h4>

          <form onSubmit={findPhone}>
            <div>
              <label className="form-label">Etsi asiakkaan puhelinnumerolla.</label>
              <input type='text' className="form-control"
                value={searchPhone} placeholder='0401234567' maxLength="10"
                onChange={e => setSearchPhone(e.target.value)} />
              <div>
                <button className='btn btn-primary button' style={buttonStyle} >
                  Etsi Asiakas</button>
              </div>
            </div>
          </form>

        </div>
        
            <div className='mt-3 mx-3'>
              <h5>Hakutulokset</h5>
              <table className="table table-striped">
                <tbody>
                  {result.map(customer => (
                    <tr key={customer.id}>
                      <td>{customer.firstname}</td>
                      <td>{customer.lastname}</td>
                      <button style={buttonStyle} onClick={() => openCustomerSite(customer)}>Avaa</button>
                    </tr>
                  ))}
                </tbody>
              </table>

        </div>


      </div>
    </>

  );
}
