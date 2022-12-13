import { FC, Fragment } from "react";
import { Sidebar } from "..";

type LayoutProps = {
 children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
   <Fragment>
    <Sidebar/>
    {children}
   </Fragment>
  )
}



export default Layout;