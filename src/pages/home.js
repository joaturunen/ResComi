import React from 'react';
import { Link } from 'react-router-dom';
import { FaWarehouse, FaSearch, FaList } from 'react-icons/fa';
import { GiTireIron } from 'react-icons/gi';
import { LinkStyle } from '../style/colors';

// front page

export default function Home() {


  return (
    <>
      <div className='mt-5'>

        <div className='row justify-content-md-center'>
          <Link to="./searchPage" className='col-4 button link shadow' style={LinkStyle}>
            <FaSearch size={35} className= 'mt-4'/>
            <p class='hometext pt-2'>HAKU</p>
          </Link>

          <Link to="./warehouse" className='col-3 link shadow button' style={LinkStyle}>
          <FaWarehouse size={40} className='mt-4'/>
          <p class='hometext pt-2'>VARASTO</p>
          </Link>
        </div>

        <div className='row justify-content-md-center'> 

          <Link to="./order" className='col-3 link button shadow' style={LinkStyle}>
            <GiTireIron size={40}  className='mt-4'/>
            <p class='hometext pt-2'>UUSI TILAUS</p>
          </Link>

          <Link to="./completedOrders" className='col-4 mb-3 button shadow link' style={LinkStyle}>
          <FaList size={35}  className='mt-4'/>
            <p class='hometext pt-2'>VALMIIT TYÖT</p>
          </Link>
        </div>

      </div>
    </>
  );
}
