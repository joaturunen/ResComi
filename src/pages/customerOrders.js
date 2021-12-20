import React, { useState, useEffect } from "react";
import { buttonStyle } from '../style/colors';
import { Link} from 'react-router-dom';
import {URL} from '../back/Config';
import Print from "../printable/Print";

export default function CustomerOrders({openReport, customerOrders}) {

    const [order_id, setOrder_id] = useState('');
    
    // function openReport(order) {
    //     setOrder_id(order.id);
    //     console.log(order.id);
    //     localStorage.setItem('order_id',JSON.stringify(order_id));
    //     console.log(localStorage);

    //     return (
    //         <Link to="/printable/Print" target="_blank" />
    //     );
    // }

    

    return (
        <>
            <div>
                <table className="table px-3 table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Päiväys</th>
                            <th scope="col">Rekisteri</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerOrders.map(order => (
                            <tr key={order.id} >
                                <td>{order.orderdate}</td>
                                <td>{order.car_register}</td>
                                {/* <td><button className='btn' style={buttonStyle} onClick={() => openReport(order)}><Link to="/printable/Print" target="_blank" >Raportti</Link></button></td> */}
                                <td><Link to={`/printable/Print/${order.id}`} key={order.id} target="_blank" >Raportti</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}