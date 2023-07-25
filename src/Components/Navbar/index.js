import React from 'react'
import {Nav , NavbarContainer, NavLogo , MobileIcon, NavMenu, NavItem ,Links} from './NavbarElements'
import  {FaBars} from 'react-icons/fa';
//import { Link }  from 'react-router-dom';
import education from '../Education'




const Navbar = ({ toggle }) => {
  return (
    <>
    <Nav>
      <NavbarContainer> 
        <NavLogo to='/'>LM </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars/>
        </MobileIcon>
        <NavMenu>
        
          <NavItem>
            <Links to="/">Home</Links>
          </NavItem>
          <NavItem>
            <Links to="../Education">Education</Links>
          </NavItem>
          <NavItem>
            <Links to='/experience'>Experience</Links>
          </NavItem>
         
          <NavItem>
            <Links to='/Skills'>Skills</Links>
          </NavItem>
          <NavItem>
            <Links to='/Project'>Projects</Links>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar;
