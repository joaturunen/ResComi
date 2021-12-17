import React, {useState, useEffect} from 'react';
import MenuItem from "./MenuItem";

import {MdPersonAdd } from 'react-icons/md';
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
    name: 'Haku',
    exact: true,
    to: '/searchPage',
    icon: <FaSearch />,
    
  },
    
  {
    name: 'Uusi tilaus',
    exact: true,
    to: '/order',
    icon:  '',
    
  },

  {
    name: 'Työjono',
    exact: true,
    to: '/incompletedOrders',
    
    icon: <MdPersonAdd className='nav-icon' />,
    
  },
  
  {
    name: "Valmiit tilaukset",
    exact: true,
    to: '/completedOrders',
    icon: <FaWarehouse />,
  
  },

  {
    name: "Varasto",
    exact: true,
    to: '/warehouse',
    icon: <FaWarehouse />,
  
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
          if (next !== null) {
            next.classList.toggle("active");
          }
        });
      });
    }, []);
  
    return (
      <div className={`side-menu nav-color ${inactive ? "inactive" : "col align-self-start no-padding"}`}>
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
            
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default SideMenu;