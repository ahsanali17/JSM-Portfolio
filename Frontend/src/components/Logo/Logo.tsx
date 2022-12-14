import { FC, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { Logo } from '../../assets/index';

const NavbarLogo: FC = () => {
 return (
  <Fragment>
   <Link href={"/"}>
    <Image width={100} src={Logo} alt="Logo for the navbar"/>
   </Link>
  </Fragment>
 )
}

export default NavbarLogo;