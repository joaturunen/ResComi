import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight,  FaCircle } from 'react-icons/fa';
import { buttonStyle, free, full } from '../style/colors';
import { Navigate } from 'react-router-dom';
import Loading from '../components/loading';
import {URL} from '../back/Config';

// list of all slots sorted by shelf

export default function ShelfSlots({ currentShelfID = 1, setCustomer_id}) {
  const [slots, setSlots] = useState([]);
  const [currentShelf, setCurrentShelf] = useState([currentShelfID]);
  const [previosShelf, setPreviousShelf] = useState(0);
  const [nextShelf, setNextShelf] = useState(0);
  const [isLoading, setIsloading] = useState(false);
  const [showWarehouse, setShowWarehouse] = useState(false);
  const [showCustomerSite, setShowCustomerSite] = useState(false);


  // retrieves all shelfs and slots
  useEffect(() => {
    let status = 0;
    let address = URL + 'warehouse/shelfs/warehouseShelf_read_shelfs_slots.php';
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

// open shelf page
function openShelfSite(shelf) {
  const newShelf = shelf;
  // setIsloading(true);
  setCurrentShelf([]);
  setCurrentShelf([newShelf]);
}

if (showWarehouse === true) {
  return (
    <Navigate to="/warehouse" />
  );
}

// open customer info page
function openCustomerSite(slot) {
  setCustomer_id(slot.customer_id);
  setShowCustomerSite(true);
}

if (showCustomerSite === true) {
  return (
    <Navigate to="/oneCustomer" />

  );
}

const shelfPage =
<>
<h3>Hylly {currentShelf}</h3>
<div class="d-flex justify-content-between">
  <div class="p-2">{(previosShelf === 0) ? (<button className='forceW forceD' disabled>  </button>) : (<button className='btn forceW' style={buttonStyle} onClick={() => openShelfSite(previosShelf)}> <FaArrowLeft /> Edellinen hylly {previosShelf}</button>)}</div>
  <div class="p-2"><button className='btn' style={buttonStyle} onClick={() => setShowWarehouse(true)}>Näytä koko varasto</button></div>
  <div class="p-2">{(nextShelf === 0) ? (<button className='forceW forceD' disabled>  </button>) : (<button className='btn forceW' style={buttonStyle} onClick={() => openShelfSite(nextShelf)}>Seuraava hylly {nextShelf} <FaArrowRight />  </button>)}</div>
</div>

      <table className="table px-3 table-striped">
      <thead>
            <tr>
              <th scope="col">Rengaspaikka</th>
              <th scope="col">Tila</th>
              <th scope="col">Rengas ID</th>
              <th scope="col">Varattu kausi</th>
              <th scope="col">Rengas tyyppi</th>
              <th scope="col">Merkki</th>
              <th scope="col">Huollon kirjoituksia</th>
              <th scope="col">Tilauksen tiedot</th>
            </tr>
          </thead>
        <tbody className="warehouseDataHeight">
          {slots.map(slot => (
            <tr key={slot.slot_id} >
              <td>{slot.warehouse_id}-{slot.shelf_id}-<strong>{slot.slot_id}</strong></td>
              <td>{(slot.tires_id !== null) ? (<p><FaCircle style={full}/></p>) : (<p><FaCircle style={free}/></p>)}</td>
              <td>{(slot.tires_id !== null) ? (<p>{slot.tires_id}</p>) : (<p>-</p>)}</td>
              <td>{(slot.tires_id !== null) ? (<p>{slot.season}</p>) : (<p>-</p>)}</td>
              <td>{(slot.tires_id !== null) ? (<p>{slot.tires_type}</p>) : (<p>-</p>)}</td>
              <td>{(slot.tires_id !== null) ? (<p>{slot.tires_brand}</p>) : (<p>-</p>)}</td>
              <td>{(slot.tires_id !== null) ? (<p>{slot.tires_text}</p>) : (<p>-</p>)}</td>
              <td class="text-end">{(slot.tires_id !== null) ? (<button className='btn' style={buttonStyle} onClick={() => openCustomerSite(slot)}>Näytä lisää</button>) : (<p></p>)}</td>

            </tr>
          ))}
      </tbody>
      </table>
      </>
;

  return (
    <>
    {(isLoading) ? (<Loading/>) : (shelfPage)}
    </>
  );
}
