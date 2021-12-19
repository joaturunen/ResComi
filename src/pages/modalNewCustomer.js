import React,{useState, useEffect} from 'react';
import {buttonStyle} from '../style/colors';
import '../style/modal.css';
import {URL} from '../back/Config';


export default function ModalNewCustomer({setCustomerData}) {
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
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState(false);

  useEffect(() => {
    setShowFailed(false);
    setShowSuccess(false);
  }, [openModel]);

  function addCustomer(e) {
    setShowSuccess(false);
    setShowFailed(false);
    e.preventDefault();
    let status = 0;
      fetch( URL + 'customer/customer_createModal.php', { 
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
            if (status === 200) {
              setCustomerData([]);
              setCustomerData([res]);
              setShowSuccess(true);
          } else {
              alert(res.error);
              setShowFailed(true);
          }
        }, (error) => {
            alert(error);
        }
    );
  }

const alertSuccees =
  <div className="p-2">
  <div class="alert alert-success" role="alert">
    Lisäys onnistui. Voit poistua näkymästä
  </div>
</div>;


const alertFailed =
  <div className="p-2">
  <div class="alert alert-danger" role="alert">
    Lisäys epäonnistui. :D
  </div>
</div>;



  const content = <>
  <div className="modalBackground">
    <div className="modalContainer">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={()=>{setOpenModel(false);}}>
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="d-flex flex-row">
        <div className="p-2">
          <h3>Lisää uusi asiakas ja ajoneuvo</h3>
          
      </div>
      { showSuccess && (alertSuccees)}
      { showFailed && (alertFailed)}
      </div>

      <hr/>
        <div>
          <form className='row' onSubmit={addCustomer}>
              <div className='col-md-3'>
              <div>
              <label>Etunimi*</label>
                  <input type="text" maxLength={25} required className="form-control" value={firstname} onChange={e => setFirstname(e.target.value)}/>
              </div>
              <div>
              <label>Sukunimi*</label>
                  <input type="text" maxLength={25} required className="form-control"value={lastname} onChange={e => setLastname(e.target.value)}/>
              </div>
              <div>
              <label>Puhelinumero*</label>
                  <input type="text" maxLength={25} required className="form-control" value={phone} onChange={e => setPhone(e.target.value)}/>
              </div>
              <div>
              <label>Sähköposti*</label>
                  <input type="text" maxLength={50} required className="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
              </div>
              <div>
              <label>Lähiosoite</label>
                  <input type="text" maxLength={50} className="form-control" value={address} onChange={e => setAddress(e.target.value)}/>
              </div>
              </div>
              
              <div className='col-md-3'>
                <div>
                <label>Postinumero</label>
                    <input type="number" maxLength={5} step="1" className="form-control" value={zipcode} onChange={e => setZipcode(e.target.value)} maxLength="5"/>
                </div>
                <div>
                <label>Postitoimipaikka</label>
                    <input type="text" maxLength={25} className="form-control" value={city} onChange={e => setCity(e.target.value)}/>
                </div>
              </div>

              <div className='col-md-3'>
                <div>
                  <div>
                  <label>Auton rekisterinumero*</label>
                      <input className="form-control" required maxLength={25} value={register} onChange={e => setRegister(e.target.value)}/>
                  </div>
                  <div>
                  <label>Merkki*</label>
                      <input className="form-control" required maxLength={25} value={brand} onChange={e => setBrand(e.target.value)}/>
                  </div>
                  <div>
                  <label>Malli</label>
                      <input className="form-control" maxLength={25} value={model} onChange={e => setModel(e.target.value)}/>
                  </div>
                </div>
                
              </div>
              <div className='row'>
                
                <div className='col-12 d-flex justify-content-end '>
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
