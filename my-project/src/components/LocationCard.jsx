import React from "react";

function LocationCard({ className, children }) {
  return (
    <div className={` absolute   ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="189"
        height="89"
        viewBox="0 0 189 89"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M189 0.444336H0V72.4443H78L94 88.4443L110 72.4443H189V0.444336Z"
          fill="#FCB72B"
        />
      </svg>
      <h4 className="text-h4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   ">
        {" "}
        {children}
      </h4>
    </div>
  );
}

export default LocationCard;
