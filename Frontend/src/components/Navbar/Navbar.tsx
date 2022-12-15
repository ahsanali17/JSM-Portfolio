import { FC, useState } from "react";
import * as FaIcons from 'react-icons/fa';

import {NavbarData, NavbarMenuToggle} from '../index';
import { Nav, NavbarContainer, MobileIcon, NavMenu,NavItem,NavItemLink, NavResumeButton, NavResumeBtnLink } from "./styles";
import {NavbarLogo} from '../'

interface NavbarDataProps {
 path: string,
 text: string,
}

const Navbar: FC = () => {
 
 return (
 <>
  <Nav>
   <NavbarContainer>
    <NavbarLogo />
    
    <MobileIcon>
     <FaIcons.FaBars />
    </MobileIcon>
    
    <NavMenu>
     {NavbarData.map((item: NavbarDataProps, index: number) => {
      return (
       <NavItem key={index}>
        <NavItemLink to={item.path}>{item.text}</NavItemLink>
       </NavItem>
      ) 
     })}
    </NavMenu>
    <NavResumeButton>
     <NavResumeBtnLink href={'/resume'}>Resume</NavResumeBtnLink>
    </NavResumeButton>
   </NavbarContainer>
  </Nav>
 </>
 )
}
export default Navbar;
