import React , { useEffect, useState } from 'react';
import {Link, Navigate} from 'react-router-dom';

// katotaan tarviiko tätä ollenkaan

// export default function CustomerList({url, setCustomer}) {

//     const [customers, setCustomers] = useState([]);
//     const [showCustomer, setShowCustomer] = useState(false);

//     haetaan tietokannasta lista kaikista asiakkaista
//     useEffect(() => {

//         async function getCustomerList() {
//           let address = '';
    
//           address = url + 'customer/customer_read_all.php';
        
//           try {
//             const response = await fetch(address);
//             const json = await response.json();
//             if (response.ok) {
//                 setCustomers(json);
//             } else {
//               alert(json.error);
//             }
//           } catch (error) {
//             alert(error);
//           }
//         }
        
//         getCustomerList();
    
//       }, []);

//       function handleClick(customer) {
//           setCustomer(customer);
//           setShowCustomer(true);
//       }

//       if (showCustomer === true) {
//           return <Navigate to="/customer" />
//       }

//     return (
//         <ul>
//             {customers.map(customer => (
//                 <li key={customer.id}>
//                     {/** tänne joku handleclick jotta saadaan id vietyä eteenpäin */}
//                     <div onClick={() => handleClick(customer)}> 
//                         <h6>{customer.id}</h6>
//                     </div>
//                 </li>
//             ))}
//         </ul>
//     );
// }