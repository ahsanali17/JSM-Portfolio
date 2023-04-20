import { Dispatch, MouseEventHandler} from "react";

import { NavbarMenuToggleContainer, MenuIcon, CloseIcon, MobileNavbarMenuWrapper, MobileNavbarMenu, MobileNavbarMenuLink, MobileResumeBtnWrap, MobileResumeBtnLink, NavbarSocialIconLinks, SidebarSocialIconsWrapper, MobileNavbarEmailLink, MobileNavbarEmailDiv, MobileNavbarMenuToggleContainer2 } from "./styles";
import { SidebarData } from "../../../utils/constants";

interface NavbarMenuToggle {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  handleExit: MouseEventHandler;
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
          <MobileResumeBtnLink href="https://drive.google.com/file/d/1JNBJT-oszA5Mfrcj2hVXy8_KoijTrpxL/view?usp=drivesdk" target="_blank">Resume</MobileResumeBtnLink>
        </MobileResumeBtnWrap>
      </MobileNavbarMenuWrapper>

      <MobileNavbarMenuToggleContainer2>
      <MobileNavbarEmailDiv>
        <MobileNavbarEmailLink href="mailto:ahsantime1@gmail.com">
          ahsantime1@gmail.com
        </MobileNavbarEmailLink>
      </MobileNavbarEmailDiv>
      <SidebarSocialIconsWrapper>
        {SidebarData.map((item, index) => (
            <NavbarSocialIconLinks href={item.path} target="_blank" rel="noreferrer" key={index}>
              {<item.icon />}
            </NavbarSocialIconLinks>
        ))}
      </SidebarSocialIconsWrapper>

      </MobileNavbarMenuToggleContainer2>
    </NavbarMenuToggleContainer>
  );
};
export default NavbarMenuToggle;