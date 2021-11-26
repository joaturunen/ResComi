import React from 'react'
import {FaHome, FaWarehouse, FaSearch, FaQuestion} from 'react-icons/fa';
import {MdPersonAdd, MdPerson } from 'react-icons/md';

export const SidebarData = [
    {
        title: 'Etsi',
        path: '/search',
        icon: <FaSearch />,
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
        icon: <FaHome />,
        cName: 'nav-text'
    },

    {
        title: 'Palvelut',
        path: '/services',
        icon:  '',
        cName: 'nav-text'
    },

    {
        title: 'Uusi tilaus',
        path: '/order',
        icon:  '',
        cName: 'nav-text'
    },

    {
        title: 'Uusi asiakas',
        path: '/newCustomer',
        icon: <MdPersonAdd />,
        cName: 'nav-text'
    },
    

    {
        title: 'Varasto',
        path: '/Warehouse',
        icon: <FaWarehouse />,
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
        icon: <FaQuestion />,
        cName: 'nav-text'
    }
]