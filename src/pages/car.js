import React , {useEffect, useState } from 'react';

// tulostaa yhdelle asiakkaalle kuuluvat autot 

export default function Car({url, customerCars, setCustomerCars, customer_id}) {

  
    const [register, setRegister] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [cus_id, setCus_id] = useState(customer_id);

    function SaveCar(e) {
        e.preventDefault();
        let status = 0;
        fetch('http://localhost/rengasvarasto-back/API/car/car_create.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                register: register,
                brand: brand,
                model: model,
                customer_id: cus_id
            })
        })
        .then(res => {
            return res.json();
        })
        .then(
            (res) => {
                if (status === 200) {
                    setCustomerCars(customerCars => [...customerCars, res]);
                    setRegister('');
                    setBrand('');
                    setModel('');
                } else {
                    alert(res.error);
                }
            }, (error) => {
                alert(error);
            }
        );

    }

    return (
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
            <h6>Lisää uusi auto</h6>
            <form onSubmit={SaveCar}>
                <input placeholder="Rekisterinumero" value={register} onChange={e => setRegister(e.target.value)}/>
                <input placeholder="Merkki" value={brand} onChange={e => setBrand(e.target.value)}/>
                <input placeholder="Malli" value={model} onChange={e => setModel(e.target.value)}/>
                <button>Tallenna</button>
            </form>
            
        </div>
    );
}
