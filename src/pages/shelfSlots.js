import React, { useState, useEffect } from 'react';
import { FaSquareFull, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { boxColorLayot, pieChartTaken, pieChartFree, buttonStyle } from '../style/colors';
import { Navigate } from 'react-router-dom';
import Loading from '../components/loading';

// tänne lista kaikista varastopaikoista lajiteltuna varastoittain

export default function ShelfSlots({ url, currentShelfID = 1}) {
  const [slots, setSlots] = useState([]);
  const [currentShelf, setCurrentShelf] = useState([currentShelfID]);
  const [previosShelf, setPreviousShelf] = useState(0);
  const [nextShelf, setNextShelf] = useState(0);
  const [isLoading, setIsloading] = useState(false);


  useEffect(() => {
    let status = 0;
    console.log("Nykyinen hylly " +  currentShelf)
    if(currentShelf[0] === 0){
      setCurrentShelf([1]);
    };
    let address = url + 'warehouse/shelfs/warehouseShelf_read_shelfs_slots.php';
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
              setSlots(res.slots);
              setPreviousShelf(res.previous);
              setNextShelf(res.next);
              setIsloading(false);
            } else {
            alert(res.error);
            }
        }, (error) => {
            alert(error);
        }
    );
}, [currentShelf]);


function openShelfSite(shelf) {
  const newShelf = shelf;
  // setIsloading(true);
  setCurrentShelf([]);
  setCurrentShelf([newShelf]);
}

const shelfPage =
  <div className='row'>
  <div className='row'>
      <h3>Hyllypaikat</h3>
    </div>
    <div className='row'>
      <div className='col'>
      {(previosShelf == 0) ? ("") : (<button className='btn' style={buttonStyle} onClick={() => openShelfSite(previosShelf)}> <FaArrowLeft /> Edellinen hylly {previosShelf}</button>)}
      </div>
      <div className='col'><h5>Hylly {currentShelf}</h5></div>
      <div className='col'>
      {(nextShelf == 0) ? ("") : (<button className='btn' style={buttonStyle} onClick={() => openShelfSite(nextShelf)}>Seuraava hylly {nextShelf} <FaArrowRight />  </button>)}
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
  </div>;





  return (
    <>
    {(isLoading) ? (<Loading/>) : (shelfPage)}
    </>
  );
}
