import React,{useState /*, useEffect*/} from 'react';
import { Navigate } from 'react-router-dom';


export default function SearchCar({url, setCarId, setCustomerId}) {
    const [searchRegister, setSearchRegister] = useState('');
    const [result, setResult] = useState([]);

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
              setResult(res);
              setCarId(res.car.id);
              setCustomerId(res.car.customer_id);
            } else {
              alert(res.error);
            }
          }, (error) => {
            alert(error);
          }
        );
      }

    return (
        <div>
            <h3>Etsi auton tiedot</h3>
            <form onSubmit={findRegister}>
                <div className='mb-3'>
                    <label className="form-label">Etsi ajoneuvon rekisterinumerolla.</label>
                    <input type='text' 
                        value={searchRegister} placeholder='ABC-123' maxLength="7"
                        onChange={e => setSearchRegister(e.target.value)}/>
                    <button className='btn btn-primary button'>Etsi</button>
                </div>
            </form>
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
                        </tr>
                    ))}
                </tbody>
            </table>
            
            </div>
        </div>
        
    )
}