import wheel from "../../assets/wheelSpin.png";
import puzzle from "../../assets/puzzle.svg";

function AboutSection() {
  return (
    <div className="pt-[76px] pb-[100px] px-[120px] text-white text-center">
      <h2 className="font-bold text-[30px] leading-[45px] mb-[50px] text-[#3737A4]">
        About Galagiochi
      </h2>
      <div className="grid grid-cols-[1.7fr_1fr] gap-x-6 mb-[27px]">
        <div className="pt-[66px] rounded-[10px] pb-[105px] bg-[#32319B] pl-[73px] pr-[59px]">
          <h4 className="font-bold text-2xl leading-10 mb-3">
            Pioneering Web3 Platform
          </h4>
          <p className="text-[17px] leading-[30px]">
            Built on the blockchain, Galagiochi combines the best of blockchain and
            gaming. Our mission is to create engaging, secure, and rewarding fun games to keep users busy and make communities have bonding activities.
          
          </p>
        </div>
        <div className="bg-black w-full h-full rounded-[10px] flex justify-center items-center">
          <img src={wheel} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1.7fr] gap-x-6">
        <div className="bg-black w-full h-full rounded-[10px] flex justify-center items-center">
          <img src={puzzle} alt="" />
        </div>
        <div className="pt-[66px] rounded-[10px] pb-[105px] bg-[#C76B9C] pl-[80px] pr-[100px]">
          <h4 className="font-bold text-2xl leading-10 mb-3">
            Diverse Gaming Options
          </h4>
          <p className="text-[17px] leading-[30px]">
            Whether you're solving puzzles, participating in scavenger hunts, or
            playing arcade games, you'll find something to love at Galagiochi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
