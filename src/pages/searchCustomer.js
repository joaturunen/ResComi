import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {buttonStyle, boxColorLayot} from '../style/colors';
import ModalOldCustomer from './modalOldCustomer';
import {URL} from '../back/Config';

export default function SearchCustomer({setCustomer_id, hightWay = 0, setCustomerData }) {
  const [searchPhone, setSearchPhone] = useState('');
  const [result, setResult] = useState([]);
  const [showCustomerSite, setShowCustomerSite] = useState(false);
  const [showModalOldCustomer, setShowModalOldCustomer ] = useState(false);
  const [id, setId] = useState(0);
  const [resultNro, setResultNro] = useState(0);

  function findPhone(e) {
    setResult([]);
    setResultNro(1);
    e.preventDefault();
    let status = 0;
    fetch(URL + 'customer/customer_search.php/', {
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
            setResult([res]);
            setResultNro(0);
            if(res){
              setResult([res]);
            } else{
              setResultNro(2);
            }
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
      setShowModalOldCustomer(true);
    } else{
      setCustomer_id(customer.id);
      setShowCustomerSite(true);
    }
  }

  if (showCustomerSite === true) {
    return (
      <Navigate to="/oneCustomer" />
    );
  }

  const resultContent =
  <table className="table px-3 table-striped">
    <thead>
        <tr>
            
            <th scope="col">Etunimi</th>
            <th scope="col">Sukunimi</th>
            <th scope="col"></th>
        </tr>
    </thead>
  <tbody>
    {result.map(customer => (
      <tr key={customer.id}>
        <td>{customer.firstname}</td>
        <td>{customer.lastname}</td>
        <td className="text-right"><p className='btn' style={buttonStyle} onClick={() => {openCustomerSite(customer)}}>Valitse</p></td>
      </tr>
    ))}
  </tbody>
</table>;

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
        <h4>Hakutulokset</h4>
        { (resultNro === 2) && (<p>Tuloksia ei löytynyt.</p>)}
        { (resultNro === 1) && (<p>Haetaan tuloksia...</p>)}
        { (resultNro === 0) && (resultContent)}
        <ModalOldCustomer setCustomerData={setCustomerData} showModal={showModalOldCustomer} setShowModalOldCustomer={setShowModalOldCustomer} customer_id={id}/>
      </div>
    </>
    
  );
}
