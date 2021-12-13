import React,{useState, useEffect} from 'react';
import {buttonStyle} from '../style/colors';
import '../style/modal.css';
import {URL} from '../back/Config';
import { getDefaultNormalizer } from '@testing-library/react';


export default function ModalOldCustomer({setCustomerData, showModal = false, setShowModalOldCustomer, customer_id}) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
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

  useEffect(() => {
    function getData(){
    console.log("Haetaan dataa " +  customer_id);
    let status = 0;
    let address = URL + 'customer/customer_allData.php';
    fetch(address, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'customer_id':  customer_id
        })
    })
    .then(res => {
        status = parseInt(res.status);
        return res.json();
    })
    .then(
        (res) => {
            if (status === 200) {
              console.log("Asiakkaalla on olemassa " + res);
            } else {
            alert(res.error);
            }
        }, (error) => {
            alert(error);
        }
    );};
    if(showModal){
      getData();
    }
}, [showModal]);


const alertSuccees =
  <div className="p-2">
  <div class="alert alert-success" role="alert">
    Valinta onnistui. Voit poistua näkymästä
  </div>
</div>;


const alertFailed =
  <div className="p-2">
  <div class="alert alert-danger" role="alert">
    Valinta epäonnistui. :D
  </div>
</div>;

const addCar =
<div className='col-md-3'>
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
;


  const content = <>
  <div className="modalBackground">
    <div className="modalContainer">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={()=>{setShowModalOldCustomer(false);}}>
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="d-flex flex-row">
        <div className="p-2">
          <h4>Valitse asiakas, auto ja renkaat asiakkaalle tai luo uudet</h4>
          
      </div>
      { showSuccess && (alertSuccees)}
      { showFailed && (alertFailed)}
      </div>

      <hr/>
        <div>
          <form className='row' onSubmit={""}>
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
                    <input type="number" step="1" className="form-control" value={zipcode} onChange={e => setZipcode(e.target.value)} maxLength="5"/>
                </div>
                <div>
                <label>Postitoimipaikka</label>
                    <input type="text" className="form-control" value={city} onChange={e => setCity(e.target.value)}/>
                </div>
              </div>

              <div className='row'>
                <div className='col-12 d-flex justify-content-end '>
                <button className='btn' style={buttonStyle} onClick={()=>{setOpenModel(false);}}>Peruuta</button>
                <button className='btn' style={buttonStyle}>Valitse</button>
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
        {/* <button className="btn"  style={buttonStyle} onClick={()=>{
          setOpenModel(true);
        }}>Valittu asiakas</button> */}
        { showModal && (content)}
      </div>
      </>
    
  );
}
