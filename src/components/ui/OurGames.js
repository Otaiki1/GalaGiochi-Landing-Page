import GameCard from "./GameCard";
import game1 from "../../assets/game1.svg";
import game2 from "../../assets/game2.svg";
import game3 from "../../assets/game3.svg";

function OurGames() {
  return (
    <div className="px-[120px] text-center font-ageer pb-[100px]">
      <div className="bg-[#FAFAFA] rounded-[10px] pt-[96px] pb-[163px] px-[114px]">
        <h2 className="mb-[47px] font-bold text-[30px] font-poppins leading-[45px] text-[#3737A4]">
          Our Games
        </h2>
        <div className="w-full grid grid-cols-[1fr_1fr_1fr] gap-6">
          <GameCard name={"CROSSWORDS"} img={game1} />
          <GameCard name={"WORDSEARCH"} img={game2} />
          <GameCard name={"JIGSAW"} img={game3} />
          <GameCard name={"SPINTHEWHEEL"} img={game1} />
          <GameCard name={"SCAVENGERHUNT"} img={game2} />
          <GameCard name={"QUIZ"} img={game3} />
        </div>
      </div>
    </div>
  );
}

export default OurGames;
