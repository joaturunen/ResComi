import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { buttonStyle } from '../style/colors';

import {URL} from '../back/Config';

export default function Orders({openReport}) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function getOrders() {
            try {
                const response = await fetch(URL + 'order/order_read_all_workList.php');
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
          <h3>Työjono</h3>
          <table className="table px-3 table-striped">
          <thead>
            <tr>
            <th scope="col">Päivämäärä</th>
            <th scope="col">Tilausnumero</th>
            <th scope="col">Asiakas</th>
            <th scope="col"></th>
            </tr>
          </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.orders_id} >
                  <td>{order.orderdate}</td>
                  <td>{order.orders_id}</td>
                  <td>{order.car_register}</td>
                  <td><Link to={`/printable/Print/${order.orders_id}`} key={order.orders_id} target="_blank" className='btn' style={buttonStyle} >Näytä tilaus</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
    );
}