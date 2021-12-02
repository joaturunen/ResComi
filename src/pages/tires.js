import React, {useState} from "react";

// tulostaa asiakkaan autoihin kuuluvat renkaat 

// uusien renkaiden tallennus: voiko valita slotin vai tuleeko automaattisesti seuraava vapaa?

export default function Tires({customerTires, setCustomerTires, car_id}) {
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
                car_id: car_id,
                brand: brand,
                model: model,
                type: type,
                hubcups: hubcups,
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
            return res.json();
        })
        .then(
            (res) => {
                if (status === 200) {
                    setCustomerTires(customerTires => [...customerTires, res]);
                    setBrand('');
                    setModel('');
                    setType('');
                    setHubcups('');
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
            <h5>Renkaiden tiedot</h5>
            <table  className="table px-3 table-striped">
                <tbody>
                    {customerTires.map(tires => (
                        <tr key={tires.id} >
                            <td>{tires.brand}</td>
                            <td>{tires.model}</td>
                            <td>{tires.type}</td>
                            <td>{tires.hubcups}</td>
                            <td>{tires.grooveFL}</td>
                            <td>{tires.grooveFR}</td>
                            <td>{tires.grooveBL}</td>
                            <td>{tires.grooveBR}</td>
                            <td>{tires.tiresize}</td>
                            <td>{tires.tirebolt}</td>
                            <td>{tires.text}</td>
                            <td>{tires.rims}</td>
                            <td>{tires.info}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h6>Lisää renkaat</h6>
            <form onSubmit={SaveTires}>
                <input placeholder="Merkki" value={brand} onChange={e => setBrand(e.target.value)}/>
                <input placeholder="Malli" value={model} onChange={e => setModel(e.target.value)}/>
                <input placeholder="Tyyppi" value={type} onChange={e => setType(e.target.value)}/>
                <input placeholder="Pölykapselit" value={hubcups} onChange={e => setHubcups(e.target.value)}/>
                <input placeholder="VE" value={grooveFL} onChange={e => setGrooveFL(e.target.value)}/>
                <input placeholder="OE" value={grooveFR} onChange={e => setGrooveFR(e.target.value)}/>
                <input placeholder="VT" value={grooveBL} onChange={e => setGrooveBL(e.target.value)}/>
                <input placeholder="VT" value={grooveBR} onChange={e => setGrooveBR(e.target.value)}/>
                <input placeholder="Rengaskoko" value={tiresize} onChange={e => setTiresize(e.target.value)}/>
                <input placeholder="Renkaiden leveys" value={tirebolt} onChange={e => setTirebolt(e.target.value)}/>
                <input placeholder="" value={rims} onChange={e => setRims(e.target.value)}/>
                <input placeholder="Lisätietoja" value={info} onChange={e => setInfo(e.target.value)}/>
                <button>Tallenna</button>
            </form>
            
        </div>
    )

}