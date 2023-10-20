import { Outlet, useNavigation } from "react-router-dom";

import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import FooterBottom from "../components/FooterBottom";
import Loader from "../components/Loader";

function Layout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div>
      <Header />
      <main className="sm:px-[165px] px-[32px] ">
        <Outlet />
      </main>
      <FooterTop />
      <FooterBottom />
    </div>
  );
}

export default Layout;
