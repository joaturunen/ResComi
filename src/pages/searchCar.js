import React, { useState /*, useEffect*/ } from 'react';
import { Navigate } from 'react-router-dom';
import { boxShadowStyle, buttonStyle, boxColorLayot } from '../style/colors';
import Car from './car';

export default function SearchCar({ url, setCustomer_id }) {
  const [searchRegister, setSearchRegister] = useState('');
  const [result, setResult] = useState([]);
  const [showCarSite, setShowCarSite] = useState(false);
  const [showCustomerSite, setShowCustomerSite] = useState(false);

  function findRegister(e) {
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
            setResult(result => [...result, res]);
          } else {
            alert(res.error);
          }
        }, (error) => {
          alert(error);
        }
      );
  }

  // function openCarSite(car) {
  //     setCar(car);
  //     setShowCarSite(true);
  // }

  // if (showCarSite === true) {
  //     return (
  //         <Navigate to="/car" />

  //     );
  // }

  function openCustomerSite(car) {
    setCustomer_id(car.customer_id);
    setShowCustomerSite(true);
  }

  if (showCustomerSite === true) {
    return (
      <Navigate to="/oneCustomer" />

    );
  }

  return (

    <>
      <div className="padding" style={boxColorLayot}>
        <h4>Etsi ajoneuvo</h4>

        <form onSubmit={findRegister}>
          <div>
            <label className="form-label">Etsi asiakas ajoneuvon rekisterinumerolla.</label>
            <input type='text' className="form-control"
              value={searchRegister} placeholder='ABC-123' maxLength="7"
              onChange={e => setSearchRegister(e.target.value)} />
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className='btn button' style={buttonStyle}>Etsi ajoneuvo</button>
          </div>
        </form>

        <h4>Hakutulokset</h4>
        <table className="table px-3 table-striped">
          <tbody>
            {result.map(car => (
              <tr key={car.id}>
                <td>{car.register}</td>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.customer_id}</td>
                <button style={buttonStyle} onClick={() => openCustomerSite(car)}>Avaa</button>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </>

  )
}