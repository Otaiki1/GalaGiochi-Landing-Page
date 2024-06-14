import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";

function Footer() {
  return (
    <div className="pt-[121px] pb-[113px]">
      <ul
        className="flex items-center justify-center gap-x-[56px] text-[
#0A142F] text-sm leading-[18px] mb-[19px]"
      >
        <li>Home</li>
        <li>Experience</li>
        <li>News</li>
        <li>About us</li>
        <li>Jobs</li>
        <li>Contact</li>
      </ul>
      <div className="flex items-center gap-x-[25px] justify-center">
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>
      <h6 className="font-normal text-xs leading-[18px] text-[#0A142F] mt-[27px] text-center">
        © Copyright 2024 - Galagiochi
      </h6>
    </div>
  );
}

export default Footer;
