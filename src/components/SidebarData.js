import React from 'react'
import {FaHome, FaWarehouse, FaSearch, FaQuestion } from 'react-icons/fa';
import {MdPersonAdd, MdPerson } from 'react-icons/md';

export const SidebarData = [
  
    {
     title: 'Etusivu',
     path: '/pages/home',
     icon: <FaHome />,
     cName: 'nav-text'
    },

    {
        title: 'Asiakkaat',
        path: '/pages/Customer',
        icon: <MdPerson />,
        cName: 'nav-text'
       },

       {
        title: 'Uusi asiakas',
        path: '/pages/newCustomer',
        icon: <MdPersonAdd />,
        cName: 'nav-text'
       },

       {
        title: 'Etsi',
        path: '/pages/search',
        icon: <FaSearch />,
        cName: 'nav-text'
       },

       {
        title: 'Varasto',
        path: '/pages/Warehouse',
        icon: <FaWarehouse />,
        cName: 'nav-text'
       },

       {
        title: 'Tyhjä',
        path: '/pages/empty',
        icon: <FaQuestion />,
        cName: 'nav-text'
       },
]