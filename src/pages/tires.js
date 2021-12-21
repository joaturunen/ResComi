import React, { useState, useEffect } from "react";
import NewTires from "./modalNewTires";
import Car from '../images/3121893.png';
import { buttonStyle, free, full } from "../style/colors";
import { FaTrash, FaCircle  } from 'react-icons/fa';
import UpdateTires from "./updateTires";
import {URL} from '../back/Config';

// print single car tires

export default function Tires({car_id, car_register}) {
    const [carTires, setCarTires] = useState([]);

    // retrieve tires by car
    useEffect(() => {
        let status = 0;
        fetch(URL +'tires/tires_read_by_car.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                car_id: car_id
            })
        })
        .then(res => {
            status = parseInt(res.status);
            return res.json();
        })
        .then(
            (res) => {
                if (status === 200) {
                    setCarTires(res.tires);
                  } else {
                    alert(res.error);
                  }
            }, (error) => {
                alert(error);
            }
        );
            
    }, [car_id]);

    // remove tires
    function deleteTires(id) {
        let status = 0;
        fetch( URL +'tires/tires_delete.php', {
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
                    const newListWithoutRemoved = carTires.filter((tires) => tires.id !== id);
                    setCarTires(newListWithoutRemoved);
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
            {carTires.map(tire => (
                <div key={tire.id} className="row tiresComponent">
                    
                    <div className='col-md-3'>
                        <div>
                            <label>Rengaspaikka</label>

                            {(tire.slot_id === null) ? (<p><FaCircle style={free}/> ei varastossa</p>) : (<p><FaCircle style={full}/>{tire.warehouse_id}-{tire.shelf_id}-{tire.slot_id}</p>)}
                        </div>
                        <div>
                            <label>Rengasmerkki</label>
                            <input type="text" className="form-control" value={tire.brand} />
                        </div>
                        <div>
                            <label>Malli</label>
                            <input type="text" className="form-control" value={tire.model} />
                        </div>
                        <div className='mt-1'>
                            <label>Rengastyyppi</label>
                            <input type="text" className="form-control" value={tire.type} />
                        </div>
                        <div className='mt-1'>
                            <label>Koko</label>
                            <input type="text" className="form-control" value={tire.tiresize} />
                        </div>
                        
                    </div>

                    <div className='col-md-3'>
                        <div className='mt-1'>
                            <label>Auton rekisteri</label>
                            <input type="text" className="form-control" value={tire.car_register} />
                        </div>
                        <div className='mt-1'>
                            <label>Vannetyyppi</label>
                            <input type="text" className="form-control" value={tire.rims} />
                        </div>
                        
                        <div className='mt-1'>
                            <label>Pölykapselit</label>
                            <input type="text" className="form-control" value={tire.hubcups} />
                        </div>
                        <div className='mt-1'>
                            <label>Pultit</label>
                            <input type="text" className="form-control" value={tire.tirebolt}/>
                        </div>

                    </div>
                        <div className='col-md-2'>
                            <div className='mt-1'>
                                <label>EV</label>
                                <input type="text" className="form-control" value={tire.groovefl} />
                            </div>
                            <div className='mt-5'>
                                <label>TV</label>
                                <input type="text" className="form-control" value={tire.groovebl} />
                            </div>
                        </div>

                        <div className='col-md-2 text-center'>
                            <label className='mb-3'>Urasyvyydet</label>
                            <div className='d-flex justify-content-center'>
                            <   img className='car' src={Car} alt='car' />
                            </div>
                        </div>

                        <div className='col-md-2'>
                            <div className='mt-1'>
                                <label>OE</label>
                                <input type="text" className="form-control" value={tire.groovefr} />
                            </div>
                            <div className='mt-5'>
                                <label>OT</label>
                                <input type="text" className="form-control" value={tire.groovebr} />
                            </div>
                        </div>

                    <div className='col-md-10'>
                        <label>Kuvaus</label>
                        <textarea className='form-control' rows="2" placeholder='Lisätietoja' value={tire.text} />
                    </div>
                    <div className='col-md-2 mt-2'>
                        <UpdateTires 
                            tires_id={tire.id} 
                            car_register={tire.car_register}
                            brand={tire.brand}
                            model={tire.model}
                            type={tire.type}
                            hubcups={tire.hubcups}
                            grooveFL={tire.groovefl}
                            grooveFR={tire.groovefr}
                            grooveBL={tire.groovebl}
                            grooveBR={tire.groovebr}
                            tiresize={tire.tiresize}
                            tirebolt={tire.tirebolt}
                            text={tire.text}
                            rims={tire.rims}
                        />
                        <button className="btn" style={buttonStyle} onClick={() => deleteTires(tire.id)}><FaTrash/></button>
                    </div>
                </div>
            ))}

            <NewTires setCarTires={setCarTires} car_id={car_id} car_register={car_register} />
        
        </div>
    )

}