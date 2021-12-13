import React, { useState } from "react";
import NewTires from "./newTires";
import Warehouse from "./warehouse";
import Car from '../images/3121893.png';
import { buttonStyle } from "../style/colors";
import { FaTrash } from 'react-icons/fa';

export default function Tires({ customerTires, setCustomerTires, car_id }) {

    function deleteTires(id) {
        console.log(car_id);
        let status = 0;
        fetch('http://localhost/rengasvarasto-back/API/tires/tires_delete.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id
            })
        })
        .then(res => {
            status = parseInt(res.status);
            return res.json();
        })
        .then(
            (res) => {
                if (status === 200) {
                    const newListWithoutRemoved = customerTires.filter((tires) => tires.id !== id);
                    setCustomerTires(newListWithoutRemoved);
                  } else {
                    alert(res.error);
                  }
            }, (error) => {
                alert(error);
            }
        );
    }

    return (
        <div>
            <div className='row'>
                <table  className="table px-3 table-striped">
                    <tbody>
                        {customerTires.map(tires => (
                            <tr key={tires.id} >
                                <td>{tires.id}</td>
                                <td>{tires.car_register}</td>
                                <td>{tires.car_id}</td>
                                <td>{tires.brand}</td>
                                <td>{tires.model}</td>
                                <td>{tires.type}</td>
                                <td>{tires.hubcups}</td>
                                <td>{tires.groovefl}</td>
                                <td>{tires.groovefr}</td>
                                <td>{tires.groovebl}</td>
                                <td>{tires.groovebr}</td>
                                <td>{tires.tiresize}</td>
                                <td>{tires.tirebolt}</td>
                                <td>{tires.text}</td>
                                <td>{tires.rims}</td>
                                <td>{tires.info}</td>
                                <td>{tires.slot_id}-{tires.shelf_id}-{tires.warehouse_id}</td>
                                <td><FaTrash onClick={() => deleteTires(tires.id)}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <NewTires setCustomerTires={setCustomerTires} car_id={car_id} />
            </div>

        </div>
    )

}