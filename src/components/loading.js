import React from 'react';

export default function Loading() {

  return (
    <div className="modalBackground">
    <div className="modalContainer2 row justify-content-md-center">
    <div className="text-center">
      <div class="spinner-border text-secondary" role="status">
        <span class="sr-only"></span>
      </div>
      </div>
      <p className='text-center'>Ladataan..</p>
    </div>
    </div>
  )
}