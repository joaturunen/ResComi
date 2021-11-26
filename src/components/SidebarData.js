import React from 'react'
import {FaHome, FaWarehouse, FaSearch, FaQuestion} from 'react-icons/fa';
import {MdPersonAdd, MdPerson } from 'react-icons/md';

export const SidebarData = [
    {
        title: 'Etsi',
        path: '/search',
        icon: <FaSearch className='nav-icon' />,
        cName: 'nav-text'
    },

    // asiakas-sivu näytetään vain hakutuloksen perusteella
    // {
    //  title: 'Asiakkaat',
    //  path: '/customers',
    //  icon: <MdPerson />,
    //  cName: 'nav-text'
    // },
    {
        title: 'Etusivu',
        path: '/',
        icon: <FaHome className='nav-icon' />,
        cName: 'nav-text'
    },

    {
        title: 'Uusi asiakas',
        path: '/newCustomer',
        icon: <MdPersonAdd className='nav-icon' />,
        cName: 'nav-text'
    },
    

    {
        title: 'Varasto',
        path: '/Warehouse',
        icon: <FaWarehouse className='nav-icon' />,
        cName: 'nav-text'
    },

    // tämä ei näy navissa, on olemassa vain ettei systeemi kaadu jos yrittää väärään paikkaan
    // {
    //     title: 'Tyhjä',
    //     path: '/empty',
    //     icon: <FaQuestion />,
    //     cName: 'nav-text'
    // },

    {
        title: 'Kirjaudu ulos',
        path: '/empty',
        icon: <FaQuestion className='nav-icon' />,
        cName: 'nav-text'
    }
]