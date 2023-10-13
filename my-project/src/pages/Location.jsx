import React from "react";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";

import LocationCard from "../components/LocationCard";

function location() {
  return (
    <div className="flex flex-col justify-center items-center">
      <PageTitle title={"Location"} page={"location"} />
      <div className="relative">
        <img className="" src="/src/assets/imgs/world-map-desktop.png" />
        <LocationCard className={` top-[71px] left-[147px]`}>
          New York
        </LocationCard>

        <LocationCard className={` top-[18px] left-[393px]`}>
          London
        </LocationCard>

        <LocationCard className={`top-[78px] right-[65px]`}>
          Yokohama
        </LocationCard>

        <LocationCard className={`bottom-[203px] right-[142px]`}>
          Jakarta
        </LocationCard>
      </div>

      <div className="flex  justify-center gap-6 my-[50px] items-center ">
        <h2 className="text-h2 w-[22%]">Your city not listed?</h2>
        <p className="w-[30%] ">
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
