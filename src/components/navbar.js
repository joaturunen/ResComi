import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import { SidebarData } from './SidebarData';


export default function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <div className='navbar'>
            <a className="navbar-brand mr-auto p-2" href="/">Rengasvarasto</a>
          </div>  
            <nav  className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                    </li>
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
           {/*  <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="home" to="/pages/home">Koti</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="newCustomer" to="/pages/newCustomer">Uusi asiakas</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="warehouse" to="/pages/warehouse">Varastotilanne</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="search" to="/pages/search">Haku</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="customer" to="/pages/customer">Asiakas</Link>
                </li>
            </ul> */}
        </>
    );
}