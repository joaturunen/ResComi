import React, { useState, useEffect } from "react";
import { boxColorLayot, buttonStyle } from '../style/colors';


export default function Orders({url, openReport}) {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function getOrders() {
            console.log(url);
            try {
                const response = await fetch(url + 'order/order_read_all.php');
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
        <div className='row'>
            <div className='row' style={boxColorLayot}>
                <div className='row mt-3 mb-3'>
                    <h3>Valmiit tilaukset</h3>
                </div>
                <div className='row mb-3'>
                    <table className="table px-3 table-striped">
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id} >
                                    <td>{order.id}</td>
                                    <td>{order.customer_id}</td>
                                    <td>{order.orderdate}</td>
                                    <td>{order.service}</td>
                                    <button className='btn btn-primary' style={buttonStyle} onClick={() => openReport(order)} >Raportti</button>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                </div>
                
            </div>
        </div>
    );
}