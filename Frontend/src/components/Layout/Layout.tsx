import { FC, Fragment } from "react";

import { LeftSidebar, RightSidebar } from "..";

type LayoutProps = {
 children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
   <Fragment>
    <LeftSidebar/>
    <RightSidebar/>
    {children}
   </Fragment>
  )
}



export default Layout;