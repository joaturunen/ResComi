import React, { useState } from 'react';
import NewCar from './newCar';
import Tires from './tires';
import { buttonStyle } from '../style/colors';
import { FaTrash, FaEdit } from 'react-icons/fa';

// tulostaa yhdelle asiakkaalle kuuluvat autot 

export default function Car({ customerCars, setCustomerCars, customer_id}) {
    const [car_id, setCar_id] = useState('');
    const [car_register, setCar_register] = useState('');
    const [showTires, setShowTires] = useState(false);

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

    function openTires(car) {
        setCar_id(car.id);
        setCar_register(car.register);
        setShowTires(true);
    }

    return (
        <>
            <div className="col-6">
                <table className="table px-3 table-striped">
                    <tbody>
                        {customerCars.map(car => (
                            <tr key={car.id} >
                                <td>{car.id}</td>
                                <td>{car.register}</td>
                                <td>{car.brand}</td>
                                <td>{car.model} </td>
                                <td>
                                    <button className="btn" style={buttonStyle} onClick={() => editCar(car.id)}><FaEdit/></button>
                                    <button className="btn" style={buttonStyle} onClick={() => deleteCar(car.id)}><FaTrash/></button>
                                    <button className="btn" style={buttonStyle} onClick={() => openTires(car)}>Renkaat</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="col-6">
                {(showTires) ? (<Tires car_id={car_id} car_register={car_register}/>) : (<div></div>)}
                    
            </div>
            <div>
                <NewCar setCustomerCars={setCustomerCars} customer_id={customer_id} />
            </div>


        </>
    );
}
