import React , { useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'

 function Navbar(){
     const [ click , setClick ] = useState(false);
     const [ dropdown , setDropdown ] = useState(false);

     const handleClick = () => setClick(!click);
     const closeMobileMenu = () => setClick(false);

     const onMouseEnter = () => {
         if(window.innerWidth <960)
         {
             setDropdown(false);
         }
         else{
             setDropdown(true);
         }
         };
         const onMouseLeave = () => {
            if(window.innerWidth <960)
            {
                setDropdown(false);
            }
            else{
                setDropdown(false);
            }
            };
     

    return (
        <>
        <nav className = "navbar">
            <Link to = '/' className = " navbar-logo">
                HomePage
            </Link>
            <div className = "menu-icon" onClick = {handleClick}>                
                <i className = {click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                <li className = 'nav-item'
                onMouseEnter = {onMouseEnter}
                onMouseLeave = {onMouseLeave}
                >
                    <Link to = '/' className = "nav-links" 
                    onClick = {closeMobileMenu}>
                        Left dropdown <i className = 'fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown/>}                   
                </li>
                <li className = 'nav-item'
                onMouseEnter = {onMouseEnter}
                onMouseLeave = {onMouseLeave}
                >
                    <Link to = '/Megamenu' className = "nav-links" 
                    onClick = {closeMobileMenu}>
                        Mega Menu <i className = 'fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className = 'nav-item'
                onMouseEnter = {onMouseEnter}
                onMouseLeave = {onMouseLeave}
                >
                    <Link to = '/Rightdropdown' className = "nav-links" 
                    onClick = {closeMobileMenu}>
                        Right dropdown <i className = 'fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown/>}                  
                </li>
                           

            </ul>
        </nav>
        </>
    )
}
export default Navbar;