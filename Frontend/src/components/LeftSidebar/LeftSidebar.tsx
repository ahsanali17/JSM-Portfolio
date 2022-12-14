import { FC } from "react";

import { SidebarMenu, MenuItems, MenuItemLinks } from "./styles";
import { SidebarData } from './LeftSidebarData';



const LeftSidebar: FC = () => {
 
 return (
  <>
   <SidebarMenu>
    
    {SidebarData.map((item, index) => {
     return (
      <MenuItems key={index}>
       <MenuItemLinks href={item.path}>
        {item.icon}
        <span style={{marginLeft: '16px'}}/>
       </MenuItemLinks>
      </MenuItems>
     )
    })}
    
   </SidebarMenu>
  
  </>
 )
}

export default LeftSidebar;