import React, { useState, useEffect } from "react";
import { buttonStyle } from '../style/colors';
import { Link } from 'react-router-dom';
import {URL} from '../back/Config';

// shows orders that are ready

export default function Orders() {
  const [orders, setOrders] = useState([]);

  // retrieve all orders and info
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
            <tr key={order.orders_id} >
              <td>{order.orderdate}</td>
              <td>{order.orders_id}</td>
              <td>{order.customer_firstname} {order.customer_lastname}</td>
              <td>{order.car_register}</td>
              <td><Link to={`/printable/Print/${order.orders_id}`} key={order.orders_id} target="_blank" className='btn' style={buttonStyle} >Raportti</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}