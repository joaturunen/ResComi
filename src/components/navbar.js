import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import { SidebarData } from './SidebarData';


export default function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
          
            <nav  className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>

                        
                        </li>
                    )
                })} 
                
                
                </ul>
               
            </nav>
          
        </>
    );
}