import React, {useState} from "react";
import NewTires from "./newTires";

export default function Tires({customerTires, setCustomerTires, car_id}) {
    
    return (
        <div>
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
                                <td>{tires.groovefl}</td>
                                <td>{tires.groovefr}</td>
                                <td>{tires.groovebl}</td>
                                <td>{tires.groovebr}</td>
                                <td>{tires.tiresize}</td>
                                <td>{tires.tirebolt}</td>
                                <td>{tires.text}</td>
                                <td>{tires.rims}</td>
                                <td>{tires.info}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <NewTires setCustomerTires={setCustomerTires} car_id={car_id} />
            </div>

        </div>
    )

}