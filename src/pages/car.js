import React, { useEffect, useState } from 'react';
import NewCar from './newCar';
import { buttonStyle } from '../style/colors';
import { FaTrash, FaEdit } from 'react-icons/fa';

// tulostaa yhdelle asiakkaalle kuuluvat autot 

export default function Car({ customerCars, setCustomerCars, customer_id }) {


    function deleteCar(id) {
        let status = 0;
        console.log(id);
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

    function editCar(id) {

    }

    return (
        <>
            <div className='row'>
                <table className="table px-3 table-striped">
                    <tbody>
                        {customerCars.map(car => (
                            <tr key={car.id} >
                                <td>{car.id}</td>
                                <td>{car.register}</td>
                                <td>{car.brand}</td>
                                <td>{car.model} </td>
                                <td><FaEdit onClick={() => editCar(car.id)}/></td>
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
