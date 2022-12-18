import { FC, Fragment } from "react";
import Image from "next/image";

import { Logo } from '../../../assets/index';
import { NavLink, NameText } from "./styles";

const NavbarLogo: FC = () => {
 return (
  <Fragment>
    <NavLink href={"/"}> 
     <Image width={100} src={Logo} alt="Logo for the navbar"/>
     <NameText>Ahsan Ali Syed</NameText>
    </NavLink>
  </Fragment>
 )
}

export default NavbarLogo;