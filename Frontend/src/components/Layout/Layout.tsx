import { FC, Fragment } from "react";

import { Navbar, LeftSidebar, RightSidebar, Footer } from "../";

type LayoutProps = {
 children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <LeftSidebar/>
        <RightSidebar/>
        
        {children}
        <Footer />
      </main>

    </Fragment>
  )
}



export default Layout;