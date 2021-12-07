import React , {useEffect, useState } from 'react';
import NewCar from './newCar';

// tulostaa yhdelle asiakkaalle kuuluvat autot 

export default function Car({customerCars, setCustomerCars, customer_id}) {

    return (
        <div>
            <div>
                <h5>Auton tiedot</h5>
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
            </div>
            <div>
                <NewCar setCustomerCars={setCustomerCars} customer_id={customer_id}/>
            </div>
            
            
        </div>
    );
}
