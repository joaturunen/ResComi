import React , { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';



export default function CustomerList({url}) {

    const [customers, setCustomers] = useState([]);

    // haetaan tietokannasta lista kaikista asiakkaista
    useEffect(() => {

        async function getCustomerList() {
          let address = '';
    
          address = url + 'customer/customer_read_all.php';
        
          try {
            const response = await fetch(address);
            const json = await response.json();
            if (response.ok) {
                setCustomers(json);
            } else {
              alert(json.error);
            }
          } catch (error) {
            alert(error);
          }
        }
        
        getCustomerList();
    
      }, []);

    return (
        <ul>
            {customers.map(customer => (
                <li key={customer.id}>
                    {/** tänne joku handleclick jotta saadaan id vietyä eteenpäin */}
                    <Link to={customer.id}> 
                        <p>{customer.id}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
}