import React, {useState} from 'react';
import {buttonStyle} from '../style/colors';


// uusien renkaiden tallennus: voiko valita slotin vai tuleeko automaattisesti seuraava vapaa?

export default function NewTires({setCustomerTires, car_id}) {
    const [carId, setCarId] = useState(car_id);
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [type, setType] = useState('');
    const [hubcups, setHubcups] = useState('');
    const [grooveFL, setGrooveFL] = useState('');
    const [grooveFR, setGrooveFR] = useState('');
    const [grooveBL, setGrooveBL] = useState('');
    const [grooveBR, setGrooveBR] = useState('');
    const [tiresize, setTiresize] = useState('');
    const [tirebolt, setTirebolt] = useState('');
    const [text, setText] = useState('');
    const [rims, setRims] = useState('');
    const [info, setInfo] = useState('');

    function SaveTires(e) {
        e.preventDefault();
        let status = 0;
        fetch('http://localhost/rengasvarasto-back/API/tires/tires_create.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                car_id: carId,
                brand: brand,
                model: model,
                type: type,
                //hubcups: hubcups,
                groovefl: grooveFL,
                groovefr: grooveFR,
                groovebl: grooveBL,
                groovebr: grooveBR,
                tiresize: tiresize,
                tirebolt: tirebolt,
                text: text,
                rims: rims,
                info: info,
                //employee_id: employee_id
            })
        })
        .then(res => {
            status = parseInt(res.status);
            return res.json();
        })
        .then(
            (res) => {
                if (status === 200) {
                    setCustomerTires(customerTires => [...customerTires, res]);
                    setBrand('');
                    setModel('');
                    setType('');
                    //setHubcups('');
                    setGrooveFL('');
                    setGrooveFR('');
                    setGrooveBL('');
                    setGrooveBR('');
                    setTiresize('');
                    setTirebolt('');
                    setText('');
                    setRims('');
                    setInfo('');
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
            <h5>Lisää renkaat</h5>
            <form onSubmit={SaveTires}>
                <div>
                    <input placeholder="Merkki" value={brand} onChange={e => setBrand(e.target.value)}/>
                </div>
                <div>
                    <input placeholder="Malli" value={model} onChange={e => setModel(e.target.value)}/>
                </div>
                <div>
                    <input placeholder="Tyyppi" value={type} onChange={e => setType(e.target.value)}/>
                </div>
                {/* <div>
                    <input placeholder="Pölykapselit" value={hubcups} onChange={e => setHubcups(e.target.value)}/>
                </div> */}
                <div>
                    <input placeholder="VE" value={grooveFL} onChange={e => setGrooveFL(e.target.value)}/>
                </div>
                <div>
                    <input placeholder="OE" value={grooveFR} onChange={e => setGrooveFR(e.target.value)}/>
                </div>
                <div>
                    <input placeholder="VT" value={grooveBL} onChange={e => setGrooveBL(e.target.value)}/>
                </div>
                <div>
                    <input placeholder="VT" value={grooveBR} onChange={e => setGrooveBR(e.target.value)}/>
                </div>
                <div>
                    <input placeholder="Rengaskoko" value={tiresize} onChange={e => setTiresize(e.target.value)}/>
                </div>
                <div>
                    <input placeholder="Renkaiden leveys" value={tirebolt} onChange={e => setTirebolt(e.target.value)}/>
                </div>
                <div>
                    <input placeholder="Renkaiden kunto" value={text} onChange={e => setText(e.target.value)}/>
                </div>
                <div>
                    <input placeholder="rims" value={rims} onChange={e => setRims(e.target.value)}/>
                </div>
                <div>
                    <input placeholder="Lisätietoja" value={info} onChange={e => setInfo(e.target.value)}/>
                </div>
                <div>
                    <button className='btn btn-primary' style={buttonStyle}>Tallenna</button>
                </div>
            </form>
        </div>
    )
}




