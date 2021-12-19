import React, { useState, useEffect } from "react";
import { buttonStyle } from '../style/colors';
import { Link, Navigate } from 'react-router-dom';
import {URL} from '../back/Config';
//import Print from "../printable/Print";

export default function Orders({}) {
  const [orders, setOrders] = useState([]);
  //const [order_id, setOrder_id] = useState('');
  //const [showReport, setShowReport] = useState(false);

  useEffect(() => {
      async function getOrders() {
          try {
              const response = await fetch(URL + 'order/order_read_all.php');
              const json = await response.json();
              if (response) {
                  setOrders(json);
              } else {
                  alert(json.error);
              }
          } catch (error) {
              alert(error);
          }
      }
      getOrders();
  }, []);

  // function openReport(order) {
  //   setOrder_id(order.id);
  //   //setShowReport(true);
    
  // }

  // if (showReport === true) {
  //   return (
      
  //     <Navigate to="/printable/print" />

  //   );
  // }

  return (
    <>
      <h3>Valmiit tilaukset</h3>
      <table className="table px-3 table-striped">
        <thead>
          <tr>
            <th scope="col">Päivämäärä</th>
            <th scope="col">Tilausnumero</th>
            <th scope="col">Asiakas</th>
            <th scope="col">Auto</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} >
              <td>{order.orderdate}</td>
              <td>{order.id}</td>
              <td>{order.customer_firstname} {order.customer_lastname}</td>
              <td>{order.car_register}</td>
              {/* <td><Print order_id={order.id}/></td> */}
              <td><Link to="/printable/Print" params={order.id} target="_blank" className='btn' style={buttonStyle}>Raportti</Link></td>
              {/* <td className="text-right"><button className='btn' style={buttonStyle} onClick={() => openReport(order)}> Raportti</button></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}