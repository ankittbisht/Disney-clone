import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div className="text-white flex items-center gap-2 font-semibold cursor-pointer hover:underline underline-offset-8 mb-2">
      <Icon />
      <h2 className= " text-sm md:text-base">{name}</h2>
    </div>
  );
}

export default HeaderItem;
