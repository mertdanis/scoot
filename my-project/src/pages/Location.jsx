import React from "react";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";

import LocationCard from "../components/LocationCard";
import MobileLocationCart from "../components/MobileLocationCart";

function location() {
  return (
    <div className="flex flex-col justify-center items-center">
      <PageTitle title={"Location"} page={"location"} />
      <div className="relative">
        <img src="/src/assets/imgs/world-map-desktop.png" />

        <LocationCard className={` sm:block hidden  top-[71px] left-[147px]`}>
          New York
        </LocationCard>

        <LocationCard className={` sm:block hidden top-[18px] left-[393px]`}>
          London
        </LocationCard>

        <LocationCard className={`sm:block hidden top-[78px] right-[65px]`}>
          Yokohama
        </LocationCard>

        <LocationCard
          className={`sm:block hidden bottom-[203px] right-[142px]`}
        >
          Jakarta
        </LocationCard>
      </div>

      <div className=" sm:hidden flex gap-6 flex-col my-6 ">
        <MobileLocationCart location={"New York"}></MobileLocationCart>
        <MobileLocationCart location={"London"}></MobileLocationCart>
        <MobileLocationCart location={"Jakarta"}></MobileLocationCart>
        <MobileLocationCart location={"Yokohama"}></MobileLocationCart>
      </div>

      <div className="flex flex-col sm:flex-row gap-[32px]  justify-center sm:gap-[70px] sm:my-[50px] my-[30px] items-center ">
        <h2 className="sm:text-h2 text-[32px] font-bold sm:w-[22%]">
          Your city not listed?
        </h2>
        <p className="sm:w-[30%] ">
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
        <Button>Message Us</Button>
      </div>
    </div>
  );
}

export default location;
