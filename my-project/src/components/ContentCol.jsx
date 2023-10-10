import React from "react";

function ContentCol({ title, content, children }) {
  return (
    <div className="flex flex-col gap-6  items-center ">
      <div className="relative">{children}</div>
      <h4 className="text-h4 pt-[32px]">{title}</h4>
      <p className="w-[70%] text-center">{content}</p>
    </div>
  );
}

export default ContentCol;
