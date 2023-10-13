import React from "react";

function LocationCard({ className, children }) {
  return (
    <div className={`  absolute ${className}`}>
      <div className="flex flex-col items-center justify-center">
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
          <g>
            <text
              x="50%"
              y="50%"
              text-anchor="middle"
              fill="#495567"
              dy="-5px"
              fontSize={"24px"}
              fontWeight={"700"}
            >
              {children}
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default LocationCard;
