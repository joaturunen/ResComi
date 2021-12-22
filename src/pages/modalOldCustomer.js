import React,{useState, useEffect} from 'react';
import {buttonStyle, boxColorLayot, Choice, ChoiceRemove, ChoiceRemoveBorder, ChoiceToWarehouse,ChoiceWarehouse, ChoiceInWarehouse } from '../style/colors';
import '../style/modal.css';
import {URL} from '../back/Config';
import Loading from '../components/loading';
import {FaPlus} from 'react-icons/fa'; 

// show old customer data in order page
export default function ModalOldCustomer({setCustomerData, showModal = false, setShowModalOldCustomer, customer_id}) {
  const [customerId, setCustomerId] = useState(0);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');

  const [car, setCar] = useState(0);
  const [tiresToWarehouse, setTiresToWarehouse] = useState(0);
  const [tiresFromWarehouse, setTiresFromWarehouse] = useState(0);
  const [slot, setSlot] = useState(0);

  const [cars, setCars] = useState([]);
  const [tires, setTires] = useState([]);

  const [openModel, setOpenModel] = useState(false);
  const [register, setRegister] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState(false);

  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    setShowFailed(false);
    setShowSuccess(false);
  }, [openModel]);

  useEffect(() => {
    function getData(){
    let status = 0;
    let address = URL + 'customer/customer_readToOldCustomerModal.php';
    fetch(address, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'cus_id':  customer_id
        })
    })
    .then(res => {
        status = parseInt(res.status);
        return res.json();
    })
    .then(
        (res) => {
            if (status === 200) {
              setCustomerId(res.customer.id);
              setFirstname(res.customer.firstname);
              setLastname(res.customer.lastname);
              setPhone(res.customer.phone);
              setEmail(res.customer.email);
              setAddress(res.customer.address);
              setZipcode(res.customer.zipcode);
              setCity(res.customer.city);

              setCars(res.cars);
              setTires(res.tires);
              setLoadingDone(true);
            } else {
            alert(res.error);
            }
        }, (error) => {
            alert(error);
        }
    );};
    if(showModal){
      setLoadingDone(false);
      getData();
    }
}, [showModal]);


function saveCustomerData(){

  const createCustomer = {
    "customer_id": customerId,
    "firstname": firstname,
    "lastname": lastname,
    "address": address,
    "zipcode": zipcode,
    "city": city,
    "phone": phone,
    "email": email,
    "car_id": car.id,
    "car_register": car.register,
    "tires_id": tiresToWarehouse,
    "slot_id": slot,
    "oldTires_id": tiresFromWarehouse
  };
  setCustomerData([]);
  setCustomerData([createCustomer]);
  setShowModalOldCustomer(false);
}


function upDateCustomerData(){
  console.log("Tallentaa toivottavasti tulevaisuudessa");
}


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

const tiresCar =
  <table class="table table-striped table-hover">
      <thead>
    <tr>
      <th scope="col">NRO</th>
      <th scope="col">Merkki</th>
      <th scope="col">Kausi</th>
      <th scope="col">Varasto</th>
    </tr>
  </thead>
    <tbody>
      {tires.map((tiresCar) => {
        if(car.id === tiresCar.car_id){
          if(tiresCar.slot_id !== null){
            return (
              <tr key={tiresCar.id} onClick={() => {setTiresFromWarehouse(tiresCar.id); setSlot(tiresCar.slot_id)}} style={ChoiceRemoveBorder}>
                <td className="text-center" style={ChoiceRemove}>{tiresCar.id}.</td>
                <td>{tiresCar.brand}</td>
                <td>{tiresCar.type}</td>
                <td>{tiresCar.order_season}</td>
              </tr>
            )
          } else {
            return (
              <tr key={tiresCar.id} onClick={() => setTiresToWarehouse(tiresCar.id)}>
                <td className="text-center" >{tiresCar.id}.</td>
                <td>{tiresCar.brand}</td>
                <td>{tiresCar.type}</td>
                <td> - </td>
              </tr>
            )
          }
        }
      })}
    </tbody>
  </table>;



const removeFromWarehouse =
<div className="pButtonOldOrder p-2">
<button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={()=>{setTiresFromWarehouse(0);setSlot(0)}}>
  <span aria-hidden="true">&times;</span>
  </button>
