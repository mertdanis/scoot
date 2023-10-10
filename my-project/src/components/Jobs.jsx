import React from "react";
import Button from "./Button";

function Jobs({ position, location }) {
  return (
    <div className="flex justify-between p-3">
      <div className="flex flex-col gap-3">
        <p>{position}</p>
        <p>{location}</p>
      </div>
      <Button>Apply</Button>
    </div>
  );
}

export default Jobs;
