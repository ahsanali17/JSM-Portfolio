import { FC } from "react";

import { SidebarMenu, MenuItems, MenuItemLinks } from "./styles";
import { SidebarData } from './LeftSidebarData';

type LeftSidebarProps = {
 children: React.ReactNode;
}

const LeftSidebar: FC<LeftSidebarProps> = () => {
 
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