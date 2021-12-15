import React, { useState, useEffect } from "react";
import { buttonStyle } from '../style/colors';
import { Link} from 'react-router-dom';

export default function CustomerOrders({openReport, customer_id, customerOrders}) {
    //const [cusOrders, setCusOrders] = useState([]);

    // useEffect(() => {
    //     console.log(customer_id);
    //     let status = 0;
    //     fetch('http://localhost/rengasvarasto-back/API/orders/orders_read_by_cus.php', {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         customer_id: customer_id
    //     })
    //     })
    //     .then(res => {
    //     status = parseInt(res.status);
    //     return res.json();
    //     })
    //     .then(
    //     (res) => {
    //         if (status === 200) {
    //         setCusOrders(res);
    //         } else {
    //         alert(res.error);
    //         }
    //     }, (error) => {
    //         alert(error);
    //     }
    //     );
    // }, [customer_id]);

    return (
        <>
            <div>
                <table className="table px-3 table-striped">
                    <tbody>
                        {customerOrders.map(order => (
                            <tr key={order.id} >
                                <td>{order.orderdate}</td>
                                <td>{order.car_register}</td>
                                <td><Link to="/printable/Print" target="_blank" className='btn' style={buttonStyle} onClick={() => openReport(order)} >Raportti</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}