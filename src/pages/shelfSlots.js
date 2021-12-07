import React, { useState, useEffect } from 'react';
import { FaSquareFull, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { boxColorLayot, pieChartTaken, pieChartFree, buttonStyle } from '../style/colors';
import { Navigate } from 'react-router-dom';

// tänne lista kaikista varastopaikoista lajiteltuna varastoittain

export default function ShelfSlots({ url, currentShelfID = 1, setCurrentShelfID}) {
  const [slots, setSlots] = useState([]);
  const [currentShelf, setCurrentShelf] = useState([currentShelfID]);
  const [showOtherShelf, setShowOtherShelf] = useState(false);
  const [previosShelf, setPreviousShelf] = useState(0);
  const [nextShelf, setNextShelf] = useState(0);
  const [shelfIdsArray, setShelfsIdsArray] = useState([]);

  useEffect(() => {
    console.log("Läpi tuleva arvo: " + currentShelfID + " " + url);
    console.log(currentShelf);
    let status = 0;
    let address = url + 'warehouse/shelfs/warehouseShelf_read_slots.php';
    fetch(address, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: currentShelf[0]})
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
            } else {
            alert(res.error);
            }

        }, (error) => {
            alert(error);
        }
    );
    async function getWarehouseShelfsArray() {
      try {
        const response = await fetch(url + 'warehouse/shelfs/warehouseShelf_read_shelfs.php');
        const json = await response.json();
        if (response) {
          console.log("Hyllyrivit " + json);
          setShelfsIdsArray(json);
          checkShelfIds();
        } else {
          alert(json.error);
        }
      } catch (error) {
        alert(error);
      }
    }
    getWarehouseShelfsArray();
}, [currentShelf]);

function checkShelfIds(){
  console.log("tulosteet: " + shelfIdsArray[1].id);
  for(let i = 0; i < shelfIdsArray.length; i++){
    console.log("Nykyinen " + currentShelf + " " + shelfIdsArray[i].id)
    if(shelfIdsArray[i].id === currentShelf[0]){
      console.log("löytyi");
      if(i !== 0){
        let previous = i - 1;
        setPreviousShelf(shelfIdsArray[previous].id);
        console.log("edellinen luotu");
      } else{
        setPreviousShelf(0);
      }
      let next = i + 1;
      if(next !== shelfIdsArray.length){
        setNextShelf(shelfIdsArray[next].id);
        console.log("Seuraava luotu");
      } else{
        setNextShelf(0);
      }
      break;
    }
  }

}

function openShelfSite(shelf) {
  console.log("nappia painettu ");
  const newShelf = shelf;
  setCurrentShelf([]);
  setCurrentShelf([newShelf]);
  // setCurrentShelfID();useState([currentShelfID]);

  //setShowOtherShelf(true);
}

if (showOtherShelf === true) {
  return (
    <Navigate to="/shelfSlots" />
  );
}

  return (
    <>
        <div className='row'>
        <div className='row mt-3'>
            <h3>Hyllypaikat</h3>
          </div>
          <div className='row mx-3 my-3'>
            <div className='col'>
            {(previosShelf == 0) ? ("") : (<button className='btn btn-primary' style={buttonStyle} onClick={() => openShelfSite(previosShelf)}> <FaArrowLeft /> Edellinen hylly</button>)}
            </div>
            <div className='col'><h5>Hylly {currentShelf}</h5></div>
            <div className='col'>
            {(nextShelf == 0) ? ("") : (<button className='btn btn-primary' style={buttonStyle} onClick={() => openShelfSite(nextShelf)}>Seuraava hylly <FaArrowRight />  </button>)}
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
