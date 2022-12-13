import { FC, useState } from "react";
import * as FaIcons from 'react-icons/fa'; 

import { Navbar, MenuIconOpen, MenuIconClose, SidebarMenu, MenuItems, MenuItemLinks } from "./styles";
import { SidebarData } from './SidebarData';

type SidebarProps = {
 children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = () => {
 const [close, setClose] = useState(false)
 const showSidebar = () => setClose(!close)
 return (
  <>
   <Navbar>
    <MenuIconOpen href="#" onClick={showSidebar}>
     <FaIcons.FaBars />
    </MenuIconOpen>
   </Navbar>
  
   <SidebarMenu close={close}>
    <MenuIconClose href="#" onClick={showSidebar}>
     <FaIcons.FaTimes />
    </MenuIconClose>
    
    {SidebarData.map((item, index) => {
     return (
      <MenuItems key={index}>
       <MenuItemLinks href={item.path}>
        {item.icon}
        <span style={{marginLeft: '16px'}}>{item.title}</span>
       </MenuItemLinks>
      </MenuItems>
     )
    })}
    
   </SidebarMenu>
  
  </>
 )
}

export default Sidebar;