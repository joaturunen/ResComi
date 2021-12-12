import React, { useEffect, useState } from 'react';
import NewCar from './newCar';
import { buttonStyle } from '../style/colors';

// tulostaa yhdelle asiakkaalle kuuluvat autot 

export default function Car({ customerCars, setCustomerCars, customer_id }) {
  
    return (
        <>
            <div className='row'>
                <h5>Auton tiedot</h5>
                <div className="col-md-4">
                    <div>
                        <label>Rekisteri</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <label>Merkki</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <label>Malli</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <label>Vuosimalli</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div>
                        <label>Säilytyskausi</label>
                        <div>
                            <select className="form-select">
                                <option value="1">Kesä</option>
                                <option value="2">Talvi</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label>Vanteet, suositus:</label>
                        <textarea className='form-control' rows="6" />
                    </div>
                </div>

                <div className="col-md-4">
                    <label>Lisätietoja</label>
                    <textarea className='form-control' rows="10" />
                </div>

                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary" style={buttonStyle}>Lisää uusi auto</button>
                    <button className="btn btn-primary" style={buttonStyle}>Tallenna</button>
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


        </>
    );
}
