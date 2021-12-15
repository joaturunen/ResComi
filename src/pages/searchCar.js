import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { buttonStyle, boxColorLayot } from '../style/colors';

export default function SearchCar({ url, setCustomer_id }) {
  const [searchRegister, setSearchRegister] = useState('');
  const [result, setResult] = useState([]);
  //const [showCarSite, setShowCarSite] = useState(false);
  const [showCustomerSite, setShowCustomerSite] = useState(false);

  const [resultNro, setResultNro] = useState(0);

  function findRegister(e) {
    setResult([]);
    setResultNro(1);
    e.preventDefault();
    let status = 0;
    fetch(url + 'car/car_search.php/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        searchCriteria: searchRegister
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

 

  function openCustomerSite(car) {
    setCustomer_id(car.customer_id);
    setShowCustomerSite(true);
  }

  if (showCustomerSite === true) {
    return (
      <Navigate to="/oneCustomer" />

    );
  }

  const resultContent =
  <table className="table px-3 table-striped" >
  <tbody>
    {result.map(car => (
      <tr key={car.id} className="wholeW">
        <td>{car.register}</td>
        <td>{car.brand}</td>
        <td>{car.model}</td>
        <td>{car.customer_id}</td>

        <td className="text-right"><p className='btn' style={buttonStyle} onClick={() => openCustomerSite(car)}>Avaa</p></td>
      </tr>
    ))}
  </tbody>
</table>;

  return (

    <>
      <div className="padding" style={boxColorLayot}>
        <h4>Etsi ajoneuvo</h4>

        <form onSubmit={findRegister}>
          <label className="form-label">Etsi asiakas ajoneuvon rekisterinumerolla.</label>
          <input type='text' className="form-control"
            value={searchRegister} placeholder='ABC-123' maxLength="7"
            onChange={e => setSearchRegister(e.target.value)} />
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className='btn' style={buttonStyle}>Etsi ajoneuvo</button>
          </div>
        </form>

        <h4>Hakutulokset</h4>
        { (resultNro === 2) && (<p>Tuloksia ei löytynyt.</p>)}
        { (resultNro === 1) && (<p>Haetaan tuloksia...</p>)}
        { (resultNro === 0) && (resultContent)}
      </div>
    </>

  )
}