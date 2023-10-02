import React from "react";

function Button({ children }) {
  return (
    <button className="bg-yellow p-3 font-space-mono text-white">
      {children}
    </button>
  );
}

export default Button;
