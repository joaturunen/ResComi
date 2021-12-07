import React, { useState, useEffect } from 'react';
import { FaSquareFull, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { boxColorLayot, pieChartTaken, pieChartFree, buttonStyle } from '../style/colors';
import { Navigate } from 'react-router-dom';

// tänne lista kaikista varastopaikoista lajiteltuna varastoittain

export default function ShelfSlots({ url, setCurrentShelfID, currentShelfID = 1, shelfsIds}) {
  const [slots, setSlots] = useState([]);
  const [currentShelf, setCurrentShelf] = useState(currentShelfID);
  const [showOtherShelf, setShowOtherShelf] = useState(false);
  const [previosShelf, setPreviousShelf] = useState(0);
  const [nextShelf, setNextShelf] = useState(0);
  const [shelfIdsArray, setShelfsIdsArray] = useState([shelfsIds]);

  useEffect(() => {
    console.log("Läpi tuleva arvo: " + currentShelfID + " " + url);
    const data = { id: currentShelf };
    console.log(data);
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
            if (status === 200) {
              setSlots(res);
              console.log(slots);
              //setCurrentShelf(slots[0].shelf_id);
              checkShelfIds();
            } else {
            alert(res.error);
            }

        }, (error) => {
            alert(error);
        }
    );

}, [currentShelfID]);

function checkShelfIds(){
  console.log("tulosteet: " + shelfIdsArray[0].length);
  for(let i = 0; i < shelfIdsArray[0].length; i++){
    console.log("ai " + i);
    console.log(shelfIdsArray[0][i].id)
    console.log(currentShelf)
    if(shelfIdsArray[0][i].id === currentShelf){
      console.log("löytyi");
      if(i !== 0){
        let previous = i - 1;
        setPreviousShelf(shelfIdsArray[0][previous].id);
        console.log("edellinen luotu");
      } else{
        setPreviousShelf(0);
      }
      let next = i + 1;
      if(next !== shelfIdsArray[0].length){
        setNextShelf(shelfIdsArray[0][next].id);
        console.log("Seuraava luotu");
      } else{
        setNextShelf(0);
      }
      break;
    }
  }

}

function openShelfSite(shelf) {
  setCurrentShelfID(shelf);
  console.log("nappia painettu ");
  window.location.reload();
}

  return (
    <>
        <div className='row'>
        <div className='row mt-3'>
            <h3>Hyllypaikat</h3>
          </div>
          <div className='row mx-3 my-3'>
            <div className='col'>
            {(previosShelf == 0) ? (<p class='full'>Edellistä ei ole olemassa</p>) : (<button className='btn btn-primary' style={buttonStyle} onClick={() => openShelfSite(previosShelf)}> <FaArrowLeft /> Edellinen hylly</button>)}
            </div>
            <div className='col'><h5>Hylly {currentShelf}</h5></div>
            <div className='col'>
            {(nextShelf == 0) ? (<p class='full'>Seuraavaa ei ole olemassa</p>) : (<button className='btn btn-primary' style={buttonStyle} onClick={() => openShelfSite(nextShelf)}>Seuraava hylly <FaArrowRight />  </button>)}
            </div>
            
          </div>
            <table className="table px-3 table-striped">
            <thead>
                  <tr>
                    <th scope="col">Rengaspaikka</th>
                    <th scope="col">Tila</th>
                    <th scope="col">Tila</th>
                    <th scope="col">Tila</th>
                    <th scope="col">Tila</th>
                    <th scope="col">Tila</th>
                    
                    <th scope="col"></th>
                  </tr>
                </thead>
              <tbody>
                {slots.map(slot => (
                  <tr key={slot.slot_id} >
                    <td>{slot.warehouse_id}-{slot.shelf_id}-<strong>{slot.slot_id}</strong></td>
                    <td>{(slot.tires_id !== null) ? (<p class='full'>Varattu</p>) : (<p class='free'>Vapaa</p>)}</td>
                  </tr>
                ))}
            </tbody>
            </table>
        </div>
    </>
  );
}
