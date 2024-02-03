import { FC } from "react";

import { SidebarMenu, MenuItems, MenuItemLinks } from "./styles";
import { SidebarData } from "../../utils/constants";

const LeftSidebar: FC = () => {
 return (
  <>
   <SidebarMenu>
    {SidebarData.map((item, index) => (
      <MenuItems key={index}>
       <MenuItemLinks href={item.path} target="_blank">
        <span>
          {<item.icon />}
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