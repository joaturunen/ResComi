import React, { useState, useEffect } from "react";
import { buttonStyle } from '../style/colors';
import { Link} from 'react-router-dom';

export default function CustomerOrders({openReport, customerOrders}) {
    

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