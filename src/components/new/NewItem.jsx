import React from "react";

function NewItem() {
  return (
    <div>
      <div className=" max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-[377px] h-[244px] origin-top-left rotate-180"
          src={props.image}
        />
        <div className="w-[360px] h-[49px] text-right text-gray-900 text-lg font-bold font-['Montserrat'] leading-[25.20px]">
          {props.context}
        </div>
        <div className="w-[142px] text-right text-zinc-500 text-sm font-normal font-['Open Sans'] leading-snug">
          {props.created_at}
        </div>
        <div className="w-[142px] text-right text-zinc-500 text-sm font-normal font-['Open Sans'] leading-snug">
          {props.updated_at}
        </div>
      </div>
    </div>
  );
}

export default NewItem;
