import React, {useState} from 'react';

export default function NewCar({url, customer}) {

  const [register, setRegister] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  // back puuttuu!
  function addCar(e) {
    setCustomerId(customer.id);
    e.preventDefault();
      fetch(url + 'LISÄÄTÄNNEOIKEA!', { 
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            register: register,
            brand: brand,
            model: model,
            customer_id: customerId,
            employee_id: employeeId
        })
    })
    .then (res => {
        return res.json();
    })
    .then (
        (res) => {
            console.log(res);
        }, (error) => {
            alert(error);
        }
    );
  }

  return (
      <>
        <h4>Lisää uusi auto</h4>
          <form onSubmit={addCar}>
            <div>
              <div>
                  <input placeholder="Rekisterinumero"value={register} onChange={e => setRegister(e.target.value)}/>
              </div>
              <div>
                  <input placeholder="Merkki"value={brand} onChange={e => setBrand(e.target.value)}/>
              </div>
              <div>
                  <input placeholder="Malli"value={model} onChange={e => setModel(e.target.value)}/>
              </div>
            </div>
            <button>Tallenna</button>
          </form>
      </>
  );
}
