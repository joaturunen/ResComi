import React, {useState, useEffect} from 'react';
import {buttonStyle} from '../style/colors';
import '../style/modal.css';
import Car from '../images/car.png';
import {URL} from '../back/Config';

// add new tires to car (modal)

export default function ModalNewTires({setCarTires, car_id, car_register}) {
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
    
    const [openNewTiresModel, setOpenNewTiresModel] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailed, setShowFailed] = useState(false);

    useEffect(() => {
        setShowFailed(false);
        setShowSuccess(false);
    }, [openNewTiresModel]);

    // save new tires
    function SaveTires(e) {
        console.log(car_id);
        e.preventDefault();
        let status = 0;
        fetch(URL + 'tires/tires_create.php', {
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
                rims: rims
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
                    setCarTires(carTires => [...carTires, res]);
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
                    setShowSuccess(true);
                } else {
                    alert(res.error);
                    setShowFailed(true);
                }
            }, (error) => {
                alert(error);
            }
        );

    }

    const alertSuccees =
        <>
            <div className="p-2">
                <div class="alert alert-success" role="alert">
                    Lisäys onnistui. Voit poistua näkymästä.
                </div>
            </div>
        </>;


    const alertFailed =
        <>
            <div className="p-2">
                <div class="alert alert-danger" role="alert">
                    Lisäys epäonnistui.
                </div>
            </div>
        </>;


    const content = 
        <>
            <div className="modalBackground">
                <div className="modalContainer">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={()=>{setOpenNewTiresModel(false);}}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="d-flex flex-row">
                        <div className="p-2">
                        <h3>Lisää renkaat</h3>
                        
                    </div>
                    { showSuccess && (alertSuccees)}
                    { showFailed && (alertFailed)}
                    </div>
                    <hr/>
                    <div>
                        <form className="row" onSubmit={SaveTires}>
                            <div className='col-md-3'>
                                <div>
                                    <label>Rengasmerkki</label>
                                    <input type="text" maxLength={25} className="form-control" placeholder='Continental' value={brand} onChange={e => setBrand(e.target.value)}/>
                                </div>
                                <div>
                                    <label>Malli</label>
                                    <input type="text" maxLength={50} className="form-control" placeholder='' value={model} onChange={e => setModel(e.target.value)}/>
                                </div>
                                <div className='mt-1'>
                                    <label>Rengastyyppi</label>
                                    <input type="text" maxLength={25} className="form-control" placeholder='Kesä/Nasta/Kitka' value={type} onChange={e => setType(e.target.value)}/>
                                </div>
                                <div className='mt-1'>
                                    <label>Koko</label>
                                    <input type="text" maxLength={25} className="form-control" placeholder='Esim, 16' value={tiresize} onChange={e => setTiresize(e.target.value)}/>
                                </div>
                                
                            </div>

                            <div className='col-md-3'>
                                <div className='mt-1'>
                                    <label>Auton rekisteri</label>
                                    <input type="text" maxLength={25} className="form-control" value={car_register} />
                                </div>
                                <div className='mt-1'>
                                    <label>Vannetyyppi</label>
                                    <input type="text" maxLength={25} className="form-control" placeholder='Alumiini/Teräs' value={rims} onChange={e => setRims(e.target.value)}/>
                                </div>
                                <div className='mt-1'>
                                    <label>Pölykapselit</label>
                                    <input type="text" className="form-control" placeholder='Kyllä/Ei' value={hubcups} onChange={e => setHubcups(e.target.value)}/>
                                </div>
                                <div className='mt-1'>
                                    <label>Pultit</label>
                                    <input type="text" maxLength={25} className="form-control" placeholder='Määrä/rengas?' value={tirebolt} onChange={e => setTirebolt(e.target.value)}/>
                                </div>

                            </div>
                            <div className='col-md-2'>
                                <div className='mt-1'>
                                    <label>EV</label>
                                    <input type="text" maxLength={25} className="form-control" placeholder='3' value={grooveFL} onChange={e => setGrooveFL(e.target.value)}/>
                                </div>
                                <div className='mt-5'>
                                    <label>TV</label>
                                    <input type="text" maxLength={25} className="form-control" placeholder='3' value={grooveBL} onChange={e => setGrooveBL(e.target.value)}/>
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
                                    <input type="text" maxLength={25} className="form-control" placeholder='3' value={grooveFR} onChange={e => setGrooveFR(e.target.value)}/>
                                </div>
                                <div className='mt-5'>
                                    <label>OT</label>
                                    <input type="text" maxLength={25} className="form-control" placeholder='3' value={grooveBR} onChange={e => setGrooveBR(e.target.value)}/>
                                </div>
                            </div>

                            <div className='col-md-10'>
                                <label>Kuvaus</label>
                                <textarea className='form-control' rows="2" placeholder='Lisätietoja' value={text} onChange={e => setText(e.target.value)}/>
                            </div>
                            <div className='col-md-2 mt-5'>
                                    <button className='btn' style={buttonStyle}>Tallenna</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>;

  return (
      <>
      <div>
        <button className="btn"  style={buttonStyle} onClick={()=>{
          setOpenNewTiresModel(true);
        }}>Lisää renkaat</button>
        { openNewTiresModel && (content)}
      </div>
      </>
    
  );
}
