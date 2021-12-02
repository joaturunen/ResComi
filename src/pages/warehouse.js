import React, { useState, useEffect } from 'react';
import { FaSquareFull } from 'react-icons/fa';
import { boxColorLayot, pieChartTaken, pieChartFree } from '../style/colors';

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
    getWarehouseData();
  }, []);


  useEffect(() => {
    async function getWarehouseShelfsData() {
      try {
        const response = await fetch(url + 'warehouse/warehouseShelf_read_all_data.php');
        const json = await response.json();
        if (response) {
          setShelfs(parseInt(json.all));
        } else {
          alert(json.error);
        }
      } catch (error) {
        alert(error);
      }
    }
    getWarehouseShelfsData();
  }, []);


  const PieChart = {
    'backgroundImage': 'conic-gradient(' + colorTaken + ' ' + degree + 'deg,' + colorFree + ' 0)'
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
              <button class='btn btn-primary' type='button'>
                Näytä hyllyt
              </button>
            </div>
          </div>
        </div>

        <div className='row' style={boxColorLayot}>

          <div className='row warehouse'>

            <div className='row'>
              <h3>Hyllylistaus</h3>
            </div>

            <div className='row mx-3'>
              <h5>Varasto 1</h5>
            </div>

            <div className='row mt-3 warehouse'>
              <table className="table px-3 table-striped text-center">
                <thead>
                  <tr>
                    <th scope="col">Hylly</th>
                    <th scope="col">Hyllypaikkoja</th>
                    <th scope="col">Tila</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>50</td>
                    <td style={PieChartTaken}>Täynnä</td>
                    <td><button class='btn btn-primary'>Näytä hylly</button></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>50</td>
                    <td style={PieChartFree}>Vapaita paikkoja</td>
                    <td><button class='btn btn-primary'>Näytä hylly</button></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

        <div className='row' style={boxColorLayot}>
      
          <div className='row warehouse'>
            <div className='row'>
              <h3>Hyllypaikat</h3>
            </div>
            <div className='mx-3'>
              <h5>Hylly 2</h5>
            </div>
            <div className='row mt-3 warehouse'>
              <table className="table px-3 table-striped text-center">
                <thead>
                  <tr>
                    <th scope="col">Hylly</th>
                    <th scope="col">Hyllypaikka</th>
                    <th scope="col">Tila</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">2</th>
                    <td>1</td>
                    <td style={PieChartTaken}>Varattu</td>
                    <td><button class='btn btn-primary'>Tiedot</button></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>2</td>
                    <td style={PieChartFree}>Vapaa</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}
