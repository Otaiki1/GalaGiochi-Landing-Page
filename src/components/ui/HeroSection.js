import EnterGameLink from "./EnterGameLink";

function HeroSection() {
  return (
    <div className="py-6 px-[120px]">
      <div className="w-full bg-[#FAFAFA] pt-[96px] pb-[136px] px-[120px] text-center rounded-[10px] shadow-md">
        <h1 className="font-bold text-5xl mb-[47px] leading-[72px] text-[#3737A4]">
          The Ultimate Game Arcade
        </h1>
        <p className="font-medium text-xl leading-[35px] text-[#0C0C4F] max-w-[960px] mx-auto mb-[41px]">
          Our platform offers a variety of games that cater to all types of
          gamers, from casual players to hardcore enthusiasts. Get started today
          and discover the thrill of gaming in the Web3 era
        </p>
        <div className="flex font-ageer items-center gap-x-6 justify-center mb-[47px]">
          <button className="py-3 px-6 text-2xl leading-8 text-white rounded-full bg-blueGradient">
            Create Game
          </button>
          <button className="py-3 px-6 text-2xl leading-8 bg-white text-[#3737A4] border-[1px] border-[#3737A4] rounded-full">
            Play Game
          </button>
        </div>
        <EnterGameLink />
      </div>
    </div>
  );
}

export default HeroSection;
