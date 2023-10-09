import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import FooterBottom from "../components/FooterBottom";

function Layout() {
  return (
    <div className="px-[165px] overflow-hidden">
      <Header />
      <Outlet />
      <FooterTop />
      <FooterBottom />
    </div>
  );
}

export default Layout;
