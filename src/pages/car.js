import React , {useEffect, useState } from 'react';

// tulostaa yhdelle asiakkaalle kuuluvat autot 

export default function Car({ customerCars}) {

  
    const [register, setRegister] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [customer_id, setCustomer_id] = useState('');

    function SaveCar(e) {
        e.preventDefault();
    }

    return (
        <>
            <table className="table px-3 table-striped">
                <tbody>
                    {customerCars.map(car => (
                        <tr key={car.id} >
                            <td>{car.register}</td>
                            <td>{car.brand}</td>
                            <td>{car.model} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </>
    );
}
