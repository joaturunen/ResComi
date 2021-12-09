import React,{useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import {boxShadowStyle, buttonStyle, boxColorLayot} from '../style/colors';
import '../style/modal.css';


export default function ModalNewCustomer({url}) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [employeeId, setEmployeeId] = useState(3);
  const [openModel, setOpenModel] = useState(false);
  const [register, setRegister] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');

  function addCustomer(e) {
    e.preventDefault();
    console.log(url)
    let status = 0;
      fetch(url + 'customer/customer_createModal.php', { 
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
            employee_id: employeeId,
            register: register,
            brand: brand,
            model: model
        })
    })
    .then (res => {
        status = parseInt(res.status);
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
  const content = <>
  <div className="modalBackground">
    <div className="modalContainer">
      <div className="title">
      <h3>Lisää uusi asiakas ja ajoneuvo</h3>
      </div>

      <hr/>
        <div>
          <form className='row' onSubmit={addCustomer}>
              <div className='col-md-3'>
              <div>
              <label>Etunimi</label>
                  <input type="text" className="form-control" value={firstname} onChange={e => setFirstname(e.target.value)}/>
              </div>
              <div>
              <label>Sukunimi</label>
                  <input type="text" className="form-control"value={lastname} onChange={e => setLastname(e.target.value)}/>
              </div>
              <div>
              <label>Puhelinumero</label>
                  <input type="text" className="form-control" value={phone} onChange={e => setPhone(e.target.value)}/>
              </div>
              <div>
              <label>Sähköposti</label>
                  <input type="text" className="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
              </div>
              <div>
              <label>Lähiosoite</label>
                  <input type="text" className="form-control" value={address} onChange={e => setAddress(e.target.value)}/>
              </div>
              </div>
              
              <div className='col-md-3'>
                <div>
                <label>Postinumero</label>
                    <input type="text" className="form-control" value={zipcode} onChange={e => setZipcode(e.target.value)}/>
                </div>
                <div>
                <label>Postitoimipaikka</label>
                    <input type="text" className="form-control" value={city} onChange={e => setCity(e.target.value)}/>
                </div>
              </div>

              <div className='col-md-3'>
                <div>
                  <div>
                  <label>Auton rekisterinumero</label>
                      <input className="form-control" value={register} onChange={e => setRegister(e.target.value)}/>
                  </div>
                  <div>
                  <label>Merkki</label>
                      <input className="form-control" value={brand} onChange={e => setBrand(e.target.value)}/>
                  </div>
                  <div>
                  <label>Malli</label>
                      <input className="form-control" value={model} onChange={e => setModel(e.target.value)}/>
                  </div>
                </div>
                
              </div>
              <div className='row'>
            <div className='col-md-12 d-flex justify-content-end '>
            <button className='btn' style={buttonStyle} onClick={()=>{setOpenModel(false);}}>Peruuta</button>
            <button className='btn' style={buttonStyle}>Tallenna uusi asiakas</button>
            </div>
            </div>
          </form>
      </div>
  </div>
  </div>
  </>;

  return (
      <>
      <div>
        <button className="btn"  style={buttonStyle} onClick={()=>{
          setOpenModel(true);
        }}>Lisää uusi asiakas ja auto</button>
        { openModel && (content)}
      </div>
      </>
    
  );
}
