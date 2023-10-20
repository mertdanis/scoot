import React from "react";
import { BallTriangle } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex items-center justify-center">
      <BallTriangle
        height={300}
        width={300}
        radius={5}
        color="orange"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
