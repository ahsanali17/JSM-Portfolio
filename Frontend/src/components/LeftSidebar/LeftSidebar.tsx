import { FC } from "react";

import { SidebarMenu, MenuItems, MenuItemLinks } from "./styles";
import { SidebarData } from "../../utils/constants";
import { useTheme } from '../../context/themeContext';

const LeftSidebar: FC = () => {
  const { theme } = useTheme()
  const isItDay = theme === 'day' ? true : false;

  return (
    <>
      <SidebarMenu>
        {SidebarData.map((item, index) => (
          <MenuItems key={index}>
            <MenuItemLinks href={item.path} target="_blank" color={isItDay ? 'black' : 'white'}>
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