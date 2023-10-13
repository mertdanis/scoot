import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import FooterBottom from "../components/FooterBottom";

function Layout() {
  return (
    <div>
      <Header />
      <main className="px-[165px] ">
        <Outlet />
      </main>
      <FooterTop />
      <FooterBottom />
    </div>
  );
}

export default Layout;
