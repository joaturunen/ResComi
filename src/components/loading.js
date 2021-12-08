import React from 'react';

export default function Loading() {

  return (
    <div class="text-center">
      <div class="spinner-border text-secondary" role="status">
        <span class="sr-only"></span>
      </div>
      <p>Ladataan..</p>
    </div>
  )
}