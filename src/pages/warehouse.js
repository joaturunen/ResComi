import React, { useState, useEffect } from 'react';
import { FaSquareFull } from 'react-icons/fa';
import { boxColorLayot, pieChartTaken, pieChartFree, buttonStyle } from '../style/colors';

// tänne lista kaikista varastopaikoista lajiteltuna varastoittain

export default function Warehouse({ url }) {
  const [warehouseAll, setWarehouseAll] = useState(0);
  const [warehouseTaken, setWarehouseTaken] = useState(0);
  const [warehouseFree, setWarehouseFree] = useState(0);
  const [degree, setDegree] = useState(0);
  const [colorTaken, setColorTaken] = useState(pieChartTaken);
  const [colorFree, setColorFree] = useState(pieChartFree);
  const [shelfs, setShelfs] = useState([]);


  useEffect(() => {
    async function getWarehouseData() {
      try {
        const response = await fetch(url + 'warehouse/warehouse_amounts.php');
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
        const response = await fetch(url + 'warehouse/shelfs/warehouseShelf_read_all_data.php');
        const json = await response.json();
        if (response) {
          setShelfs(Array.from(json));
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

  return (
    <>
      <div className='row'>
        <div className="row" style={boxColorLayot}>
        <h2>Varastotilanne</h2>
          <div className="row pie-back">
            <div className="col-5">
              <div className="text-center">
                <h5>Paikkoja yhteensä</h5>
                <h5 className="text-muted">{warehouseAll}</h5>
              </div>
              <div className="row">
                <div className="col text-center">
                  <h5>Varattuna</h5>
                  <h5 className="text-muted">{warehouseTaken}</h5>
                </div>
                <div className="col text-center">
                  <h5>Vapaana</h5>
                  <h5 className="text-muted">{warehouseFree}</h5>
                </div>
              </div>
            </div>
            <div className="col-4 d-flex flex-row">
              <div id="warehouse-pie-chart" style={PieChart} className="align-self-start"></div>
              <div className="align-self-center" style={{marginLeft: '1rem',}}>
                <p><FaSquareFull style={PieChartTaken} />  Varattuna</p>
                <p><FaSquareFull style={PieChartFree} />  Vapaana</p>
              </div>
            </div>
            <div className="col align-self-end">
              <button class='btn btn-primary' style={buttonStyle} type='button'>
                Näytä hyllyt
              </button>
            </div>
          </div>
        </div>

        <div className='row'>
            <table className="table px-3 table-striped">
            <thead>
                  <tr>
                    <th scope="col">Hyllypaikka</th>
                    <th scope="col">Renkaat</th>
                    <th scope="col">Tila</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
              <tbody>
                {shelfs.map(shelf => (
                  <tr key={shelf.id} >
                    <td>{shelf.id}</td>
                    <td>{shelf.amount}</td>
                    <td>{(shelf.free == 0) ? (<p style={PieChartTaken}>Täynnä</p>) : (<p style={PieChartFree}>Vapaana {shelf.free}</p>)}</td>
                  </tr>
                ))}
            </tbody>
            </table>
        </div>

    </div>
    </>
  );
}
