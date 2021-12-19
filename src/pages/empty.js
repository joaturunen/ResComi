import React from 'react';
import { Link } from 'react-router-dom';


export default function Empty() {
  return (
    <>
      <h3>Etsimäsi sivu ei ole saatavilla.</h3>
      <Link to="/">Palaa etusivulle</Link>
    </>
  );
}
