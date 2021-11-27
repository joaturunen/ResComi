import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import MenuItem from "./MenuItem";

import {MdPersonAdd, MdPerson, MdArrowForward, MdArrowBack } from 'react-icons/md';
import {FaTimes, FaHome, FaWarehouse, FaSearch, FaQuestion } from 'react-icons/fa';

/**
 * @author
 * @function SideMenu
 **/


 export const menuItems = [

 {
        name: 'Etsi',
        exact: true,
        to: '/search',
        icon: <FaSearch />,
       
    },
    {
      name: "Etusivu",
      exact: true,
      to: `/`,
      icon: <FaHome />,
       
    },
    { name: "Palvelut",
    exact: true, 
    to: `/services`,
     icon: <MdPersonAdd /> },
     /**
         * Tarvittaessa submenua varten
         */

     /*  subMenus: [
        { name: "", to: "//" },
        { name: "", to: "//" },
      ], */
     {
        name: 'Uusi tilaus',
        exact: true,
        to: '/order',
        icon:  '',
        
    },

    {
        name: 'Uusi asiakas',
        exact: true,
        to: '/newCustomer',
       
        icon: <MdPersonAdd className='nav-icon' />,
        
    },
    
     {
      name: "Varasto",
      exact: true,
      to: `/Warehouse`,
      icon: <FaWarehouse />,
   
    },
    
    {
        name: 'Kirjaudu ulos',
        exact: true,
        to: '/empty',
        
        icon: <FaQuestion className='nav-icon' />,
       
    }
   
  ];
  
  const SideMenu = (props) => {
    const [inactive, setInactive] = useState(false);
  
    useEffect(() => {
      if (inactive) {
        removeActiveClassFromSubMenu();
      }
  
      props.onCollapse(inactive);
    }, [inactive]);
  
    
    const removeActiveClassFromSubMenu = () => {
      document.querySelectorAll(".sub-menu").forEach((el) => {
        el.classList.remove("active");
      });
    };
  
    
    useEffect(() => {
      let menuItems = document.querySelectorAll(".menu-item");
      menuItems.forEach((el) => {
        el.addEventListener("click", (e) => {
          const next = el.nextElementSibling;
          removeActiveClassFromSubMenu();
          menuItems.forEach((el) => el.classList.remove("active"));
          el.classList.toggle("active");
          console.log(next);
          if (next !== null) {
            next.classList.toggle("active");
          }
        });
      });
    }, []);
  
    return (
      <div className={`side-menu ${inactive ? "inactive" : "col col-lg-2 col-md-2 align-self-start no-padding"}`}>
        <div className="top-section row">
         
          <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
            {inactive ? (
              <MdArrowForward/>
            ) : (
              <MdArrowBack />
            )}
          </div>
        </div>
        <div className={`${inactive ? "invisible" : "visible"}`}>
          <div className="main-menu row main-menu-margin">
            <ul>
              {menuItems.map((menuItem, index) => (
                <MenuItem
                  key={index}
                  name={menuItem.name}
                  exact={menuItem.exact}
                  to={menuItem.to}
                  subMenus={menuItem.subMenus || []}
                  icon={menuItem.icon}
                  onClick={(e) => {
                    if (inactive) {
                      setInactive(false);
                    }
                  }}
                />
              ))}       
            </ul>
          </div>
        </div>
  
        <div className="side-menu-footer">
          <div className="user-info">
            <h5>Kirjaudu ulos</h5>
            <p>&copy; ResComi</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default SideMenu;