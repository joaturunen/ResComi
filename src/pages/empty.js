import React from 'react';
import { Link } from 'react-router-dom';

export default function Empty() {
  return (
    <div >
      <p>Etsimäsi sivu ei ole saatavilla.</p>
      <Link to="/">Palaa etusivulle</Link>
    </div>
  );
}
