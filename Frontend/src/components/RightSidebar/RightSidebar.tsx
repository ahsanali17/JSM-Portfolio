import { FC } from "react";

import { RightSidebarWrapper, RightSidebarDiv, RightSidebarLink } from './styles';
import { useTheme } from "../../context/themeContext";

const RightSidebar: FC = () => {
 const { theme } = useTheme();
 const isItDay = theme === "day" ? true : false;

 return (
  <RightSidebarWrapper>
   <RightSidebarDiv>
    <RightSidebarLink href="mailto:ahsantime1@gmail.com" color={isItDay ? 'black' : 'white'}>ahsantime1@gmail.com</RightSidebarLink>
   </RightSidebarDiv>
  </RightSidebarWrapper>
 )
}

export default RightSidebar;