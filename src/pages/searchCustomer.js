import React, { useState /*, useEffect*/ } from 'react';
import { Link, Navigate } from 'react-router-dom';
import {boxShadowStyle, buttonStyle, boxColorLayot} from '../style/colors';
import ModalOldCustomer from './modalOldCustomer';

export default function SearchCustomer({ url, setCustomer_id, customer_id, hightWay = 0,setCustomerData }) {
  const [searchPhone, setSearchPhone] = useState('');
  const [result, setResult] = useState([]);
  const [showCustomerSite, setShowCustomerSite] = useState(false);
  const [showCustomerData, setShowCustomerData] = useState(false);
  const [showModalOldCustomer, setShowModalOldCustomer ] = useState(false);
  const [id, setId] = useState(0);

  function findPhone(e) {
    setResult([]);
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

    if(hightWay === 'order'){
      setId(customer.id);
      setShowModalOldCustomer(true)
    } else{
      setCustomer_id(customer.id);
      //setShowCustomerData(true); // tällä ei saa näkymään orderissa
      setShowCustomerSite(true);
    }
  }

  if (showCustomerSite === true) {
    return (
      <Navigate to="/oneCustomer" />

    );
  }

  return (
    <>
      <div className="padding" style={boxColorLayot}>
          <h4>Etsi asiakas</h4>
          <form onSubmit={findPhone}>
              <label className="form-label">Etsi asiakkaan puhelinnumerolla.</label>
              <input type='text' className="form-control"
                value={searchPhone} placeholder='0401234567' maxLength="10"
                onChange={e => setSearchPhone(e.target.value)}/>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn button" style={buttonStyle}>Etsi asiakas</button>
              </div>
          </form>
      </div>
      <div>
        <h4>Hakutulokset</h4>
        <table className="table px-3 table-striped">
          <tbody>
            {result.map(customer => (
              <tr key={customer.id}>
                <td>{customer.firstname}</td>
                <td>{customer.lastname}</td>
                <button className='btn' style={buttonStyle} onClick={() => openCustomerSite(customer)}>Valitse</button>
              </tr>
            ))}
          </tbody>
        </table>
        <ModalOldCustomer setCustomerData={setCustomerData} showModal={showModalOldCustomer} setShowModalOldCustomer={setShowModalOldCustomer} customer_id={id}/>
      </div>
    </>
    
  );
}
