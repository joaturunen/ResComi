import React,{useState /*, useEffect*/} from 'react';
import { Navigate } from 'react-router-dom';
import {boxShadowStyle, buttonStyle} from '../style/colors';
import Car from './car';

export default function SearchCar({url, setCustomer_id}) {
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
          <Navigate to="/customerInfo" />
          
        );
      }

    return (
        <div className='row justify-content-md-center mt-5 button'>
            
            <div className='col-md-6 searchCar' style={boxShadowStyle}>
            <h1>HAKU</h1>
            <hr></hr>
            <form onSubmit={findRegister}>
                <div className='mb-3'>
                    <input type='text' className="form-control"
                        value={searchRegister} placeholder='Hae rekisterillä' maxLength="7"
                        onChange={e => setSearchRegister(e.target.value)}/>
                </div>
                <button className='btn btn-primary button' style={buttonStyle}>Etsi ajoneuvo</button>
      
            </form>
            </div>
            <div>
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
        </div>
        
    )
}