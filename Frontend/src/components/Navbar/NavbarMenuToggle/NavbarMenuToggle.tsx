import React, {MouseEventHandler, useState} from "react";
import { FC, Fragment } from "react";
import * as FaIcons from 'react-icons/fa';

import { NavbarMenuToggleContainer, MenuIcon, CloseIcon, MobileNavbarMenuWrapper, MobileNavbarMenu, MobileNavbarMenuLink, MobileResumeBtnWrap, MobileResumeBtnLink } from "./styles";

interface NavbarMenuToggle {
 isOpen: boolean;
 handleExit: MouseEventHandler<SVGElement>; 
 Navbar: Object;
}

const NavbarMenuToggle = ({isOpen, handleExit, NavbarData}: NavbarMenuToggle) => {
 return (
  <NavbarMenuToggleContainer isOpen={isOpen}>
   <MenuIcon>
    <CloseIcon onClick={handleExit} />
   </MenuIcon>
   
   <MobileNavbarMenuWrapper>
    {NavbarData.map((item, index) => (
       <MobileNavbarMenu key={index}>
        <MobileNavbarMenuLink to={item.path}>
         {item.text}
        </MobileNavbarMenuLink>
       </MobileNavbarMenu>
      )
    )}
    <MobileResumeBtnWrap>
      <MobileResumeBtnLink href={'/resume'}>Resume</MobileResumeBtnLink>
    </MobileResumeBtnWrap>
   </MobileNavbarMenuWrapper>
  </NavbarMenuToggleContainer>
 )
}

export default NavbarMenuToggle;