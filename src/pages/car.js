import React , {useEffect, useState } from 'react';

// tämä avautuu hakutuloksesta, ei näy navissa

export default function Car({ car}) {

  
//   const [register, setRegister] = useState('');
//   const [brand, setBrand] = useState('');
//   const [model, setModel] = useState('');
//   const [customer_id, setCustomer_id] = useState('');


  // haetaan tietokannasta yhden auton tiedot
//   useEffect(() => {

//     async function getSingleCar() {
//       let address = '';

//       address = url + 'car/car_read_single.php?id=' + carId;
    
//       try {
//         const response = await fetch(address); 
//         const json = await response.json();
//         if (response.ok) {
//             setRegister(json.register);
//             setBrand(json.brand);
//             setModel(json.model);
//             setCustomer_id(json.customer_id);
//         } else {
//           alert(json.error);
//         }
//       } catch (error) {
//         alert(error);
//       }
//     }
    
//     getSingleCar();

//   }, [url, carId]);

  return (
    <div>
      <h4>Auton tiedot</h4>
      <p>{car.register}</p>
      <p>{car.brand}</p>
      <p>{car.model}</p>
      <p>{car.customer_id}</p> {/** tämä ei saa näkyä lopullisessa versiossa */}
    </div>
  );
}
