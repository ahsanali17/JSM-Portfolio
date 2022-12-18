import { FC, useState, MouseEventHandler, Fragment } from "react";
import * as FaIcons from 'react-icons/fa';

import {NavbarLogo} from '../';
import {NavbarData, NavbarMenuToggle} from '../index';
import { Nav, NavbarContainer, MobileIcon, NavMenuContainer, NavMenu,NavItem,NavItemLink, NavResumeButton, NavResumeBtnLink, HamburgerIcon } from "./styles";

interface NavbarDataProps {
 path: string,
 text: string,
}

const Navbar: FC = () => {
 const [isOpen, setIsOpen] = useState<boolean>(false);
 
 const handleClick: MouseEventHandler<SVGElement> = (event) => {
  setIsOpen(!isOpen);
}
 
 return (
 <Fragment>
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
     />
    )}
    
    <NavMenuContainer>
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
    </NavMenuContainer>
    
   </NavbarContainer>
  </Nav>
 </Fragment>
 )
}
export default Navbar;
