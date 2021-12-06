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
      <div className='row'>
          <div className=' searchCar' style={boxColorLayot}>
        <h4> Uusi asiakas</h4>
        <hr></hr>
        <div className='d-flex justify-content-end'><p>Asiakkuus luotu:</p></div>
        <div>
          <form className='row' onSubmit={addCustomer}>
           
                <div className='col-md-3'>
              <div>
                  <input placeholder="Etunimi"value={firstname} onChange={e => setFirstname(e.target.value)}/>
              </div>
              <div>
                  <input placeholder="Sukunimi"value={lastname} onChange={e => setLastname(e.target.value)}/>
              </div>
              <div>
                  <input placeholder="Puhelin"value={phone} onChange={e => setPhone(e.target.value)}/>
              </div>
              <div>
                  <input placeholder="Sähköposti"value={email} onChange={e => setEmail(e.target.value)}/>
              </div>
              <div>
                  <input placeholder="Katuosoite"value={address} onChange={e => setAddress(e.target.value)}/>
              </div>
              </div>
              
              
              <div className='col-md-3'>
              <div>
                  <input placeholder="Postinumero"value={zipcode} onChange={e => setZipcode(e.target.value)}/>
              </div>
              <div>
                  <input placeholder="Postitoimipaikka"value={city} onChange={e => setCity(e.target.value)}/>
              </div>
              
              <div className='row'>
              <div>
             <label>Suoramarkkinointilupa</label>
             </div>
             <div>
             <input type="radio" name="marketing" value="phone" defaultChecked onChange={e => setMarketing(e.target.value)}/><label>Puhelin</label>
             </div>
             <div>
             <input type="radio" name="marketing" value="mail" onChange={e => setMarketing(e.target.value)}/><label>Sähköposti</label>
             </div>
             </div>
              </div>
              <div className='col-md-3'> <p>Ajoneuvot:</p></div>
              <div className='row'>
            <div className='col-md-12 d-flex justify-content-end '>
            <button className='btn btn-primary ' style={buttonStyle}>Tallenna</button>
            </div>
            </div>
          </form>
          </div>
          </div>
      </div>
  );
}
