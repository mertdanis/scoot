import React from "react";

function SectionTitle({ title, className }) {
  return (
    <h2 className={`text-dark_navy text-h2 text-center mb-[50px] ${className}`}>
      {" "}
      {title}
    </h2>
  );
}

export default SectionTitle;
