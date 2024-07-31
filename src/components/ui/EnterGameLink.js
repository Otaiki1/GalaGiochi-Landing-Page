function EnterGameLink() {
  return (
    <div className="flex flex-col items-center font-ageer">
      <h3 className="mb-4 text-2xl leading-9 text-[#3737A4] font-poppins">
        Enter Game Link
      </h3>
      <div className="flex items-center gap-x-2">
        <input
          type="text"
          placeholder="galagiochi.com/str-scr-bss"
          className="py-3 px-6 text-base leading-5 font-poppins font-medium w-[337px] text-[#
808080] border-[1px] border-[#787884] rounded-full"
        />
        <button className="py-3 px-6 bg-primaryGradient text-white text-xl rounded-full">
          Play Game
        </button>
      </div>
    </div>
  );
}

export default EnterGameLink;
