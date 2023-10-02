import { NavLink } from "react-router-dom";

import Button from "../components/Button";

import About from "../pages/About";
import Location from "../pages/Location";
import Careers from "../pages/Careers";

function Header() {
  return (
    <nav className="">
      <ul className="flex pl-[169px] justify-between items-center bg-black text-white p-6">
        <div className="flex ">
          <NavLink className="mr-6">
            <img src="/my-project/public/logo.svg" alt="logo" to="/" />
          </NavLink>
          <div className="flex gap-[32px] text-dim_grey font-space-mono">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/location">Location</NavLink>
            <NavLink to="/careers">Careers</NavLink>
          </div>
        </div>

        <Button>Get Scootin</Button>
      </ul>
    </nav>
  );
}

export default Header;
