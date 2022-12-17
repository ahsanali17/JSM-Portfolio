import { FC, Fragment } from "react";
import { Navbar, LeftSidebar, RightSidebar, NavbarMenuToggle } from "../index";

type LayoutProps = {
 children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Navbar />

      <>
        <LeftSidebar/>
        <RightSidebar/>
      </>
      {children}
    </Fragment>
  )
}



export default Layout;