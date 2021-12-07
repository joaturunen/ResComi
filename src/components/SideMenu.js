import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import MenuItem from "./MenuItem";

import {MdPersonAdd, MdPerson, MdArrowForward, MdReorder } from 'react-icons/md';
import {FaMinus, FaPlus, FaHome, FaWarehouse, FaSearch, FaQuestion } from 'react-icons/fa';

/**
 * @author
 * @function SideMenu
 **/


 export const menuItems = [

  {
    name: "Etusivu",
    exact: true,
    to: '/',
    icon: <FaHome />,
     
  },
  {
    name: 'Etsi',
    exact: true,
    to: '/searchPage',
    icon: <FaSearch />,
    
  },
    
    // { name: "Palvelut",
    // exact: true, 
    // to: `/services`,
    //  icon: <MdPersonAdd /> },
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
    name: "Tilaukset",
    exact: true,
    to: '/completedOrders',
    icon: <FaWarehouse />,
  
  },

  {
    name: "Varasto",
    exact: true,
    to: '/warehouse',
    icon: <FaWarehouse />,
  
  },
  
  {
    name: 'Kirjaudu ulos',
    exact: true,
    to: '/empty',
    
    icon: <FaQuestion className='nav-icon' />,
      
  },
    
   
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
      <div className={`side-menu nav-color ${inactive ? "inactive" : "col lign-self-start no-padding"}`}>
        <div className="top-section row">
          <div onClick={() => setInactive(!inactive)}>
            {inactive ? (
              <FaPlus className='toggle-menu-btn'/>
            ) : (
              <FaMinus className='toggle-menu-btn' />
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
            
              <div class="fixed-bottom">&copy; ResComi</div>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default SideMenu;