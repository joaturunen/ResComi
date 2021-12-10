import React, {useState} from 'react';
import {buttonStyle} from '../style/colors';

export default function NewCar({setCustomerCars, customer_id}) {

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
            status = parseInt(res.status);
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
        <div className='row mt-5'>
            <h5>Lisää uusi auto</h5>
            <form onSubmit={SaveCar} className='col-4'>
                    <div>
                        <label>Rekisteri</label>
                        <input type="text" className="form-control" value={register} onChange={e => setRegister(e.target.value)}/>
                    </div>
                    <div>
                        <label>Merkki</label>
                        <input type="text" className="form-control" value={brand} onChange={e => setBrand(e.target.value)}/>
                    </div>
                    <div>
                        <label>Malli</label>
                        <input type="text" className="form-control" value={model} onChange={e => setModel(e.target.value)}/>
                    </div>
                
                <button className='btn btn-primary' style={buttonStyle}>Tallenna</button>
            </form>
        </div>
    );
}
