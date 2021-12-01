import React , {useEffect, useState } from 'react';

// tämä avautuu hakutuloksesta, ei näy navissa

export default function Car({ car}) {

  
    const [register, setRegister] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [customer_id, setCustomer_id] = useState('');

    function SaveCar(e) {
        e.preventDefault();
    }

    return (
        <>
        <h4>Auton tiedot</h4>
        <p>{car.register}</p>
        <p>{car.brand}</p>
        <p>{car.model}</p>
        <p>{car.customer_id}</p> {/** tämä ei saa näkyä lopullisessa versiossa */}

        <form onSubmit={SaveCar}>
            <input type="text" value={model} onChange={e => setModel(model)}></input>
        </form>
        </>
    );
}
