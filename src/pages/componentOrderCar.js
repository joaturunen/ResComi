import React,{useState, useEffect} from 'react';
import { buttonStyle, Customerdata } from '../style/colors';
import '../style/modal.css';

export default function ComponentOrderCar({customerData}) {
  const [register, setRegister] = useState('');
  const [tiresId, setTiresId] = useState('');
  const [carId, setCarId] = useState('');

  useEffect(() => {
    console.log("Data on täällä nyt: " + customerData);
    if(customerData[0]){
      setRegister(customerData[0].car_register);
      setTiresId(customerData[0].tires_id);
      setCarId(customerData[0].car_id);
    }
  }, [customerData]);

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

  return (
      <>
      <div>
        { (customerData[0] == null) ? (
        <div class="alert alert-warning" role="alert">
          Ajoneuvoa ja renkaita ei ole valittu
        </div>) : (<p>{content}</p>)}
      </div>
      </>
    
  );
}
