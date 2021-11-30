import React, { useState, useEffect } from 'react';
import {FaSquareFull } from 'react-icons/fa';
import {boxColorLayot, pieChartTaken, pieChartFree} from '../style/colors';

// tänne lista kaikista varastopaikoista lajiteltuna varastoittain

export default function Warehouse({url}) {
  const [warehouseAll, setWarehouseAll] = useState(0);
  const [warehouseTaken, setWarehouseTaken] = useState(0);
  const [warehouseFree, setWarehouseFree] = useState(0);
  const [degree, setDegree] = useState(0);
  const [colorTaken, setColorTaken] = useState(pieChartTaken);
  const [colorFree, setColorFree] = useState(pieChartFree);

  useEffect(() => {
    async function getWarehouseData() {
        try {
          const response = await fetch(url + 'warehouse/warehouse_amounts.php');
            const json = await response.json();
            if (response){
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
    <div class='row' style={boxColorLayot}>
      <div class='row'>
        <h1>Varastotilanne</h1>
      </div>
      <div className="row mt-5">
        <div className="row pie-back">
          <div className="col">
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
          <div className="col">
          <div className="row">
            <div className="col-2">
              <div id="warehouse-pie-chart" style={PieChart}></div>
            </div>
            <div className="col-3 pie-text">
              <p><FaSquareFull style={PieChartTaken}/>  Varattuna</p>
              <p><FaSquareFull style={PieChartFree}/>  Vapaana</p>

            </div>
            </div>
          </div>
        </div>
      </div>
      
    <div class='row mt-5 warehouse'>
      <div class='row'>
        <h2>Varastotilanne</h2>
      </div>
      <div class='row mt-3 text-center'>
       <div class='col-3'>
          <h5>Hylly</h5>
       </div>
       <div class='col-3 text-center'>
          <h5>Hyllypaikkoja</h5>
       </div>
       <div class='col-3 text-center'>
          <h5>Tila</h5>
       </div>
       <hr></hr>
      </div>
      
      <div class='row'>
        <div class='col-3 text-center'>
            <p>1</p>
        </div>
        <div class='col-3 text-center'>
            <p>50</p>
        </div>
        <div class='col-3 text-center'>
            <p style={PieChartFree}>Vapaita paikkoja</p>
        </div>
        <div class='col-3 text-center pb-3'>
            <button class='btn btn-primary'>LISTAUS</button>
        </div>
        <hr></hr>
      </div>

      <div class='row'>
        <div class='col-3 text-center'>
            <p>2</p>
        </div>
        <div class='col-3 text-center'>
            <p>50</p>
        </div>
        <div class='col-3 text-center'>
            <p style={PieChartTaken}>Täynnä</p>
        </div>
        <div class='col-3 text-center pb-3'>
            <button class='btn btn-primary'>LISTAUS</button>
        </div>
        <hr></hr>
      </div>
    </div>
    </div>
    </>
  );
}
