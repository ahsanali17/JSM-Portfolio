import {useState} from "react";
import { FC, Fragment } from "react";
import * as FaIcons from 'react-icons/fa';

import { NavbarData } from '../index';
import { NavbarMenuToggleContainer, MenuIcon, CloseIcon, MobileNavbarMenuWrapper, MobileNavbarMenu, MobileNavbarMenuLink, MobileResumeBtnWrap, MobileResumeBtnLink } from "./styles";

interface IMenuToggle {
 isOpen: boolean,
}

const NavbarMenuToggle = () => {
 const [isOpen, setIsOpen] = useState<IMenuToggle | undefined>(undefined);
 
 
 return (
  <NavbarMenuToggleContainer isOpen={!isOpen}>
   <MenuIcon>
   <span onClick={setIsOpen}>
    <CloseIcon />
   </span>
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