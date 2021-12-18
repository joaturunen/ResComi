import React,{useState, useEffect} from 'react';
import { buttonStyle, Customerdata } from '../style/colors';
import '../style/modal.css';
import {URL} from '../back/Config';

export default function ComponentOrderCar({customerData}) {
  const [register, setRegister] = useState('');
  const [tiresId, setTiresId] = useState('');
  const [carId, setCarId] = useState('');
  const [oldTires_id, setOldTires_id] = useState('');
  const [slotId, setSlotId] = useState('');

  useEffect(() => {
    if(customerData[0]){
      setRegister(customerData[0].car_register);
      setTiresId(customerData[0].tires_id);
      setCarId(customerData[0].car_id);
      setOldTires_id(customerData[0].oldTires_id);
      setSlotId(customerData[0].slot_id);
    }
  }, [customerData]);


  const content2 =
  <>
  <h5>Varasto vaihto</h5>
    <div style={Customerdata} className='d-flex flex-row'>
    <div className='p-2'>
      <p><strong>REK-NRO: {register}</strong></p>
      
      <p>Uudet rengas-nro: <strong>{tiresId}</strong></p>
      <p>Vanhat rengas-nro: <strong>{oldTires_id}</strong></p>
      <p>Paikka-nro: <strong>{slotId}</strong></p>
    </div>
    <div className='p-2 ml-auto align-self-end'>
      <button class='btn' style={buttonStyle}>Muokkaa</button>
    </div>
  </div>
  </>;

  const content =
  <>
  <h5>Valittu ajoneuvo ja renkaat</h5>
    <div style={Customerdata} className='d-flex flex-row'>
    <div className='p-2'>
      <p><strong>REK-NRO: {register}</strong></p>
      <p>Rengas-nro: <strong>{tiresId}</strong></p>
    </div>
    <div className='p-2 ml-auto align-self-end'>
      <button class='btn' style={buttonStyle}>Muokkaa</button>
    </div>
  </div>
  </>;

  const newOrOld =
  <>
  { (oldTires_id !== 0) ? (content2) : (content)}
  </>

  return (
      <>
      <div>
        { (customerData[0] == null) ? (
        <div class="alert alert-warning" role="alert">
          Ajoneuvoa ja renkaita ei ole valittu
        </div>) : (newOrOld)}
      </div>
      </>
    
  );
}
