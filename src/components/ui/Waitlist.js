import React from "react";
import send from "../../assets/sendIcon.svg";

function Waitlist() {
  return (
    <div className="flex items-center gap-x-[21px] py-[59px] justify-center bg-[#32319B] text-white">
      <h3 className="font-medium text-lg leading-7 text-white">
        Join our waitlist
      </h3>
      <div className="relative w-[530px] h-fit">
        <input
          type="text"
          className="w-full py-[26px] px-[29px] text-lg leading-[22px] text-[
            #0A142F] bg-white rounded-full"
          placeholder="Your email"
        />
        <img
          src={send}
          className="absolute right-[26px] top-3 w-[48px] h-[50px]"
          alt=""
        />
      </div>
    </div>
  );
}

export default Waitlist;
