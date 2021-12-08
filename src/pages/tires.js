import React, { useState } from "react";
import NewTires from "./newTires";
import Warehouse from "./warehouse";
import Car from '../images/3121893.png'

export default function Tires({ customerTires, setCustomerTires, car_id }) {

    return (
        <div>
            <div className='row'>
                <h5>Renkaiden tiedot</h5>
                <div className='col'>
                    <div>
                        <label>Asiakkuus luotu</label>
                        <p>rengaspaikan tunnus</p>
                    </div>
                    <div>
                        <label>Rengasmerkki</label>
                        <input type="text" className="form-control" placeholder='Continental' />
                    </div>
                    <div>
                        <div class="dropdown mt-1">
                            <label>Rengasmerkki</label>
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div>
                        <label>Asiakkuus luotu</label>
                        <p>rengaspaikan tunnus</p>
                    </div>
                    <div>
                        <label>Rengasmerkki</label>
                        <input type="text" className="form-control" placeholder='Continental' />
                    </div>
                </div>
                <div className='col'>
                    <div>
                        <label>Asiakkuus luotu</label>
                        <p>rengaspaikan tunnus</p>
                    </div>
                    <div>
                        <label>Rengasmerkki</label>
                        <input type="text" className="form-control" placeholder='Continental' />
                    </div>
                </div>
                <div className='col-2'>
                    <div>
                        <img className='car' src={Car} alt='car'/>
                    </div>
                </div>

                <div className='col'>
                    <div>
                        <label>Asiakkuus luotu</label>
                        <p>rengaspaikan tunnus</p>
                    </div>
                    <div>
                        <label>Rengasmerkki</label>
                        <input type="text" className="form-control" placeholder='Continental' />
                    </div>
                </div>

                <div className='col'>
                    <div>
                        <label>Asiakkuus luotu</label>
                        <p>rengaspaikan tunnus</p>
                    </div>
                    <div>
                        <label>Rengasmerkki</label>
                        <input type="text" className="form-control" placeholder='Continental' />
                    </div>
                </div>

                {/* <table  className="table px-3 table-striped">
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
                            </tr>
                        ))}
                    </tbody>
                </table> */}
            </div>
            <div>
                <NewTires setCustomerTires={setCustomerTires} car_id={car_id} />
            </div>

        </div>
    )

}