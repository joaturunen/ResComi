import React,{useState, useEffect} from 'react';
import { boxColorLayot, buttonStyle} from '../style/colors';

export default function Services({ url, addToCart }) {
    const [services, setServices] = useState([]);

    useEffect(() => {
        async function getServices() {
            console.log(url);
            try {
                const response = await fetch(url + 'services/services_read_all.php');
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
          <h5>Säilytyskausi</h5>
          <p>Valitse palvelu</p>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {services.map(service => (
                <tr key={service.id} onClick={() => addToCart(service)}>
                  <td>{service.service}</td>
                  <td>{service.price} €</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </>
    );
}

