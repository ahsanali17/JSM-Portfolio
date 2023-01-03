import { MouseEventHandler } from "react";

import { NavbarMenuToggleContainer, MenuIcon, CloseIcon, MobileNavbarMenuWrapper, MobileNavbarMenu, MobileNavbarMenuLink, MobileResumeBtnWrap, MobileResumeBtnLink } from "./styles";

interface NavbarMenuToggle {
  isOpen: boolean;
  handleExit: MouseEventHandler<SVGElement>; 
  NavbarDataProps: {
    path: string;
    text: string;
    icon: JSX.Element;
  }[];
}

const NavbarMenuToggle = ({isOpen, handleExit, NavbarDataProps}: NavbarMenuToggle) => {
  return (
    <NavbarMenuToggleContainer isOpen={isOpen}>
      <MenuIcon>
        <CloseIcon onClick={handleExit} />
      </MenuIcon>
      <MobileNavbarMenuWrapper>
        {NavbarDataProps.map((item, index) => (
          <MobileNavbarMenu key={index}>
            <MobileNavbarMenuLink to={item.path}>
              {item.text}
            </MobileNavbarMenuLink>
          </MobileNavbarMenu>
        ))}
        <MobileResumeBtnWrap>
          <MobileResumeBtnLink href={'/resume'}>Resume</MobileResumeBtnLink>
        </MobileResumeBtnWrap>
      </MobileNavbarMenuWrapper>
    </NavbarMenuToggleContainer>
  );
};
export default NavbarMenuToggle;