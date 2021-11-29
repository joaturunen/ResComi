import React,{useState /*, useEffect*/} from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function SearchCustomer({url, setCustomerId}) {
  const [searchPhone, setSearchPhone] = useState('');
  const [result, setResult] = useState([]);
  const [showCustomerSite, setShowCustomerSite] = useState(false);



  function findPhone(e) {
    console.log(searchPhone);
    console.log(url);
    e.preventDefault();
    let status = 0;
    let address = url + 'customer/customer_search.php/';
    console.log(address);
    fetch(address, {
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
          setResult(result => [...result, res]);
          console.log(result);
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
    setShowCustomerSite(true);
  }
  
  if (showCustomerSite === true) {
    return (
      <Navigate to="/customer" />
      
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
                  <td><a onClick={() => goCustomerSite(customer.id)} href="/">Näytä asiakassivu</a></td>
                  <td><Link to="/customer">Näytä tiedot</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      </div>
    
  );
}
