import React, { useState, useEffect } from "react";
import { boxColorLayot, buttonStyle } from '../style/colors';
import { Link} from 'react-router-dom';
import {URL} from '../back/Config';

export default function Orders({openReport}) {
    const [orders, setOrders] = useState([]);

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
          <h3>Työjono</h3>
          <table className="table px-3 table-striped">
            <tbody>
              {orders.map(order => (
                <tr key={order.id} >
                  <td>{order.orderdate}</td>
                  <td>{order.customer_firstname} {order.customer_lastname}</td>
                  <td><Link to="/printable/Print" target="_blank" className='btn' style={buttonStyle} onClick={() => openReport(order)} >Raportti</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
    );
}