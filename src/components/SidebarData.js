import React from 'react'
import {FaHome, FaWarehouse, FaSearch, FaQuestion } from 'react-icons/fa';
import {MdPersonAdd, MdPerson } from 'react-icons/md';

export const SidebarData = [
  
    {
     title: 'Etusivu',
     path: '/home',
     icon: <FaHome />,
     cName: 'nav-text'
    },

    {
        title: 'Asiakkaat',
        path: '/customers',
        icon: <MdPerson />,
        cName: 'nav-text'
       },

       {
        title: 'Uusi asiakas',
        path: '/newCustomer',
        icon: <MdPersonAdd />,
        cName: 'nav-text'
       },

       {
        title: 'Etsi',
        path: '/search',
        icon: <FaSearch />,
        cName: 'nav-text'
       },

       {
        title: 'Varasto',
        path: '/Warehouse',
        icon: <FaWarehouse />,
        cName: 'nav-text'
       },

       {
        title: 'Tyhjä',
        path: '/empty',
        icon: <FaQuestion />,
        cName: 'nav-text'
       },
       {
        title: 'Asiakas',
        path: '/Customer',
        icon: <MdPerson />,
        cName: 'nav-text'
       },
]