import React, { useState, useEffect } from "react";
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
              <th scope="col">Tilaus-NRO</th>
              <th scope="col">Auton REK</th>
              <th scope="col"></th>
            </tr>
          </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.orders_id} >
                  <td>{order.orderdate}</td>
                  <td>{order.orders_id}</td>
                  <td>{order.car_register} </td>
                  <td className="text-right"><p className='btn' style={buttonStyle} onClick={() => ""}>Näytä tilaus</p></td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
    );
}