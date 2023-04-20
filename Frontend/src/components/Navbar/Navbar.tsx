import { FC, useState, MouseEventHandler } from "react";

import {NavbarLogo, NavbarData, NavbarMenuToggle} from '../';
import { Nav, NavbarContainer, MobileIcon, NavMenuContainer, NavMenu,NavItem,NavItemLink, NavResumeButton, NavResumeBtnLink, HamburgerIcon } from "./styles";

const Navbar: FC = () => {
 const [isOpen, setIsOpen] = useState<boolean>(false);
 
 const handleClick: MouseEventHandler<SVGElement> = (event) => {
  setIsOpen(!isOpen);
}
 
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
      <NavResumeBtnLink href="/https://docs.google.com/file/d/11VhupOx-k5kp3Yg_cjLwLNuLdlZ3M_JI/edit?usp=docslist_api&filetype=msword">Resume</NavResumeBtnLink>
      </NavResumeButton>
    </NavMenuContainer>
    
   </NavbarContainer>
  </Nav>
 )
}
export default Navbar;
