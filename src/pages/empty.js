import React from 'react';
import { Link } from 'react-router-dom';

export default function Empty() {
  return (
    <div class='container-fluid'>
      <h3>Etsimäsi sivu ei ole saatavilla.</h3>
      <Link to="/">Palaa etusivulle</Link>
    </div>
  );
}
