import { FC, useState, MouseEventHandler } from "react";
import * as FaIcons from 'react-icons/fa';

import {NavbarLogo, NavbarMenuToggle} from '../';
import { Nav, NavbarContainer, MobileIcon, NavMenuContainer, NavMenu,NavItem,NavItemLink, NavResumeButton, NavResumeBtnLink, HamburgerIcon } from "./styles";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const handleClick = () => {
    setIsOpen(prev => !prev);
  }
  
  const NavbarData = [
    {path:'#About', text: 'About', icon: <FaIcons.FaHome />},
    {path:'#Experience', text: 'Experience', icon: <FaIcons.FaHome />},
    {path:'#Projects', text: 'Projects', icon: <FaIcons.FaAddressCard />},
    {path:'#Contact', text: 'Contact', icon: <FaIcons.FaAddressBook />},
  ] 
  
 return (
  <Nav>
   <NavbarContainer>
    <NavbarLogo />
    
    <MobileIcon>
     <HamburgerIcon onClick={handleClick} />
    </MobileIcon>
    
    {isOpen && (
     <NavbarMenuToggle
       isOpen={isOpen}
       handleExit={handleClick}
       NavbarDataProps={NavbarData}
       setIsOpen={setIsOpen}
     />
    )}
    
    <NavMenuContainer>
      <NavMenu>
        {NavbarData.map((item, index: number) => (
          <NavItem key={index}>
            <NavItemLink to={item.path}>{item.text}</NavItemLink>
          </NavItem>
          ) 
        )}
      </NavMenu>
      
      <NavResumeButton>
      <NavResumeBtnLink href="/resume">Resume</NavResumeBtnLink>
      </NavResumeButton>
    </NavMenuContainer>
    
   </NavbarContainer>
  </Nav>
 )
}
export default Navbar;
