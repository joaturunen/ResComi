import React,{useState, useEffect} from 'react';
import { boxColorLayot, Choice} from '../style/colors';
import {URL} from '../back/Config';
import {FaPlus} from 'react-icons/fa';

// services-component to order-page
export default function ComponentServices({addToCart }) {
    const [services, setServices] = useState([]);

    // retrieves services 
    useEffect(() => {
        async function getServices() {
            try {
                const response = await fetch(URL + 'services/services_read_all.php');
                const json = await response.json();
                if (response) {
                    setServices(json);
                } else {
                    alert(json.error);
                }
            } catch (error) {
                alert(error);
            }
        }
        getServices();
    }, []);

    return (
        <>
          <div className="padding" style={boxColorLayot}>
          <h5>Palvelut</h5>
          <p><strong>Valitse säilytyskausi</strong></p>
          <table class="table table-striped">

            <tbody>
              {services.map(service =>{

                if(service.category_id === 1){
                  return(
                    <tr key={service.id}>
                      <td>{service.service}</td>
                      <td className="text-right">{service.price}€</td>
                      <td className="text-right"><p className='btn' style={Choice}><FaPlus onClick={() => addToCart(service)}/></p></td>
                    </tr>
                  )

                }
              })}
            </tbody>
          </table>
          <p><strong>Valitse huolto</strong></p>
          <table class="table table-striped">
            <tbody>
            {services.map(service =>{
              if(service.category_id === 2){
                return(
                  <tr key={service.id}>
                    <td>{service.service}</td>
                    <td className="text-right">{service.price}€</td>
                    <td className="text-right"><p className='btn' style={Choice}><FaPlus onClick={() => addToCart(service)}/></p></td>
                  </tr>
                )
              }
              })}
            </tbody>
          </table>
          </div>
        </>
    );
}

