import { FC } from "react";
import { NavLink, NameText } from "./styles";

const NavbarLogo: FC = () => {
 return (
    <NavLink href="/"> 
     <NameText>Ahsan Ali Syed</NameText>
    </NavLink>
 )
}

export default NavbarLogo;