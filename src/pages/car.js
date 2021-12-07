import React, { useEffect, useState } from 'react';
import NewCar from './newCar';

// tulostaa yhdelle asiakkaalle kuuluvat autot 

export default function Car({ customerCars, setCustomerCars, customer_id }) {

    return (
        <div>
            <div className='row'>
                <h5>Auton tiedot</h5>
                <div className="col-sm-4">
                    <label>Rekisterinumero</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-sm-4">
                    <label>Merkki</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-sm-4">
                    <label>Malli</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-sm-4">
                    <label>Vuosimalli</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-sm-4">
                    <label>Säilytyskausi</label>
                    <div className="col-sm-6">
                        <select className="form-select">
                            <option value="1">Kesä</option>
                            <option value="2">Talvi</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-4">
                    <label>Lisätietoja</label>
                    <textarea rows="3" />
                </div>
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
                <NewCar setCustomerCars={setCustomerCars} customer_id={customer_id} />
            </div>


        </div>
    );
}
