import React, { useState, useEffect } from 'react';


// tänne lista kaikista varastopaikoista lajiteltuna varastoittain

export default function Warehouse({url}) {
  const [warehouseAll, setWarehouseAll] = useState("0");
  const [warehouseTaken, setWarehouseTaken] = useState("0");
  const [warehouseFree, setWarehouseFree] = useState("0");

  useEffect(() => {
    async function getWarehouseData() {
        try {
          const response = await fetch(url + 'warehouse/warehouse_amounts.php');
            const json = await response.json();
            if (response){
              setWarehouseAll(json.all);
              setWarehouseTaken(json.taken);
              setWarehouseFree(json.free);
            } else {
                alert(json.error);
            }
        } catch (error) {
            alert(error);
        }
    }
    getWarehouseData();
}, []);


  return (
    <>
      <h1>Varastotilanne</h1>
      <div>
        <p>Kaikki paikat: {warehouseAll}</p>
        <p>Varattu: {warehouseTaken}</p>
        <p>Vapaana: {warehouseFree}</p>
        <div id="warehouse-pie-chart" style={{'background-image': "conic-gradient(pink 70deg, lightblue 0 235deg, orange 0)"}}></div>
      </div>
    </>
  );
}
