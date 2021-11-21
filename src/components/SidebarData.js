import React from 'react'
import {FaHome } from 'react-icons/fa';

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
        icon: <FaHome />,
        cName: 'nav-text'
       },

       {
        title: 'Uusi asiakas',
        path: '/pages/newCustomer',
        icon: <FaHome />,
        cName: 'nav-text'
       },

       {
        title: 'Etsi',
        path: '/pages/search',
        icon: <FaHome />,
        cName: 'nav-text'
       },

       {
        title: 'Varasto',
        path: '/pages/Warehouse',
        icon: <FaHome />,
        cName: 'nav-text'
       },

       {
        title: 'Tyhjä',
        path: '/pages/empty',
        icon: <FaHome />,
        cName: 'nav-text'
       },
]