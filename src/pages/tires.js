import React, {useState} from "react";

// tulostaa asiakkaan autoihin kuuluvat renkaat 

export default function Tires({customerTires}) {

    return (
        <>
            <table  className="table px-3 table-striped">
                <tbody>
                    {customerTires.map(tires => (
                        <tr key={tires.id} >
                            <td>{tires.brand}</td>
                            <td>{tires.model}</td>
                            <td>{tires.type} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </>
    )

}