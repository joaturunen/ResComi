import React, {useState} from 'react';
import {boxColorLayot, buttonStyle} from '../style/colors';

export default function NewCustomer({url}) {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  const [marketing, setMarketing]= useState('phone');
  // back puuttuu!
  function addCustomer(e) {
    e.preventDefault();
      fetch(url + 'LISÄÄTÄNNEOIKEA!', { 
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            email: email,
            address: address,
            zipcode: zipcode,
            city: city,
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
      <h3>Lisää uusi asiakas</h3>
        <div className='searchCar' style={boxColorLayot}>
        <h4>Uusi asiakas</h4>
        <hr/>
        <div className='d-flex justify-content-end'><p>Asiakkuus luotu:</p></div>
        <div>
          <form className='row' onSubmit={addCustomer}>
              <div className='col-md-3'>
              <div>
              <label>Etunimi*</label>
                  <input type="text" maxLength={25} className="form-control" required value={firstname} onChange={e => setFirstname(e.target.value)}/>
              </div>
              <div>
              <label>Sukunimi*</label>
                  <input type="text" maxLength={25} className="form-control" required value={lastname} onChange={e => setLastname(e.target.value)}/>
              </div>
              <div>
              <label>Puhelinumero*</label>
                  <input type="text" maxLength={25} className="form-control" required value={phone} onChange={e => setPhone(e.target.value)}/>
              </div>
              <div>
              <label>Sähköposti*</label>
                  <input type="text" maxLength={50} className="form-control" required value={email} onChange={e => setEmail(e.target.value)}/>
              </div>
              <div>
              <label>Lähiosoite</label>
                  <input type="text" maxLength={50} className="form-control" value={address} onChange={e => setAddress(e.target.value)}/>
              </div>
              </div>
              
              
              <div className='col-md-3'>
                <div>
                <label>Postinumero</label>
                    <input type="text" maxLength={5} className="form-control" value={zipcode} onChange={e => setZipcode(e.target.value)}/>
                </div>
                <div>
                <label>Postitoimipaikka</label>
                    <input type="text" maxLength={25} className="form-control" value={city} onChange={e => setCity(e.target.value)}/>
                </div>
              </div>

              <div className='col-md-3'> <p>Ajoneuvot:</p></div>
              <div className='row'>
            <div className='col-md-12 d-flex justify-content-end '>
            <button className='btn' style={buttonStyle}>Tallenna</button>
            </div>
            </div>
          </form>
          </div>
          </div>
      </>
  );
}
