import { FC, useState } from "react";
import * as FaIcons from 'react-icons/fa';

import {NavbarData} from './NavbarData';
import { NavbarHeader, NavbarNav, NavbarItem, NavbarItemIcons, NavButton } from "./styles";
import {NavbarLogo} from '../'


const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
   <NavbarHeader>
    {/* Logo here */}
    <NavbarLogo />
  
    <NavbarNav isOpen={isOpen}>
     {NavbarData.map((item, index) => {
     return (
      <NavbarItem key={index}>
        {/* {item.icon} */}
        {item.text}
      </NavbarItem>
     )
     })}
     <NavButton onClick={() => setIsOpen(!isOpen)}>
      {/* <FaIcons.FaTimes /> */}
     </NavButton>
    </NavbarNav>
    
    <NavButton onClick={() => setIsOpen(!isOpen)}>
     <FaIcons.FaBars />
    </NavButton>
   </NavbarHeader>
  )
}
export default Navbar;
