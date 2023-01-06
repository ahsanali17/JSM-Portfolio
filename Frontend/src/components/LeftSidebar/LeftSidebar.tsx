import { FC } from "react";
import * as FaIcons from 'react-icons/fa';

import { SidebarMenu, MenuItems, MenuItemLinks } from "./styles";


export const SidebarData = [
  {path: 'https://github.com/ahsanali17', icon: <FaIcons.FaGithub />}, 
  {path: 'https://www.linkedin.com/in/ahsan-syed-7b26b41a4/', icon: <FaIcons.FaLinkedin />}, 
  {path: 'https://twitter.com/ahsansalisyed', icon: <FaIcons.FaTwitter />}, 
  {path: 'https://www.instagram.com/assa.sinn/', icon: <FaIcons.FaInstagram />}, 
]

const LeftSidebar: FC = () => {
 return (
  <>
   <SidebarMenu>
    {SidebarData.map((item, index) => (
      <MenuItems key={index}>
       <MenuItemLinks href={item.path} target="_blank">
        <span>
          {item.icon}
        </span>
       </MenuItemLinks>
      </MenuItems>
     )
    )}
   </SidebarMenu>
  
  </>
 )
}

export default LeftSidebar;