import React,{useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import {boxShadowStyle, buttonStyle, boxColorLayot} from '../style/colors';

export default function ModalNewCustomer({url}) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [employeeId, setEmployeeId] = useState('');

   // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function Modal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function Close() {
  modal.style.display = "none";
}


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

  const content =
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
  ;

  return (
      <>
        <button id='modal' onClick={Modal}>modal testinki</button>
        
        <div id="myModal" class="modal">
          <div class="modal-content">
            <span class="close" onClick={Close}>&times;</span>
            
          </div>
        </div>
      </>
    
  );
}
