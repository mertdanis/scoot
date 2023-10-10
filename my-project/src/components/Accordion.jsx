import React, { useState } from "react";

function Accordion({ title, content, i }) {
  const [isOpen, setIsOpen] = useState(null);
  const [index, setIndex] = useState("");

  console.log(index);

  return (
    <div className="bg-snow mb-6 px-[40px] py-[32px] flex flex-col gap-6 w-[730px]">
      <div className="flex items-center justify-between">
        <h4 className="text-h4">{title}</h4>
        <svg
          onClick={() => {
            setIsOpen(!isOpen);
            setIndex(title);
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="13"
          viewBox="0 0 18 13"
          fill="none"
          className="cursor-pointer"
        >
          <path d="M2 2L10 10L18 2" stroke="#FCB72B" stroke-width="3" />
        </svg>
      </div>
      <p>{content}</p>
    </div>
  );
}

export default Accordion;
