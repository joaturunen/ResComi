import React, {useState, useEffect} from "react";
import {Navigate} from 'react-router-dom';


export default function Services({url, addToCart}) {
    const [services, setServices] = useState([]);
    const [showOrderSite, setShowOrderSite] = useState(false);

    useEffect(() => {
        async function getServices() {
            try {
                const response = await fetch(url + 'services/services_read_all.php');
                const json = await response.json();
                if (response){
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

    function goOrderSite() {
        setShowOrderSite(true);
    }
      
    if (showOrderSite === true) {
        return (
            <Navigate to="/order" />
          
        );
    }

    return (
        <div className="container-fluid">
            <h3>Palvelut</h3>
            {services.map(service => (
                <div key={service.id} > 
                    <h6>{service.service}</h6>
                    <h6>{service.price}</h6>
                    <button onClick={() => addToCart(service)}>Lisää tilaukseen</button>
                </div>
            ))}
            <button onClick={() => goOrderSite()}>Siirry tilaussivulle</button>
        </div>

    );
}