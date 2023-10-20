import React from "react";
import Button from "./Button";

function Jobs({ position, location }) {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-between p-5 bg-snow mb-6 ">
      <div className="flex flex-col gap-3">
        <h4 className="text-h4 text-dark_navy">{position}</h4>
        <p>{location}</p>
      </div>
      <Button>Apply</Button>
    </div>
  );
}

export default Jobs;
