import { FC } from "react";

import {RightSidebarWrapper, RightSidebarDiv,RightSidebarLink} from './styles';

const RightSidebar: FC = () => {
 
 return ( 
  <RightSidebarWrapper>
   <RightSidebarDiv>
    <RightSidebarLink href="mailto:ahsantime1@gmail.com">ahsantime1@gmail.com</RightSidebarLink>
   </RightSidebarDiv>
  </RightSidebarWrapper>
 )
}

export default RightSidebar;