import React from "react";

function ContentRow({ title, content }) {
  return (
    <div className="">
      <img src="" alt="" />
      <h4 className="text-dark_navy text-h4 mb-[27px]">{title}</h4>
      <p>{content}</p>
    </div>
  );
}

export default ContentRow;
