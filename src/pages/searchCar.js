import React,{useState /*, useEffect*/} from 'react';
import { Navigate } from 'react-router-dom';
import {boxShadowStyle} from '../style/colors';

export default function SearchCar({url, setCar}) {
    const [searchRegister, setSearchRegister] = useState('');
    const [result, setResult] = useState([]);
    const [showCarSite, setShowCarSite] = useState(false);

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

    function openCarSite(car) {
        setCar(car);
        setShowCarSite(true);
      }
      
      if (showCarSite === true) {
        return (
          <Navigate to="/car" />
          
        );
      }

    return (
        <div className='row justify-content-md-center button'>
            <h2>Etsi auton tiedot</h2>
            <div  className='col-md-6 searchCar' style={boxShadowStyle}>
            <form onSubmit={findRegister}>
                <div className='justify-content-md-center'>
                  <div>
                    <label className="form-label"><h5>Etsi ajoneuvon rekisterinumerolla.</h5></label>
                    </div>
                    <input type='text' 
                        value={searchRegister} placeholder='ABC-123' maxLength="7"
                        onChange={e => setSearchRegister(e.target.value)}/>
                        <div>
                    <button className='btn btn-primary button'>Etsi</button>
                    </div>
                </div>
      
            </form>
            </div>
            <div>
                <h4>Hakutulokset</h4>
                <table>
                    <tbody>
                        {result.map(car => (
                            <tr key={car.id}>
                                <td>{car.register}</td>
                                <td>{car.brand}</td>
                                <td>{car.model}</td>
                                <td>{car.customer_id}</td>
                                <button onClick={() => openCarSite(car)}>Avaa</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            
            </div>
        </div>
        
    )
}