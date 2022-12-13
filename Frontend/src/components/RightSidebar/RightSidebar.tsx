import { FC } from "react";

import {RightSidebarWrapper, RightSidebarDiv,RightSidebarLink} from './styles';

type RightSidebarProps = {
 children: React.ReactNode;
}

const RightSidebar: FC<RightSidebarProps> = () => {
 
 return ( 
  <>
   <RightSidebarWrapper>
    <RightSidebarDiv>
     <RightSidebarLink href="mailto:ahsantime1@gmail.com">ahsantime1@gmail.com</RightSidebarLink>
    </RightSidebarDiv>
   </RightSidebarWrapper>
  
  </>
 )
}

export default RightSidebar;