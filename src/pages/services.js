import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { boxColorLayot, pieChartTaken, pieChartFree } from '../style/colors';

export default function Services({ url, addToCart }) {
    const [services, setServices] = useState([]);
    const [showOrderSite, setShowOrderSite] = useState(false);

    useEffect(() => {
        async function getServices() {
            console.log(url);
            try {
                const response = await fetch(url + 'services/services_read_all.php');
                const json = await response.json();
                if (response) {
                    setServices(json);
                } else {
                    alert(json.error);
                }
            } catch (error) {
                alert(error);
            }
        }
        getServices();
    }, []);

    function goOrderSite() {
        setShowOrderSite(true);
    }

    if (showOrderSite === true) {
        return (
            <Navigate to="/order" />

        );
    }

    return (
        <>
            <div className='row'>
                <div className='row' style={boxColorLayot}>
                    <div className='row'>
                        <h3>Palvelut</h3>
                    </div>
                    <div className='row'>
                        <table className="table px-3 table-striped">
                            <tbody>
                                {services.map(service => (
                                    <tr key={service.id} >
                                        <td>{service.service}</td>
                                        <td>{service.price} €</td>
                                        <button onClick={() => addToCart(service)}>Valitse</button>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h5>Yhteensä: xxx€</h5>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <button className='btn btn-primary' onClick={() => goOrderSite()}>Siirry tilaussivulle</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}