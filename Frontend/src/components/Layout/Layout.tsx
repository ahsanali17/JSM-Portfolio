import { FC, Fragment } from "react";

import { Navbar, LeftSidebar, RightSidebar, Footer } from "../";

type LayoutProps = {
 children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Navbar />

      <LeftSidebar/>
      <RightSidebar/>
      
      {children}
      <Footer />
    </Fragment>
  )
}



export default Layout;