import React,{useState /*, useEffect*/} from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function SearchCustomer({url, setCustomer}) {
  const [searchPhone, setSearchPhone] = useState('');
  const [result, setResult] = useState([]);
  const [showCustomerSite, setShowCustomerSite] = useState(false);



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
      return res.json();
    })
    .then(
      (res) => {
        if (status === 200) {
          console.log(res);
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
    setCustomer(customer);
    setShowCustomerSite(true);
  }
  
  if (showCustomerSite === true) {
    return (
      <Navigate to="/customerInfo" />
      
    );
  }

  return (
   
      <div>
          <h4>Etsi asiakas</h4>
          <form onSubmit={findPhone}>
            <div className='mb-3'>
              <label className="form-label">Etsi asiakkaan puhelinnnumerolla.</label>
              <input type='text' 
                value={searchPhone} placeholder='0401234567' maxLength="10"
                onChange={e => setSearchPhone(e.target.value)}/>
              <button className='btn btn-primary button'>Etsi</button>
            </div>
          </form>
        <div>
          <h4>Hakutulokset</h4>
          <table>
            <tbody>
              {result.map(customer => (
                <tr key={customer.id}>
                  <td>{customer.firstname}</td>
                  <td>{customer.lastname}</td>
                  <button onClick={() => openCustomerSite(customer)}></button>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      </div>
    
  );
}
