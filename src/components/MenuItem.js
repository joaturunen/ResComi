import React, {  useState } from "react";
import {FaHome, FaWarehouse, FaSearch, FaQuestion} from 'react-icons/fa';
import {MdPersonAdd, MdPerson } from 'react-icons/md';
import { NavLink, Link } from "react-router-dom";

/**
 * @author
 * @function MenuItem
 **/

 const MenuItem = (props) => {
    const { name, subMenus, icon, onClick, to, exact } = props;
    const [expand, setExpand] = useState(false);

    return (
        <li onClick={props.onClick}>
          <Link
            exact
            to={to}
           
            className={`menu-item`}
          >
            <div className="menu-icon">
              <i class={icon}></i>
            </div>
            <span>{name}</span>
          </Link>
          {subMenus && subMenus.length > 0 ? (
            <ul className={`sub-menu`}>
              {subMenus.map((menu, index) => (
                <li key={index}>
                  <NavLink to={menu.to}>{menu.name}</NavLink>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      );
    };
    
    export default MenuItem;

/**
 * Muutin tämän kokonaan alla on vanha versio
 */

/* export const SidebarData = [
    {
        title: 'Etsi',
        path: '/search',
        icon: <FaSearch className='nav-icon' />,
        cName: 'nav-text'
    }, */

    // asiakas-sivu näytetään vain hakutuloksen perusteella
    // {
    //  title: 'Asiakkaat',
    //  path: '/customers',
    //  icon: <MdPerson />,
    //  cName: 'nav-text'
    // },
   /*  {
        title: 'Etusivu',
        path: '/',
        icon: <FaHome className='nav-icon' />,
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
] */