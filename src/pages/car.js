import React, { useEffect, useState } from 'react';
import NewCar from './newCar';
import { buttonStyle } from '../style/colors';
import { FaTrash } from 'react-icons/fa';

// tulostaa yhdelle asiakkaalle kuuluvat autot 

export default function Car({ customerCars, setCustomerCars, customer_id }) {


    function deleteCar(id) {
        let status = 0;
        fetch('http://localhost/rengasvarasto-back/API/car/car_delete.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id
            })
        })
        .then(res => {
            status = parseInt(res.status);
            return res.json();
        })
        .then(
            (res) => {
                if (status === 200) {
                    const newListWithoutRemoved = customerCars.filter((car) => car.id !== id);
                    setCustomerCars(newListWithoutRemoved);
                  } else {
                    alert(res.error);
                  }
            }, (error) => {
                alert(error);
            }
        );
    }

    return (
        <>
            <div className='row'>
                <h5>Auton tiedot</h5>
                <div className="col">
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
                <div className='col'>
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

                <div className="col">
                    <label>Lisätietoja</label>
                    <textarea className='form-control' rows="10" />
                </div>
                <div className="col align-self-end">
                    <div>
                    <button className="btn btn-primary" style={buttonStyle}>Lisää uusi auto</button>
                    </div>
                    <div>
                    <button className="btn btn-primary" style={buttonStyle}>Tallenna</button>
                    </div>
                </div>

                <table className="table px-3 table-striped">
                    <tbody>
                        {customerCars.map(car => (
                            <tr key={car.id} >
                                <td>{car.register}</td>
                                <td>{car.brand}</td>
                                <td>{car.model} </td>
                                <td><FaTrash onClick={() => deleteCar(car.id)}/></td>
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
