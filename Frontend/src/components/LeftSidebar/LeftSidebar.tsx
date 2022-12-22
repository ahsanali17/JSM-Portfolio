import { FC } from "react";
import * as FaIcons from 'react-icons/fa';

import { SidebarMenu, MenuItems, MenuItemLinks } from "./styles";



const LeftSidebar: FC = () => {
  const SidebarData = [
    {path: '/', icon: <FaIcons.FaGithub />}, 
    {path: '/', icon: <FaIcons.FaLinkedin />}, 
    {path: '/', icon: <FaIcons.FaTwitter />}, 
    {path: '/', icon: <FaIcons.FaInstagram />}, 
   ]
 
 return (
  <>
   <SidebarMenu>
    
    {SidebarData.map((item, index) => (
      <MenuItems key={index}>
       <MenuItemLinks href={item.path}>
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