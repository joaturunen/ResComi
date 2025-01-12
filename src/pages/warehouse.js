import React, { useState, useEffect } from 'react';
import { FaSquareFull, FaCircle } from 'react-icons/fa';
import { boxColorLayot, pieChartTaken, pieChartFree, buttonStyle, free, full } from '../style/colors';
import { Navigate } from 'react-router-dom';
import Loading from '../components/loading';
import {URL} from '../back/Config';

// list of all shelfs sorted by warehouse

export default function Warehouse({setCurrentShelfID}) {
  const [warehouseAll, setWarehouseAll] = useState(0);
  const [warehouseTaken, setWarehouseTaken] = useState(0);
  const [warehouseFree, setWarehouseFree] = useState(0);
  const [degree, setDegree] = useState(0);
  const [colorTaken/*, setColorTaken */] = useState(pieChartTaken);
  const [colorFree/* , setColorFree */] = useState(pieChartFree);
  const [shelfs, setShelfs] = useState([]);
  const [showShelfSite, setShowShelfSite] = useState(false);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    async function getWarehouseData() {
      try {
        const response = await fetch(URL + 'warehouse/warehouse_amounts.php');
        const json = await response.json();
        if (response) {
          setWarehouseAll(parseInt(json.all));
          setWarehouseTaken(parseInt(json.taken));
          setWarehouseFree(parseInt(json.free));
          setDegree(parseInt(json.degree));
        } else {
          alert(json.error);
        }
      } catch (error) {
        alert(error);
      }
    }
    async function getWarehouseShelfsData() {
      try {
        const response = await fetch(URL + 'warehouse/shelfs/warehouseShelf_read_all_data.php');
        const json = await response.json();
        if (response) {
          setShelfs(Array.from(json));
          setIsloading(false);
        } else {
          alert(json.error);
        }
      } catch (error) {
        alert(error);
      }
    }
    getWarehouseShelfsData();
    getWarehouseData();
  }, []);

  const PieChart = {
    'background-image': 'conic-gradient(' + colorTaken + ' ' + degree + 'deg,' + colorFree + ' 0)'
  }

  const PieChartTaken = {
    'color': colorTaken
  }

  const PieChartFree = {
    'color': colorFree
  }

  function openShelfSite(shelf) {
    setCurrentShelfID(shelf.id);
    setShowShelfSite(true);
  }
  
  if (showShelfSite === true) {
    return (
      <Navigate to="/shelfSlots" />
    );
  }

  const warehousePage =
    <>
      <table className="table text-center table-striped">
        <thead>
          <tr>
                <th scope="col">Hylly</th>
                <th scope="col">Rengas paikkoja</th>
                <th scope="col">Tila</th>
                <th scope="col"></th>
              </tr>
            </thead>
        <tbody>
              {shelfs.map(shelf => (
                <tr key={shelf.id} >
                  <td>{shelf.id}</td>
                  <td>{shelf.amount}</td>
                  <td>{(shelf.free === 0) ? (<p><FaCircle style={full}/>Täynnä</p>) : (<p><FaCircle style={free}/><strong>{shelf.free}</strong> vapaata paikkaa</p>)}</td>
                  <td>
                  <button className='btn' style={buttonStyle} onClick={() => openShelfSite(shelf)}>Näytä hylly {shelf.id}</button>
                  </td>
                </tr>
              ))}
            </tbody>
      </table>
    </>;
    
  return (
    <>
    <h3>Varastotilanne - Varasto 1</h3>
      <div>
          <div class="d-inline-flex p-2" style={boxColorLayot}>
          <div class="p-2 align-self-stretch">
          </div>
            <div class="p-2 align-self-center">
              <div className="text-center">
                <h6>Paikkoja yhteensä</h6>
                <h6 className="text-muted">{warehouseAll}</h6>
              </div>
            </div>
            <div class="p-2 align-self-center">
            <div className="text-center">
                <h6>Varattuna</h6>
                <h6 className="text-muted">{warehouseTaken}</h6>
              </div>
            </div>
            <div class="p-2 align-self-center">
              <div className="text-center">
                <h6>Vapaana</h6>
                <h6 className="text-muted">{warehouseFree}</h6>
              </div>
            </div>
            <div class="p-2"><div id="warehouse-pie-chart" style={PieChart} ></div></div>
            <div class="p-2 align-self-center">
              <div style={{marginLeft: '1rem',}}>
                <p><FaSquareFull style={PieChartTaken} />  Varattuna</p>
                <p><FaSquareFull style={PieChartFree} />  Vapaana</p>
              </div>
            </div>
        </div>
        {(isLoading) ? (<Loading/>) : (warehousePage)}
    </div>
    </>
  );
}
