import React, { useState } from "react";
import NewTires from "./newTires";
import Warehouse from "./warehouse";
import Car from '../images/3121893.png'
import { buttonStyle } from "../style/colors";
import { FaTrash } from 'react-icons/fa';

export default function Tires({ customerTires, setCustomerTires, car_id }) {

    function deleteTires(id) {
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
                <h5>Renkaiden tiedot</h5>
                <div className='col-3'>
                    <div>
                        <label>Rengaspaikka</label>
                        <input type="text" className="form-control" placeholder='1-3-55' disabled/>
                    </div>
                    <div>
                        <label>Rengasmerkki</label>
                        <input type="text" className="form-control" placeholder='Continental' />
                    </div>
                    <div className='mt-1'>
                        <label>Vannetyyppi</label>
                        <input type="text" className="form-control" placeholder='Alumiini/Teräs' />
                    </div>
                    <div className='mt-1'>
                        <label>Rengastyyppi</label>
                        <input type="text" className="form-control" placeholder='Kesä/Nasta/Kitka' />
                    </div>
                    <div className='mt-1'>
                        <label>Pölykapselit</label>
                        <input type="text" className="form-control" placeholder='Kyllä/Ei' />
                    </div>
                </div>

                <div className='col -2'>
                    <div>
                        <label>Säilytyskausi</label>
                        <input type="text" className="form-control" placeholder='Kesä/Talvi' />
                    </div>
                    <div className='mt-1'>
                        <label>Koko</label>
                        <input type="text" className="form-control" placeholder='Esim, 16' />
                    </div>
                    <div className='mt-1'>
                        <label>Korkeus</label>
                        <input type="text" className="form-control" placeholder='Esim. 55' />
                    </div>
                    <div className='mt-1'>
                        <label>Leveys</label>
                        <input type="text" className="form-control" placeholder='Esim. 205' />
                    </div>
                    <div className='mt-1'>
                        <label>Pultit</label>
                        <input type="text" className="form-control" placeholder='Määrä/rengas?' />
                    </div>

                </div>
                <div className='col-1'>
                    <div className='mt-1'>
                        <label>EV</label>
                        <input type="text" className="form-control" placeholder='3' />
                    </div>
                    <div className='mt-5'>
                        <label>TV</label>
                        <input type="text" className="form-control" placeholder='3' />
                    </div>
                </div>

                <div className='col-2 text-center'>
                    <label className='mb-3'>Urasyvyydet</label>
                    <div className='d-flex justify-content-center'>
                    <   img className='car' src={Car} alt='car' />
                    </div>
                </div>

                <div className='col-1'>
                    <div className='mt-1'>
                        <label>OE</label>
                        <input type="text" className="form-control" placeholder='3' />
                    </div>
                    <div className='mt-5'>
                        <label>OT</label>
                        <input type="text" className="form-control" placeholder='3' />
                    </div>
                </div>

                <div className='col-3'>
                    <label>Havaittu poikkeama</label>
                    <textarea className='form-control' rows="10" placeholder='tänne tulostuu poikkeamat?' />
                    <div className='d-flex justify-content-end mt-3'>
                        <button className='btn btn-primary' style={buttonStyle}>Tallenna</button>
                    </div>
                </div>

                <table  className="table px-3 table-striped">
                    <tbody>
                        {customerTires.map(tires => (
                            <tr key={tires.id} >
                                <td>{tires.car_register}</td>
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