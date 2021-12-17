import React, {useState, useEffect} from 'react';
import {buttonStyle} from '../style/colors';
import '../style/modal.css';
import Car from '../images/3121893.png';
import {FaEdit } from 'react-icons/fa';
import {URL} from '../back/Config';


export default function UpdateTires({tires_id, car_register, brand, model, type, hubcups, grooveFL, grooveFR, grooveBL, grooveBR, tiresize, tirebolt, text, rims}) {
    const [newBrand, setNewBrand] = useState(brand);
    const [newModel, setNewModel] = useState(model);
    const [newType, setNewType] = useState(type);
    const [newHubcups, setNewHubcups] = useState(hubcups);
    const [newGrooveFL, setNewGrooveFL] = useState(grooveFL);
    const [newGrooveFR, setNewGrooveFR] = useState(grooveFR);
    const [newGrooveBL, setNewGrooveBL] = useState(grooveBL);
    const [newGrooveBR, setNewGrooveBR] = useState(grooveBR);
    const [newTiresize, setNewTiresize] = useState(tiresize);
    const [newTirebolt, setNewTirebolt] = useState(tirebolt);
    const [newText, setNewText] = useState(text);
    const [newRims, setNewRims] = useState(rims);
    
    const [openUpdateTiresModel, setOpenUpdateTiresModel] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailed, setShowFailed] = useState(false);

    useEffect(() => {
        setShowFailed(false);
        setShowSuccess(false);
    }, [openUpdateTiresModel]);

    function UpdateTires(e) {
        console.log(tires_id);
        e.preventDefault();
        let status = 0;
        fetch(URL + 'tires/tires_update.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: tires_id,
                brand: newBrand,
                model: newModel,
                type: newType,
                //hubcups: newHubcups,
                groovefl: newGrooveFL,
                groovefr: newGrooveFR,
                groovebl: newGrooveBL,
                groovebr: newGrooveBR,
                tiresize: newTiresize,
                tirebolt: newTirebolt,
                text: newText,
                rims: newRims,
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
                    setShowSuccess(true);
                    setNewBrand(res.brand);
                    setNewModel(res.model);
                    setNewType(res.type);
                    setNewHubcups(res.hubcups);
                    setNewGrooveFL(res.groovefl);
                    setNewGrooveFR(res.groovefr);
                    setNewGrooveBL(res.groovebl);
                    setNewGrooveBR(res.groovebr);
                    setNewTiresize(res.tiresize);
                    setNewTirebolt(res.tirebolt);
                    setNewText(res.text);
                    setNewRims(res.rims);
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
                    Tallennus onnistui. Voit poistua näkymästä.
                </div>
            </div>
        </>;


    const alertFailed =
        <>
            <div className="p-2">
                <div class="alert alert-danger" role="alert">
                    Tallennus epäonnistui.
                </div>
            </div>
        </>;


    const content = 
        <>
            <div className="modalBackground">
                <div className="modalContainer">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={()=>{setOpenUpdateTiresModel(false);}}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="d-flex flex-row">
                        <div className="p-2">
                        <h3>Muokkaa</h3>
                        
                    </div>
                    { showSuccess && (alertSuccees)}
                    { showFailed && (alertFailed)}
                    </div>
                    <hr/>
                    <div>
                        <form className="row" onSubmit={UpdateTires}>
                        <div className='col-md-3'>
                                <div>
                                    <label>Rengasmerkki</label>
                                    <input type="text" className="form-control" placeholder='Continental' value={newBrand} onChange={e => setNewBrand(e.target.value)}/>
                                </div>
                                <div>
                                    <label>Malli</label>
                                    <input type="text" className="form-control" placeholder='' value={newModel} onChange={e => setNewModel(e.target.value)}/>
                                </div>
                                <div className='mt-1'>
                                    <label>Rengastyyppi</label>
                                    <input type="text" className="form-control" placeholder='Kesä/Nasta/Kitka' value={newType} onChange={e => setNewType(e.target.value)}/>
                                </div>
                                <div className='mt-1'>
                                    <label>Koko</label>
                                    <input type="text" className="form-control" placeholder='Esim, 16' value={newTiresize} onChange={e => setNewTiresize(e.target.value)}/>
                                </div>
                                
                            </div>

                            <div className='col-md-3'>
                                <div className='mt-1'>
                                    <label>Auton rekisteri</label>
                                    <input type="text" className="form-control" value={car_register} />
                                </div>
                                <div className='mt-1'>
                                    <label>Vannetyyppi</label>
                                    <input type="text" className="form-control" placeholder='Alumiini/Teräs' value={newRims} onChange={e => setNewRims(e.target.value)}/>
                                </div>
                                <div className='mt-1'>
                                    <label>Pölykapselit</label>
                                    <input type="text" className="form-control" placeholder='Kyllä/Ei' value={newHubcups} onChange={e => setNewHubcups(e.target.value)}/>
                                </div>
                                <div className='mt-1'>
                                    <label>Pultit</label>
                                    <input type="text" className="form-control" placeholder='Määrä/rengas?' value={newTirebolt} onChange={e => setNewTirebolt(e.target.value)}/>
                                </div>

                            </div>
                            <div className='col-md-2'>
                                <div className='mt-1'>
                                    <label>EV</label>
                                    <input type="text" className="form-control" placeholder='3' value={newGrooveFL} onChange={e => setNewGrooveFL(e.target.value)}/>
                                </div>
                                <div className='mt-5'>
                                    <label>TV</label>
                                    <input type="text" className="form-control" placeholder='3' value={newGrooveBL} onChange={e => setNewGrooveBL(e.target.value)}/>
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
                                    <input type="text" className="form-control" placeholder='3' value={newGrooveFR} onChange={e => setNewGrooveFR(e.target.value)}/>
                                </div>
                                <div className='mt-5'>
                                    <label>OT</label>
                                    <input type="text" className="form-control" placeholder='3' value={newGrooveBR} onChange={e => setNewGrooveBR(e.target.value)}/>
                                </div>
                            </div>

                            <div className='col-md-10'>
                                <label>Kuvaus</label>
                                <textarea className='form-control' rows="2" placeholder='Lisätietoja' value={newText} onChange={e => setNewText(e.target.value)}/>
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
          setOpenUpdateTiresModel(true);
        }}><FaEdit/></button>
        { openUpdateTiresModel && (content)}
      </div>
      </>
    
  );
}
