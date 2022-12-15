import React from "react";
import { FC, Fragment } from "react";
import * as FaIcons from 'react-icons/fa';

import { NavbarData } from '../index';
import { NavbarMenuToggleContainer, MenuIcon, CloseIcon, MobileNavbarMenuWrapper, MobileNavbarMenu, MobileNavbarMenuLink } from "./styles";

const NavbarMenuToggle = () => {
 return (
  <NavbarMenuToggleContainer>
   <MenuIcon>
    <CloseIcon />
   </MenuIcon>
   
   <MobileNavbarMenuWrapper>
    {NavbarData.map((item, index) => {
     return (
       <MobileNavbarMenu key={index}>
        <MobileNavbarMenuLink to={item.path}>
         {item.text}
        </MobileNavbarMenuLink>
       </MobileNavbarMenu>
     )
    })}
   </MobileNavbarMenuWrapper>
   <MobileResumeBtnWrap>
    
   </MobileResumeBtnWrap>
  </NavbarMenuToggleContainer>
 )
}

export default NavbarMenuToggle;