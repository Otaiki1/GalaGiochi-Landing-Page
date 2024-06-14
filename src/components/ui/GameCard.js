import React from "react";
import puzzle from "../../assets/puzzle.svg";

function GameCard({ name, img }) {
  return (
    <div className="w-full rounded-[24px] overflow-hidden">
      <div className="px-6 py-[51px] h-[308px] flex justify-center bg-[#474785] bg-opacity-25 ">
        <img src={img} alt="" />
      </div>
      <div className="pt-6 pb-12 bg-[#32319B] text-white text-[28px] leading-8">
        {name}
      </div>
    </div>
  );
}

export default GameCard;
