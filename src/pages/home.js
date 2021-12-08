import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWarehouse, FaSearch, FaList } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md';
import { GiTireIron } from 'react-icons/gi';
import Print from '../printable/Print';
import { LinkStyle } from '../style/colors';
import NewCar from './newCar';
import $ from 'jquery';
import NewCustomer from './newCustomer';

// tänne pitäs lisätä linkit noihin sivuihin samoin kuin navbarissa on

export default function Home({url}) {
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  return (
    <>
      <div className='mt-5'>

        <div className='row justify-content-md-center'>


          <Link to="./searchPage" className='col-4 button link shadow' style={LinkStyle}>
            <FaSearch size={35} className='mt-4' />
            <p class='hometext pt-2'>HAE</p>
          </Link>

          <Link to="./warehouse" className='col-3 link shadow button' style={LinkStyle}>
            <FaWarehouse size={40} className='mt-4' />
            <p class='hometext pt-2'>VARASTO</p>
          </Link>
        </div>

        <div className='row justify-content-md-center'>

          <Link to="./order" className='col-3 link button shadow' style={LinkStyle}>
            <GiTireIron size={40} className='mt-4' />
            <p class='hometext pt-2'>UUSI TILAUS</p>
          </Link>

          <Link to="./completedOrders" className='col-4 mb-3 button shadow link' style={LinkStyle}>
            <FaList size={35} className='mt-4' />
            <p class='hometext pt-2'>VALMIIT TILAUKSET</p>
          </Link>
        </div>



        <div className='row'>
          <Link to="../printable/Print" className='col-3 button'>
            <GiTireIron size={40} />
            <p>Printtisivutesti</p>
          </Link>

          <Link to="./onecustomer" className='col-3 button'>
            <MdPersonAdd size={40} />
            <p>oneCustomer</p>
          </Link>
        </div>
      </div>


      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>


      <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <NewCustomer url={url}/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
