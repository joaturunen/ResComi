import React,{useState, useEffect} from 'react';
import {buttonStyle, boxColorLayot, Choice, ChoiceRemove } from '../style/colors';
import '../style/modal.css';
import {URL} from '../back/Config';



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

  useEffect(() => {
    setShowFailed(false);
    setShowSuccess(false);
  }, [openModel]);

  useEffect(() => {
    function getData(){
    console.log("Haetaan dataa " +  customer_id);
    let status = 0;
    let address = URL + 'customer/customer_read_cus_cars_tires.php';
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


function upDateCustomerData(){
  console.log("Tallentaa toivottavasti tulevaisuudessa");
}


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
          <h4>Tarkista ja valitse asiakas, auto ja renkaat</h4>
          
      </div>
      { showSuccess && (alertSuccees)}
      { showFailed && (alertFailed)}
      </div>

      <hr/>
        <div className='row'>
          <div className='col-5' style={boxColorLayot}>
          <h6>Tarkista yhteystiedot</h6>
          <div className='d-flex flex-row'>
              <div className='p-2'>
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
              
              <div className='p-2'>
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
          <h6>Valise auto ja renkaat</h6>
          <div className='row'>
            <div class="col">
              <h6>Autot</h6>
                <table class="table table-striped table-hover">
                  <tbody>
                    {cars.map((car) => {
                        return (
                          <tr key={car.id} onClick={() => setCar(car.id)}>
                          <td>{car.register}</td>
                          <td>{car.model}</td>
                          </tr>
                        )
                    })}
                    </tbody>
                  </table>
            </div>
          <div className="col" >
            <h6>Renkaat</h6>
            <table class="table table-striped table-hover">
              <tbody>
              {tires.map((tiresCar) => {
                if(car === tiresCar.car_id){
                  if(car.order_season !== null){
                    return (
                      <tr key={tiresCar.id} onClick={() => {setTiresFromWarehouse(tiresCar.id); setSlot(tiresCar.slot_id)}} style={Choice}>
                        <td>{tiresCar.id}.</td>
                        <td>{tiresCar.brand}</td>
                        <td>{tiresCar.type}</td>
                        <td>{tiresCar.order_season}</td>
                      </tr>
                    )
                  } else{
                    return (
                      <tr key={tiresCar.id} onClick={() => setTiresToWarehouse(tiresCar.id)}>
                        <td>{tiresCar.id}.</td>
                        <td>{tiresCar.brand}</td>
                        <td>{tiresCar.type}</td>
                        <td></td>
                      </tr>
                    )
                  }
                }
                })}
              </tbody>
              </table>

              
          </div>
          <p>Poista renkaat <span style={ChoiceRemove}>NRO  {tiresFromWarehouse} </span> varastosta Paikkanumero: {slot}</p>
          <p>Lisää renkaat <span style={ChoiceRemove}> NRO {tiresToWarehouse} </span> varastoon paikalle </p>
        </div>
          </div>

          <div className='row'>
                <div className='col-12 d-flex justify-content-end '>
                <button className='btn' style={buttonStyle} onClick={()=>{setShowModalOldCustomer(false);}}>Peruuta</button>
                <button className='btn' style={buttonStyle}>Valitse valitut</button>
            </div>
            </div>
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
