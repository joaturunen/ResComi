import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { boxColorLayot, buttonStyle } from '../style/colors';

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
                    <div className='row mt-3 mb-3'>
                        <h3>Palvelut</h3>
                    </div>
                    <div className='row mb-3'>
                        <div className='col'>
                        <h5>Säilytyskausi</h5>
                        <table className="table px-3 table-striped">
                            
                            <tbody>
                                {services.map(service => (
                                    <tr key={service.id} >
                                        <td>{service.service}</td>
                                        <td>{service.price} €</td>
                                        <button className='btn btn-primary' style={buttonStyle} onClick={() => addToCart(service)}>Valitse</button>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                        <div className='col'>
                        <h5>Lisäpalvelut</h5>
                        <table className="table px-3 table-striped">
                            <tbody>
                                {services.map(service => (
                                    <tr key={service.id} >
                                        <td>{service.service}</td>
                                        <td>{service.price} €</td>
                                        <button className='btn btn-primary' style={buttonStyle} onClick={() => addToCart(service)}>Valitse</button>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    {/* <div>
                        <h5>Yhteensä: xxx€</h5>
                    </div> */}
                    <div className='row mb-3'>
                        <div className='col text-end'>
                            <button className='btn btn-primary' style={buttonStyle} onClick={() => goOrderSite()}>Jatka</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}