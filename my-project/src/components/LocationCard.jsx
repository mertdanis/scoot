import React from "react";

function LocationCard({ location, className }) {
  return (
    <div className={`absolute  ${className}`}>
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
      <p className=""> {location}</p>
    </div>
  );
}

export default LocationCard;