<p><span style={ChoiceRemove}>Poista</span>  renkaat <span style={ChoiceRemove}>NRO  {tiresFromWarehouse} </span> varastosta paikkanumero: {slot}</p>
</div>

const addToWarehouse =
<div className="pButtonOldOrder p-2">
<button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={()=>{setTiresToWarehouse(0);}}>
  <span aria-hidden="true">&times;</span>
  </button>
  <p><span style={ChoiceToWarehouse}>Lisätään</span>  renkaat <span style={ChoiceToWarehouse}> NRO {tiresToWarehouse} </span> varastoon paikkanumero: {slot} </p>
</div>

const addToWarehouseNewPlace =
<div className="pButtonOldOrder p-2">
<button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={()=>{setTiresToWarehouse(0);}}>
  <span aria-hidden="true">&times;</span>
  </button>
  <p><span style={ChoiceToWarehouse}>Lisätään</span>  renkaat <span style={ChoiceToWarehouse}> NRO {tiresToWarehouse} </span> varastoon uudelle paikalle </p>
</div>


  const content = <>
  <div className="modalBackground">
    <div className="modalContainer">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={()=>{setShowModalOldCustomer(false);}}>
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="d-flex flex-row">
        <div className="p-2">
          <h4>Tarkista ja valitse asiakas, auto ja renkaat</h4>
      </div>
      </div>

      <hr/>
        <div className='row'>
          <div className='col-5' style={boxColorLayot}>
          <div className="pt-3">
          <h6>Tarkista yhteystiedot</h6>
            </div>
          
          <div className='d-flex flex-row'>
              <div className='pb-5'>
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
              
              <div className='pb-5 ml-3'>
                <div>
                <label>Postinumero</label>
                    <input type="number" step="1" className="form-control" value={zipcode} onChange={e => setZipcode(e.target.value)} maxLength="5"/>
                </div>
                <div>
                <label>Postitoimipaikka</label>
                    <input type="text" className="form-control" value={city} onChange={e => setCity(e.target.value)}/>
                </div>
                <div className='align-self-end'>
                  <button className='btn' style={buttonStyle} onClick={()=>{upDateCustomerData();}}>Tallenna muokkaus</button>
                </div>
              </div>

          </div>
          </div>

          <div className='col' style={boxColorLayot}>
            <div className="pt-3">
              <h6>Valise auto ja renkaat</h6>
            </div>
          <div className='row'>
            <div class="col">
              <h6>Autot</h6>
                <table class="table table-striped table-hover">
                  <tbody>
                    {cars.map((car) => {
                        return (
                          <tr key={car.id}>
                          <td>{car.register}</td>
                          <td className="text-right"><p className='btn' onClick={() => {setCar(car)}} style={Choice}>Valitse</p></td>
                          </tr>
                        )
                    })}
                    </tbody>
                  </table>
            </div>
          <div className="col" >
            <h6>Renkaat <span style={ChoiceInWarehouse}>Varastossa</span> <span style={ChoiceWarehouse}>Lisätään</span></h6>
            {(car !== 0) ? (tiresCar) : (<p>Valitse auto</p>)}
          </div>
          <div class="d-flex flex-row">
          { (tiresFromWarehouse !== 0)  && (removeFromWarehouse)}
          { (tiresToWarehouse !== 0 && tiresFromWarehouse !== 0) && (addToWarehouse)}
          { (tiresToWarehouse !== 0 && tiresFromWarehouse === 0) && (addToWarehouseNewPlace)}
          </div>
          </div>
          </div>
          <div className='row'>
                <div className='col-12 d-flex justify-content-end '>
                <button className='btn' style={buttonStyle} onClick={()=>{setShowModalOldCustomer(false);}}>Peruuta</button>
                <button className='btn' style={buttonStyle} onClick={()=>{saveCustomerData()}}>Valitse valitut</button>
            </div>
            </div>
      </div>
  </div>
  </div>
  </>;

  const loadingShow = 
  <>
  {(loadingDone) ? (content) : (<Loading/>)}
  </>

  return (
      <>
      <div>
        { showModal && (loadingShow)}
      </div>
      </>
    
  );
}
