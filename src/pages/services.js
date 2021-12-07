import React, { useState, useEffect } from "react";
import { boxColorLayot, buttonStyle } from '../style/colors';

export default function Services({ url, addToCart }) {
    const [services, setServices] = useState([]);

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
                        
                    </div>
                    
                </div>
            </div>
        </>

    );
}