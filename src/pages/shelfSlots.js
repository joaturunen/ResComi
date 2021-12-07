import React, { useState, useEffect } from 'react';
import { FaSquareFull, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { boxColorLayot, pieChartTaken, pieChartFree, buttonStyle } from '../style/colors';

// tänne lista kaikista varastopaikoista lajiteltuna varastoittain

export default function ShelfSlots({ url, shelf_id}) {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    console.log("Läpi tuleva arvo: " + shelf_id + url);
    const data = { id: shelf_id };
    let address = url + 'warehouse/shelfs/warehouseShelf_read_slots.php';
    let status = 0;
    fetch(address, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        status = parseInt(res.status);
        return res.json();
    })
    .then(
        (res) => {
          console.log("Data tulee");
            if (status === 200) {
              setSlots([]);
              console.log("Data tulee");
              console.log(res);
            } else {
            alert(res.error);
            console.log(shelf_id);
            }
        }, (error) => {
          console.log("SUuri virhe " + shelf_id);
            alert(error);
        }
    );

}, [shelf_id]);


  return (
    <>
        <div className='row'>
        <div className='row mt-3'>
            <h3>Hyllypaikat</h3>
          </div>
          <div className='row mx-3 my-3'>
            <div className='col'><FaArrowLeft /> Edellinen hylly</div>
            <div className='col'><h5>Hylly 2</h5></div>
            <div className='col'>Seuraava hylly <FaArrowRight /></div>
            
          </div>
            <table className="table px-3 table-striped">
            <thead>
                  <tr>
                    <th scope="col">Hyllypaikka</th>
                    <th scope="col">Rengas paikkoja</th>
                    <th scope="col">Tila</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
              <tbody>
                {slots.map(slot => (
                  <tr key={slot.slot_id} >
                    <td>{slot.slot_id}</td>
                  </tr>
                ))}
            </tbody>
            </table>
        </div>
    </>
  );
}
