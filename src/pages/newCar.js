import React, {useState, useEffect} from 'react';
import {buttonStyle} from '../style/colors';
import '../style/modal.css';

export default function NewCar({setCustomerCars, customer_id}) {

  const [register, setRegister] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [openNewCarModel, setOpenNewCarModel] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState(false);

  useEffect(() => {
    setShowFailed(false);
    setShowSuccess(false);
  }, [openNewCarModel]);

  function SaveCar(e) {
        console.log(customer_id);
        e.preventDefault();
        let status = 0;
        fetch('http://localhost/rengasvarasto-back/API/car/car_create.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customer_id: customer_id,
                register: register,
                brand: brand,
                model: model
            })
        })
        .then(res => {
            status = parseInt(res.status);
            return res.json();
            
        })
        .then(
            (res) => {
                if (status === 200) {
                    setCustomerCars(customerCars => [...customerCars, res]);
                    setRegister('');
                    setBrand('');
                    setModel('');
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
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={()=>{setOpenNewCarModel(false);}}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="d-flex flex-row">
                        <div className="p-2">
                        <h3>Lisää uusi auto</h3>
                        
                    </div>
                    { showSuccess && (alertSuccees)}
                    { showFailed && (alertFailed)}
                    </div>
                    <hr/>
                    <div className='row mt-5'>
                        <h5>Lisää uusi auto</h5>
                        <form onSubmit={SaveCar} className='col-4'>
                            <div>
                                <label>Rekisteri</label>
                                <input type="text" className="form-control" value={register} onChange={e => setRegister(e.target.value)}/>
                            </div>
                            <div>
                                <label>Merkki</label>
                                <input type="text" className="form-control" value={brand} onChange={e => setBrand(e.target.value)}/>
                            </div>
                            <div>
                                <label>Malli</label>
                                <input type="text" className="form-control" value={model} onChange={e => setModel(e.target.value)}/>
                            </div>
                            
                            <button className='btn btn-primary' style={buttonStyle}>Tallenna</button>
                        </form>
                    </div>
                </div>
            </div>
        </>;

  return (
      <>
      <div>
        <button className="btn"  style={buttonStyle} onClick={()=>{
          setOpenNewCarModel(true);
        }}>Lisää uusi auto</button>
        { openNewCarModel && (content)}
      </div>
      </>
    
  );
}