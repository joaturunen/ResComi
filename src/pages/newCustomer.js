import React, {useState} from 'react';

export default function NewCustomer({url}) {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [employeeId, setEmployeeId] = useState('');

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
      <div>
        <h4>Lisää uusi asiakas</h4>
          <form onSubmit={addCustomer}>
            <div>
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
              <div>
                  <input placeholder="Postinumero"value={zipcode} onChange={e => setZipcode(e.target.value)}/>
              </div>
              <div>
                  <input placeholder="Postitoimipaikka"value={city} onChange={e => setCity(e.target.value)}/>
              </div>
            </div>
            <button>Tallenna</button>
          </form>
      </div>
  );
}
